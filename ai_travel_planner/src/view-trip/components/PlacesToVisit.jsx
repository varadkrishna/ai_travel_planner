import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  if (!trip?.tripData?.itinerary) {
    return <div>No trip data available</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-6">Places To Visit</h2>

      <div className="space-y-6">
        {trip.tripData.itinerary.map((item, dayIndex) => (
          <div key={dayIndex} className="bg-gray-100 p-4 rounded-lg shadow-md grid grid-cols-2 gap-5">
            <h3 className="font-bold text-lg mb-4">{item.day}</h3>

            <div className="space-y-2">
              {item.plan.map((place, placeIndex) => (
                <div key={placeIndex} className="pl-4 border-l-2 border-orange-400">
                  <h4 className="font-semibold text-sm text-orange-600">{place.time}</h4>
                  <p className="text-gray-700">{place.activity}</p> {/* Assuming place has 'activity' field */}
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
