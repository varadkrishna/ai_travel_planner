import axios from "axios"

const BASE_URL='https://places.googleapis.com/v1/places:searchText'

const Config ={
    headers:{
        'Content-Type' :'application/json'
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask':[
            'places.photos',
            'places.displayName',
            'places.id'
        ]

    }
}

export const GetPlaceDetails=(data)=>axios.post(BASE_URL,data,Config)
export const PHOTO_REF_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY