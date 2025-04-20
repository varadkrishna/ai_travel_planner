export const SelectTravelesList = [
    {
        id:1,
        title:'Just me',
        desc:'A sole traveles in exploration',
        icon:'✈',
        people:'1'
    },
    {
        id:2,
        title:'A couple',
        desc:'Two people in love',
        icon:'❤',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'👪',
        people: '3 to 5'
    },
    {
        id:4,
        title:'Friends',
        desc:'A group of friends on an adventure',
        icon:'👫',
        people: '5 to 10'
    },
    
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Low',
        desc:'A budget of $500 or less',
        icon:'💵',
    },
    {
        id:2,
        title:'Medium',
        desc:'A budget of $500 to $1000',
        icon:'💵',
    },
    {
        id:3,
        title:'High',
        desc:'A budget of $1000 or more',
        icon:'💵',
    },

]

export const AI_PROMPT="Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me hotels options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placename, place details, place image url, geo coordinates, ticket pricing, time travel each of the location for {total days} days with each day plan with best time to visit in JSON format."