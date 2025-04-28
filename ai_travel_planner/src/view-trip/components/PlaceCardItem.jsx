import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React from 'react'

import { FaMapLocation } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem() {
  const [photoUrl, setPhotoUrl]=useState();
    useEffect(()=>{
      place&&GetPlacePhoto();
    },[place])
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:place.placeName
      }
      const result = await GetPlaceDetailseDetails(data).then(resp =>{
        console.log(resp.data.places[0],photos[3].name)
  
        const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0],photos[3].name);
        console.log(photoUrl);
      })
    }
  return (
    <Link to ={'https://www.google.com/maps/search/?api=1&query='+place?.placeName} target='blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
      <img src={photoUrl} className='w-[130px] h-[130px] rounded-xl object-cover'/>   
      <div>
        <h2 className='font-bold text-lg'>{place.placeName}</h2>
        <p className='text-sm text-gray-400'>{place.placeDetails}</p>
        <h2 className='mt-2'>🕙 {place.timetotravel}</h2>
        <button size='sm'><FaMapLocation /></button>
        </div>                                                                                                                                                                                                                                                                                                           
    </div>
    </Link>
  )
}

export default PlaceCardItem
