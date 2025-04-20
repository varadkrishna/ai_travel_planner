import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text:
            "Generate Travel Plan for Location: las vegas, for 3 days for couple with a low budget, give me hotels options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place Name, Place details, place image url, geo coordinates, ticket pricing, Time pricing, rating, Time travel each of the location for 3 days with each day plan with the best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify({
            hotels: [
              {
                hotelName: "The D Las Vegas",
                hotelAddress: "301 Fremont Street, Las Vegas, NV 89101",
                price: "$50-$100 per night",
                hotelImageUrl: "https://www.theDcasino.com/images/hero/main-hero-02.jpg",
                geoCoordinates: { latitude: 36.1695, longitude: -115.1438 },
                rating: "3.5 stars",
                description:
                  "A budget-friendly hotel located in downtown Las Vegas with a retro vibe. It features a casino, a pool, and several dining options.",
              },
              {
                hotelName: "Circus Circus Hotel & Casino",
                hotelAddress: "2880 Las Vegas Blvd S, Las Vegas, NV 89109",
                price: "$60-$110 per night",
                hotelImageUrl: "https://www.circuscircus.com/images/exterior.jpg",
                geoCoordinates: { latitude: 36.1372, longitude: -115.1621 },
                rating: "3 stars",
                description:
                  "Affordable and family-friendly, Circus Circus offers free circus acts, a large arcade, and an indoor amusement park.",
              },
              {
                hotelName: "Excalibur Hotel & Casino",
                hotelAddress: "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
                price: "$70-$120 per night",
                hotelImageUrl: "https://www.excalibur.com/content/dam/MGM/excalibur/excalibur-hotel/overview/exterior-hero.jpg",
                geoCoordinates: { latitude: 36.0986, longitude: -115.1767 },
                rating: "3.5 stars",
                description:
                  "Castle-themed resort with multiple dining options, a casino, pools, and easy access to the Strip.",
              },
            ],
            itinerary: {
              day1: [
                {
                  placeName: "Fremont Street Experience",
                  placeDetails: "Lively pedestrian street featuring LED light shows, casinos, and street performances.",
                  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Fremont_Street_Experience.jpg",
                  geoCoordinates: { latitude: 36.1700, longitude: -115.1400 },
                  ticketPricing: "Free",
                  timeRequired: "3-4 hours",
                  rating: 4.6,
                  bestTime: "Evening (light show starts around 6 PM)",
                  travelTime: "Walkable if staying downtown, ~5 mins",
                },
                {
                  placeName: "Downtown Container Park",
                  placeDetails: "Open-air shopping and dining made from shipping containers. Family-friendly and artsy.",
                  imageUrl: "https://cdn.simpleviewinc.com/simpleview/image/upload/crm/lasvegas/ContainerPark1_c491a940-5a6c-45c2-b502-6f786fc3d712.jpg",
                  geoCoordinates: { latitude: 36.1706, longitude: -115.1368 },
                  ticketPricing: "Free Entry",
                  timeRequired: "1-2 hours",
                  rating: 4.3,
                  bestTime: "Late Afternoon",
                  travelTime: "5-minute walk from Fremont Street",
                },
              ],
              day2: [
                {
                  placeName: "Las Vegas Strip Walk",
                  placeDetails: "Explore world-famous casinos, themed hotels, street performers, and attractions.",
                  imageUrl: "https://cdn.britannica.com/83/94583-050-78F9B6B6/Las-Vegas-Strip.jpg",
                  geoCoordinates: { latitude: 36.1147, longitude: -115.1728 },
                  ticketPricing: "Free (unless entering paid attractions)",
                  timeRequired: "4-5 hours",
                  rating: 4.7,
                  bestTime: "Evening to see lights",
                  travelTime: "20 mins via Uber from downtown (~$10-15)",
                },
                {
                  placeName: "Bellagio Fountains",
                  placeDetails: "Iconic dancing water fountain show synced to music and lights.",
                  imageUrl: "https://cdn.getyourguide.com/img/location/5ffeb3a3a9985.jpeg/88.jpg",
                  geoCoordinates: { latitude: 36.1126, longitude: -115.1767 },
                  ticketPricing: "Free",
                  timeRequired: "30-45 mins",
                  rating: 4.8,
                  bestTime: "8 PM or later",
                  travelTime: "10-minute walk from center Strip",
                },
              ],
              day3: [
                {
                  placeName: "Seven Magic Mountains",
                  placeDetails: "Colorful rock art installation in the desert, a great photo op.",
                  imageUrl: "https://sevenmagicmountains.com/wp-content/uploads/2018/08/SMM-LV-001.jpg",
                  geoCoordinates: { latitude: 35.9959, longitude: -115.2702 },
                  ticketPricing: "Free",
                  timeRequired: "1 hour",
                  rating: 4.5,
                  bestTime: "Morning (avoid heat)",
                  travelTime: "30-minute drive from Vegas Strip",
                },
                {
                  placeName: "The Neon Museum",
                  placeDetails: "Museum showcasing iconic vintage neon signs of Vegas.",
                  imageUrl: "https://www.neonmuseum.org/images/about/Neon-Museum-Vintage-Signs.jpg",
                  geoCoordinates: { latitude: 36.1769, longitude: -115.1458 },
                  ticketPricing: "$20 per person (general admission)",
                  timeRequired: "1.5 hours",
                  rating: 4.4,
                  bestTime: "Sunset for great photos",
                  travelTime: "25 mins drive from Seven Magic Mountains",
                },
              ],
            },
          }),
        },
      ],
    },
  ],
});
