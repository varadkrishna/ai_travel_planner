import { SelectBudgetOptions, SelectTravelesList } from "../constants/options";
import { Toaster } from 'sonner'
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);

  const handleInputChange=(name,value)=>{
    setFormData([...formData, {name,value}])

  }

  useEffect(()=>{
    console.log(formData);
  }, [formData])

   const OnGenerateTrip = () => {
    if (formData?.noOfDays>5&&!formData?.location||!formData?.budget||!formData.traveler)
    {
      toast("Please fill all details carefully.")
      return;
    }
    console.log (formData);
  }
 

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your Travel preferences 🏕️</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences
      </p>

      <div className="mt-15 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-10 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange('location',v)
              },
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl my-10 font-medium">
          How many days are you planning your trip?
        </h2>
        <input placeholder={"Ex. 3 "} type="number"
        onChange={(e) => handleInputChange('noOfDays',e.target.value)} />
      </div>

      <div>
        <h2 className="text-xl my-10 font-medium">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleInputChange('budget', item.title)}
                className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'
              
                
                  
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-10 font-medium">Who do you plan on travelling with on your next adventure?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange ('traveler', item.title)}
              className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div>
      <button className='my-10 justify-end flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={OnGenerateTrip}>Generate Trip</button>
    </div>
    </div>
  );
}


export default CreateTrip;
