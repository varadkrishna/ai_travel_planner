import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig.jsx'; // ✅ Adjusted relative path
import InfoSection from '../components/InfoSection.jsx';
import { Plane } from 'lucide-react';
import PlacesToVisit from '../components/PlacesToVisit.jsx';

function ViewTrip() {
  const { tripId } = useParams(); // Retrieve tripId from the URL
  const [trip, setTrip] = useState(null); // Initialize trip as null

  useEffect(() => {
    if (tripId) {
      GetTripData();
    }
  }, [tripId]); // Dependency array ensures this runs when tripId changes

  const GetTripData = async () => {
    try {
      const docRef = doc(db, 'AITrips', tripId); // Reference to the specific trip document
      const docSnap = await getDoc(docRef); // Get the document snapshot

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setTrip(docSnap.data()); // Set the trip data to state
      } else {
        console.log('No such document!');
        toast.error('No trip found!');
      }
    } catch (error) {
      console.error('Error getting document:', error);
      toast.error('Failed to fetch trip data');
    }
  };

  // Display loading or error state if the trip data is not yet loaded
  if (!trip) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-gray-500">Loading trip details...</span>
      </div>
    );
  }

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Trip Information */}
      <InfoSection trip={trip} />

      {/* Recommended Hotels (if any) */}
      <Hotels trip ={trip}/>

      {/* Placeholder for hotels and other recommendations */}
      
      {/* Daily Plan (if any) */}
      <PlacesToVisit trip={trip} />
      {/* Placeholder for itinerary or other dynamic content */}
      
      {/* Footer (if any) */}
      <Footer trip ={trip}/>
      {/* Placeholder for footer */}
    </div>
  );
}

export default ViewTrip;
