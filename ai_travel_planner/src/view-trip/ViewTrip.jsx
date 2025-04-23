import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // ✅ Adjusted relative path

function ViewTrip() {
  const { tripId } = useParams();

  useEffect(() => {
    if (tripId) {
      GetTripData();
    }
  }, [tripId]);

  const GetTripData = async () => {
    try {
      const docRef = doc(db, 'AITrips', tripId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document:', docSnap.data());
      } else {
        console.log('No such document');
        toast.error('No trip found!');
      }
    } catch (error) {
      console.error('Error getting document:', error);
      toast.error('Failed to fetch trip data');
    }
  };

  return <div>View Trip Page - Trip ID: {tripId}</div>;
}

export default ViewTrip;