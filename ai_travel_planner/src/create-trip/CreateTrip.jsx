import { useState, useEffect } from "react";
import { toast } from "sonner";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { chatSession } from "@/service/AIMODAL";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from "../constants/options";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "budget") setSelectedBudget(value);
    if (name === "traveler") setSelectedTraveler(value);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const GetUserProfile = (tokenInfo) => {
    axios
      .get("https://www.googleapis.com/oauth2/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: "application/json",
        },
        params: {
          access_token: tokenInfo?.access_token,
        },
      })
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        toast.success("Signed in successfully");
        OnGenerateTrip();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch user profile");
      });
  };

  const login = useGoogleLogin({
    onSuccess: GetUserProfile,
    onError: (error) => {
      console.error(error);
      toast.error("Google login failed");
    },
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      !formData.location ||
      !formData.noOfDays ||
      !formData.budget ||
      !formData.traveler
    ) {
      toast.error("Please fill all details carefully.");
      return;
    }

    setLoading(true);

    try {
      const FINAL_PROMPT = AI_PROMPT.replace(
        "{location}",
        formData?.location?.label || "your destination"
      )
        .replace(/{total days}/g, formData?.noOfDays)
        .replace("{traveler}", formData?.traveler)
        .replace("{budget}", formData?.budget);

      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const generatedTrip = await result?.response?.text();
      console.log(generatedTrip);

      const docId = await SaveAiTrip(generatedTrip);
      toast.success("Trip generated successfully!");
      navigate("/view-trip/" + docId);
    } catch (err) {
      console.error("Error generating trip:", err);
      toast.error("Failed to generate trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const SaveAiTrip = async (TripData) => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem("user"));
      const docId = Date.now().toString();

      await setDoc(doc(db, "AiTrips", docId), {
        userSelection: formData,
        tripData: TripData,
        userEmail: user?.email,
        id: docId,
      });

      console.log("🔥 Trip successfully saved to Firestore.");
      return docId;
    } catch (err) {
      console.error("Error saving trip:", err);
      toast.error("Failed to save trip");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your Travel preferences 🏕️</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences
      </p>

      <div className="mt-15 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-10 font-medium">What is your destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl my-10 font-medium">How many days are you planning your trip?</h2>
        <input
          className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Ex. 3"
          type="number"
          onChange={(e) => handleInputChange("noOfDays", e.target.value)}
        />
      </div>

      <div>
        <h2 className="text-xl my-10 font-medium">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition ${selectedBudget === item.title ? "border-black bg-gray-100" : "border-gray-300"}`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-10 font-medium">Who do you plan on travelling with on your next adventure?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveler", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition ${selectedTraveler === item.title ? "border-black bg-gray-100" : "border-gray-300"}`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button
          disabled={loading}
          className="my-10 justify-center flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={OnGenerateTrip}
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Trip"
          )}
        </button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the app with Google authentication securely</p>
              <button
                onClick={login}
                className="my-10 flex justify-center items-center bg-black text-white font-bold py-2 px-4 rounded w-full"
              >
                <FcGoogle className="mr-2" />
                Sign In with Google
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
