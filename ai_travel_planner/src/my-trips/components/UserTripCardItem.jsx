import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useState } from 'react'

function UserTripCardItem(trip) {

   const [photoUrl, setPhotoUrl]=useStateate();
     useEffect(()=>{
       trip&&GetPlacePhoto();
     },[trip])
     const GetPlacePhoto=async()=>{
       const data={
         textQuery:trip?.userSelection?.location?.label
       }
       const result = await GetPlaceDetailsails(data).then(resp =>{
         console.log(resp.data.places[0],photos[3].name)
   
         const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0],photos[3].name);
         console.log(photoUrl);
       })
     }
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all '>
      <img src= {photoUrl} className='object-cover rounded-xl h-[220px]' />
      <div>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-sm text-gray-500'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection.budget}budget</h2>
      </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem
