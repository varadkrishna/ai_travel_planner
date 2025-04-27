import React from 'react'

function InfoSection({ trip }) {
  return (
    <div className="space-y-6">
      {/* Trip Image */}
      <div className="relative">
        <img
          src="/placeholder.jpg"
          alt="Trip destination"
          className="h-[350px] w-full object-cover rounded-xl"
        />
        <div className="absolute bottom-5 left-5 bg-black text-white text-sm px-4 py-2 rounded-xl shadow-lg">
          {trip?.userSelection?.location?.label}
        </div>
      </div>

      {/* Trip Details */}
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl text-gray-800">{trip?.userSelection?.location?.label}</h2>
        
        {/* Date, Budget, and Traveler Details */}
        <div className="flex gap-5 flex-wrap">
          <h2 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full text-sm shadow-md">
            🗓️ {trip?.userSelection?.noOfDays} Days
          </h2>
          <h2 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full text-sm shadow-md">
            💰 {trip?.userSelection?.budget} Budget
          </h2>
          <h2 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full text-sm shadow-md">
            🧳 {trip?.userSelection?.traveler} Travelers
          </h2>
        </div>

        {/* Hotel and Places */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Suggested Hotels:</h3>
          <div className="space-y-3">
            {trip?.tripData?.hotels?.map((hotel, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <div>
                  <h4 className="font-bold text-gray-700">{hotel.name}</h4>
                  <p className="text-gray-600 text-sm">{hotel.description}</p>
                </div>
                <p className="font-semibold text-blue-600">{hotel.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Popular Places to Visit:</h3>
          <div className="space-y-3">
            {trip?.tripData?.places?.map((place, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <div>
                  <h4 className="font-bold text-gray-700">{place.name}</h4>
                  <p className="text-gray-600 text-sm">{place.description}</p>
                </div>
                <p className="font-semibold text-blue-600">{place.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Your Itinerary:</h3>
          <div className="space-y-3">
            {trip?.tripData?.itinerary?.map((day, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-700">{`Day ${index + 1}: ${day.title}`}</h4>
                <p className="text-gray-600">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection;
