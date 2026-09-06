const locations = {
  sunnyvale: {
    name: "Sunnyvale",
    query: "Sunnyvale, CA",
    coords: [37.3688, -122.0363],
  },
  placerville: {
    name: "Placerville Main Street",
    query: "Main Street, Placerville, CA",
    coords: [38.7296, -120.7985],
  },
  elet: {
    name: "The Elet Hotel",
    query: "The Elet Hotel, 954 Park Ave, South Lake Tahoe, CA",
    coords: [38.9546, -119.9471],
  },
  sandHarbor: {
    name: "Sand Harbor",
    query: "Sand Harbor, NV",
    coords: [39.198, -119.9308],
  },
  emeraldBay: {
    name: "Emerald Bay / Vikingsholm",
    query: "Vikingsholm Parking Lot, South Lake Tahoe, CA",
    coords: [38.9536, -120.1106],
  },
  sutterCreek: {
    name: "Sutter Creek",
    query: "Main Street, Sutter Creek, CA",
    coords: [38.3929, -120.8024],
  },
  mariposa: {
    name: "The Yosemite Inn",
    query: "The Yosemite Inn, 5180 Jones St, Mariposa, CA 95338",
    coords: [37.493073, -119.97222],
  },
  valleyView: {
    name: "Valley View",
    query: "Valley View, Yosemite National Park, CA",
    coords: [37.7177, -119.6612],
  },
  bridalveil: {
    name: "Bridalveil Fall",
    query: "Bridalveil Fall Trailhead, Yosemite National Park, CA",
    coords: [37.7164, -119.6497],
  },
  curry: {
    name: "Curry Village",
    query: "Curry Village, Yosemite Valley, CA",
    coords: [37.7375, -119.5724],
  },
  vernal: {
    name: "Vernal Fall Footbridge",
    query: "Vernal Fall Footbridge, Yosemite National Park, CA",
    coords: [37.7275, -119.5445],
  },
  tunnelView: {
    name: "Tunnel View",
    query: "Tunnel View, Yosemite National Park, CA",
    coords: [37.7156, -119.6767],
  },
  oakhurst: {
    name: "Oakhurst",
    query: "Oakhurst, CA",
    coords: [37.328, -119.6493],
  },
  grant: {
    name: "General Grant Tree",
    query: "General Grant Tree Trail, Kings Canyon National Park, CA",
    coords: [36.7468, -118.9741],
  },
  sherman: {
    name: "General Sherman Tree",
    query: "General Sherman Tree, Sequoia National Park, CA",
    coords: [36.5818, -118.7512],
  },
  moro: {
    name: "Moro Rock",
    query: "Moro Rock, Sequoia National Park, CA",
    coords: [36.5443, -118.7657],
  },
  threeRivers: {
    name: "Eggers Drive Airbnb",
    query: "42031 Eggers Drive, Three Rivers, CA 93271",
    coords: [36.4388, -118.9045],
  },
  kettleman: {
    name: "Kettleman City",
    query: "Kettleman City, CA",
    coords: [36.0083, -119.9618],
  },
  paso: {
    name: "Paso Robles",
    query: "Downtown Paso Robles, CA",
    coords: [35.6266, -120.691],
  },
  morroBay: {
    name: "Morro Rock & Embarcadero",
    query: "Morro Rock, Morro Bay, CA",
    coords: [35.3693, -120.8669],
  },
  cayucos: {
    name: "Cayucos Pier",
    query: "Cayucos Pier, Cayucos, CA",
    coords: [35.4427, -120.8928],
  },
  cambria: {
    name: "Cambria Main Street",
    query: "Main Street, Cambria, CA",
    coords: [35.5641, -121.0807],
  },
  moonstone: {
    name: "Moonstone Beach",
    query: "Moonstone Beach Boardwalk, Cambria, CA",
    coords: [35.5762, -121.1121],
  },
  sanSimeon: {
    name: "San Simeon Lodge",
    query: "San Simeon Lodge, 9520 Castillo Drive, San Simeon, CA",
    coords: [35.6131, -121.1443],
  },
  elephantSeal: {
    name: "Elephant Seal Vista Point",
    query: "Elephant Seal Vista Point, San Simeon, CA",
    coords: [35.6639, -121.257],
  },
  hearstBeach: {
    name: "Hearst Memorial Beach",
    query: "William Randolph Hearst Memorial Beach, San Simeon, CA",
    coords: [35.5937, -121.1248],
  },
  raggedPoint: {
    name: "Ragged Point",
    query: "Ragged Point Inn, CA",
    coords: [35.7827, -121.3291],
  },
  mcway: {
    name: "McWay Falls",
    query: "McWay Falls, Big Sur, CA",
    coords: [36.1579, -121.6724],
  },
  bigSur: {
    name: "Big Sur",
    query: "Big Sur River Inn, Big Sur, CA",
    coords: [36.2704, -121.8081],
  },
  bixby: {
    name: "Bixby Creek Bridge",
    query: "Bixby Creek Bridge, Monterey County, CA",
    coords: [36.3715, -121.9017],
  },
  carmel: {
    name: "Carmel-by-the-Sea",
    query: "Ocean Avenue, Carmel-by-the-Sea, CA",
    coords: [36.5552, -121.9233],
  },
};

const stays = [
  {
    day: "Sat · Oct 3",
    name: "The Elet Hotel",
    place: "South Lake Tahoe",
    color: "#3f80a5",
    locationKey: "elet",
  },
  {
    day: "Sun · Oct 4",
    name: "The Yosemite Inn",
    place: "Mariposa",
    color: "#ef9e54",
    locationKey: "mariposa",
  },
  {
    day: "Mon · Oct 5",
    name: "Curry Village",
    place: "Unheated tent cabin",
    color: "#194f3d",
    locationKey: "curry",
  },
  {
    day: "Tue · Oct 6",
    name: "Three Rivers Airbnb",
    place: "42031 Eggers Drive · Three Rivers",
    color: "#9d6a45",
    locationKey: "threeRivers",
  },
  {
    day: "Wed · Oct 7",
    name: "San Simeon Lodge",
    place: "Highway 1",
    color: "#5b769c",
    locationKey: "sanSimeon",
  },
];

const days = [
  {
    id: "day-1",
    short: "Oct 3",
    weekday: "Saturday",
    title: "Sunnyvale → South Lake Tahoe",
    routeLabel: "Sierra launch",
    distance: "≈ 215 mi",
    drive: "≈ 4¼ hr base",
    stay: "The Elet Hotel",
    color: "#3f80a5",
    route: ["sunnyvale", "placerville", "elet", "sandHarbor", "elet"],
    timeline: [
      {
        time: "6:15",
        title: "Depart Sunnyvale",
        copy: "Start with a full tank. Take I-680 north, I-80 east and US-50 toward Tahoe.",
        tag: "Fuel",
        color: "#ef9e54",
      },
      {
        time: "8:45",
        title: "Placerville reset",
        copy: "Coffee, restroom and a 15-minute Main Street walk. Keep the stop under 25 minutes.",
        tag: "Pit stop",
        color: "#9d6a45",
      },
      {
        time: "11:00",
        title: "The Elet: park or leave bags",
        copy: "Check-in starts after 3. Ask the desk to hold luggage; otherwise lock everything out of sight.",
        tag: "Hotel",
        color: "#3f80a5",
      },
      {
        time: "11:30",
        title: "Heavenly Village lunch",
        copy: "Base Camp Pizza for a shared pie, or California Burger Co. for something quicker.",
        tag: "Food",
        color: "#ef9e54",
      },
      {
        time: "13:15",
        title: "Sand Harbor shoreline",
        copy: "Walk the boulder coves for 90–105 minutes. Stay here rather than extending to Crystal Bay unless casinos or live music are a priority.",
        tag: "Scenic",
        color: "#3f80a5",
      },
      {
        time: "15:45",
        title: "Check in and reset",
        copy: "Shower, layer up and leave the Mustang parked for dinner if possible.",
        tag: "Hotel",
        color: "#3f80a5",
      },
      {
        time: "17:30",
        title: "Lake sunset + dinner",
        copy: "Lakeside Beach or Edgewood for sunset; Azul Latin Kitchen or California Burger Co. afterward.",
        tag: "Food",
        color: "#ef9e54",
      },
    ],
    hikes: [
      ["Sand Harbor shoreline", "Easy · 1–2 mi flexible"],
      ["Logan Shoals overlook", "5-minute backup stop"],
    ],
    food: [
      [
        "Base Camp Pizza",
        "Veg: Fire Roasted Medley or Pear & Gorgonzola · Arnav: any pie",
        "Base Camp Pizza, South Lake Tahoe",
      ],
      [
        "Azul Latin Kitchen",
        "Veg: vegetable tacos/bowl · Arnav: meat or seafood",
        "Azul Latin Kitchen, South Lake Tahoe",
      ],
      [
        "Driftwood Cafe",
        "Veg: eggs, pancakes or oatmeal · Arnav: full breakfast",
        "Driftwood Cafe, South Lake Tahoe",
      ],
    ],
    checks: [
      ["Tahoe weather", "https://forecast.weather.gov/MapClick.php?lat=38.9332&lon=-119.9843"],
      ["US-50 conditions", "https://roads.dot.ca.gov/?roadnumber=50"],
    ],
  },
  {
    id: "day-2",
    short: "Oct 4",
    weekday: "Sunday",
    title: "Emerald Bay → Gold Country → Mariposa",
    routeLabel: "Alpine to foothills",
    distance: "≈ 205 mi",
    drive: "≈ 5 hr with stops",
    stay: "The Yosemite Inn",
    color: "#ef9e54",
    route: ["elet", "emeraldBay", "sutterCreek", "mariposa"],
    timeline: [
      {
        time: "6:30",
        title: "Breakfast, checkout and fuel",
        copy: "Eat near Heavenly Village or use a quick hotel breakfast. Fill up before Meyers.",
        tag: "Fuel",
        color: "#ef9e54",
      },
      {
        time: "8:00",
        title: "Vikingsholm trail",
        copy: "Two miles round trip with a 500-foot climb back. Keep passports, wallets and electronics with you.",
        tag: "Hike",
        color: "#194f3d",
      },
      {
        time: "10:15",
        title: "Leave Emerald Bay",
        copy: "Follow live navigation toward CA-88 and CA-49. Finish the winding section before dark.",
        tag: "Drive",
        color: "#3f80a5",
      },
      {
        time: "12:45",
        title: "Sutter Creek or Jackson",
        copy: "Fuel, restroom and a quick Main Street lunch or packed sandwiches.",
        tag: "Pit stop",
        color: "#9d6a45",
      },
      {
        time: "16:15",
        title: "The Yosemite Inn check-in",
        copy: "Check-in begins at 4. Unload, then walk downtown. Buy Yosemite breakfast, picnic food and power-bank supplies.",
        tag: "Hotel",
        color: "#ef9e54",
      },
      {
        time: "18:30",
        title: "1850 Restaurant",
        copy: "Target dinner time for two. The Bootjack burger and a house beer are the practical order.",
        tag: "Reserve",
        color: "#a64f3d",
      },
      {
        time: "20:00",
        title: "Yosemite prep",
        copy: "Fuel the Mustang, download offline maps and consolidate every scented item into one bear-locker bag.",
        tag: "Prep",
        color: "#194f3d",
      },
    ],
    hikes: [
      ["Vikingsholm trail", "2 mi · 500 ft · moderate return"],
      ["Inspiration Point", "10-minute optional overlook"],
    ],
    food: [
      [
        "Driftwood Cafe",
        "Veg: eggs, pancakes or oatmeal · Arnav: full breakfast",
        "Driftwood Cafe, South Lake Tahoe",
      ],
      [
        "Sutter Creek Main Street",
        "Choose a deli with a vegetarian sandwich/salad",
        "Main Street, Sutter Creek, CA",
      ],
      [
        "1850 Restaurant",
        "Call ahead: request current vegetarian entrée · Arnav: Bootjack burger",
        "1850 Restaurant, Mariposa, CA",
      ],
    ],
    checks: [
      ["CA-88 conditions", "https://roads.dot.ca.gov/?roadnumber=88"],
      ["CA-49 conditions", "https://roads.dot.ca.gov/?roadnumber=49"],
    ],
  },
  {
    id: "day-3",
    short: "Oct 5",
    weekday: "Monday",
    title: "The Yosemite Inn → Yosemite Valley",
    routeLabel: "Granite and waterfalls",
    distance: "≈ 55 road mi",
    drive: "≈ 1¼ hr + local",
    stay: "Curry Village · unheated",
    color: "#194f3d",
    route: ["mariposa", "curry", "valleyView", "bridalveil", "tunnelView", "curry"],
    timeline: [
      {
        time: "5:45",
        title: "Breakfast and checkout",
        copy: "Check out of The Yosemite Inn. Pack the day bag separately and keep food in one container that fits Curry Village’s bear locker.",
        tag: "Prep",
        color: "#194f3d",
      },
      {
        time: "6:00",
        title: "Drive Highway 140",
        copy: "Drive directly through El Portal to Curry Village. Do not use the morning for roadside viewpoints—the parking space is more valuable.",
        tag: "Drive",
        color: "#3f80a5",
      },
      {
        time: "7:15",
        title: "Curry Village front desk + parking",
        copy: "Show the lodging confirmation, request the guest parking pass and luggage hold, then park once for the day. Remove every scented item from the Mustang.",
        tag: "Parking",
        color: "#ef9e54",
      },
      {
        time: "7:45",
        title: "Vernal Fall Footbridge",
        copy: "Walk or shuttle to Happy Isles. The round trip is 1.6 miles with 400 feet of climbing; turn around at the footbridge.",
        tag: "Hike",
        color: "#194f3d",
      },
      {
        time: "10:15",
        title: "Leave the Mustang parked",
        copy: "Use the free Valley shuttle or walk to Yosemite Village, Lower Yosemite Fall and Cook’s Meadow.",
        tag: "Shuttle",
        color: "#3f80a5",
      },
      {
        time: "12:15",
        title: "Curry lunch",
        copy: "Pizza Deck, Meadow Grill if operating, or your packed lunch.",
        tag: "Food",
        color: "#ef9e54",
      },
      {
        time: "13:15",
        title: "Yosemite Village loop",
        copy: "Exploration Center, Lower Yosemite Fall, Cook’s Meadow and Sentinel Bridge.",
        tag: "Walk",
        color: "#194f3d",
      },
      {
        time: "15:45",
        title: "Check in to the tent",
        copy: "Move scented items into the bear locker, request an extra blanket and charge phones from power banks.",
        tag: "Tent",
        color: "#9d6a45",
      },
      {
        time: "16:40",
        title: "Evening scenic driving loop",
        copy: "Only now move the car: Valley View, a quick Bridalveil Fall stop, then Tunnel View for sunset before returning to Curry Village.",
        tag: "Sunset",
        color: "#ef9e54",
      },
      {
        time: "19:15",
        title: "Pizza Deck + warm sleep setup",
        copy: "Eat early, shower, put on dry thermals, thick socks and a beanie before the tent cools down.",
        tag: "Food",
        color: "#ef9e54",
      },
    ],
    hikes: [
      ["Bridalveil Fall", "0.5 mi · easy"],
      ["Vernal Fall Footbridge", "1.6 mi · 400 ft · moderate"],
      ["Lower Yosemite Fall", "1 mi · easy"],
      ["Cook’s Meadow", "1 mi · flat"],
    ],
    food: [
      [
        "Degnan’s Kitchen",
        "Veg: vegetarian sandwich/soup · Arnav: any sandwich",
        "Degnan's Kitchen, Yosemite Valley",
      ],
      [
        "Curry Pizza Deck",
        "Veg: build-your-own vegetable pizza + salad · Arnav: any pizza",
        "Curry Village Pizza Deck, Yosemite",
      ],
      [
        "Meadow Grill Taqueria",
        "Veg: bean/vegetable burrito—confirm beans are meat-free",
        "Meadow Grill, Curry Village, Yosemite",
      ],
    ],
    checks: [
      ["Yosemite conditions", "https://www.nps.gov/yose/planyourvisit/conditions.htm"],
      ["Highway 140", "https://roads.dot.ca.gov/?roadnumber=140"],
      ["Curry Village policies", "https://www.travelyosemite.com/plan/policies-information/"],
    ],
  },
  {
    id: "day-4",
    short: "Oct 6",
    weekday: "Tuesday",
    title: "Yosemite → giant sequoias → Three Rivers",
    routeLabel: "The big-tree traverse",
    distance: "≈ 220 mi",
    drive: "≈ 6 hr + walks",
    stay: "Three Rivers Airbnb",
    color: "#9d6a45",
    route: ["curry", "tunnelView", "oakhurst", "grant", "sherman", "moro", "threeRivers"],
    timeline: [
      {
        time: "5:45",
        title: "Pack the tent",
        copy: "Use the breakfast purchased in Mariposa; Curry food service begins too late for this schedule.",
        tag: "Early start",
        color: "#a64f3d",
      },
      {
        time: "6:15",
        title: "Leave Curry Village",
        copy: "Optional first-light Tunnel View stop if the previous evening was cloudy.",
        tag: "Drive",
        color: "#3f80a5",
      },
      {
        time: "8:00",
        title: "Oakhurst fuel and coffee",
        copy: "Fill the tank completely. Buy a backup picnic—there is no fuel inside Sequoia and Kings Canyon.",
        tag: "Fuel",
        color: "#ef9e54",
      },
      {
        time: "10:30",
        title: "General Grant Tree",
        copy: "Walk the easy half-mile loop and spend 40 minutes among the grove.",
        tag: "Hike",
        color: "#194f3d",
      },
      {
        time: "11:30",
        title: "Grant Grove lunch",
        copy: "Use the restaurant if its fall hours are active; otherwise eat the Oakhurst picnic.",
        tag: "Food",
        color: "#ef9e54",
      },
      {
        time: "13:15",
        title: "General Sherman Tree",
        copy: "Allow 80 minutes for parking, the downhill trail, photographs and the uphill return.",
        tag: "Hike",
        color: "#194f3d",
      },
      {
        time: "15:00",
        title: "Moro Rock or Giant Forest",
        copy: "Climb Moro Rock only if the access road is open and visibility is good; otherwise choose Giant Forest Museum and Tunnel Log.",
        tag: "Weather call",
        color: "#a64f3d",
      },
      {
        time: "16:00",
        title: "Descend CA-198",
        copy: "Use lower gears instead of riding the brakes. Avoid finishing this road after dark.",
        tag: "Mustang",
        color: "#9d6a45",
      },
      {
        time: "17:30",
        title: "Three Rivers Airbnb",
        copy: "Unload and cook at the Airbnb, or order Pizza Factory if you are exhausted.",
        tag: "Stay",
        color: "#9d6a45",
      },
    ],
    hikes: [
      ["General Grant loop", "0.5 mi · easy"],
      ["General Sherman", "≈ 1 mi · paved · uphill return"],
      ["Moro Rock", "350+ steps · exposed"],
    ],
    food: [
      [
        "Oakhurst grocery stop",
        "Pack hummus, cheese, fruit and nuts for her; any protein for you",
        "Vons, Oakhurst, CA",
      ],
      [
        "Grant Grove Restaurant",
        "Ask for the current vegetarian dish; keep picnic backup",
        "Grant Grove Restaurant, Kings Canyon",
      ],
      [
        "Pizza Factory",
        "Veg: vegetable pizza · Arnav: split half-and-half or order any toppings",
        "Pizza Factory, Three Rivers, CA",
      ],
    ],
    checks: [
      ["Sequoia roads", "https://www.nps.gov/seki/planyourvisit/road-conditions.htm"],
      ["Moro Rock access", "https://www.nps.gov/seki/planyourvisit/road-conditions.htm"],
    ],
  },
  {
    id: "day-5",
    short: "Oct 7",
    weekday: "Wednesday",
    title: "Three Rivers → Morro Bay → Cambria → San Simeon",
    routeLabel: "Crossing to the coast",
    distance: "≈ 195 mi",
    drive: "≈ 4¼ hr base",
    stay: "San Simeon Lodge",
    color: "#5b769c",
    route: [
      "threeRivers",
      "kettleman",
      "paso",
      "morroBay",
      "cayucos",
      "cambria",
      "moonstone",
      "sanSimeon",
      "elephantSeal",
      "hearstBeach",
      "sanSimeon",
    ],
    timeline: [
      {
        time: "7:30",
        title: "Breakfast and Airbnb checkout",
        copy: "Confirm the Mustang is fueled and the coastal bag is accessible.",
        tag: "Prep",
        color: "#194f3d",
      },
      {
        time: "8:00",
        title: "Drive west on CA-198",
        copy: "Continue toward CA-41 and CA-46. The landscape changes quickly from citrus to open valley.",
        tag: "Drive",
        color: "#3f80a5",
      },
      {
        time: "9:20",
        title: "Kettleman City reset",
        copy: "Twenty minutes for coffee, restroom and fuel if needed.",
        tag: "Pit stop",
        color: "#9d6a45",
      },
      {
        time: "11:10",
        title: "Paso Robles reset",
        copy: "Use this as a short fuel, restroom and coffee stop. Save lunch for the water in Morro Bay.",
        tag: "Pit stop",
        color: "#9d6a45",
      },
      {
        time: "12:00",
        title: "Morro Bay lunch + Morro Rock",
        copy: "Walk the Embarcadero and Morro Rock waterfront for about an hour. Choose a vegetarian café or seafood lunch.",
        tag: "Coast",
        color: "#ef9e54",
      },
      {
        time: "13:30",
        title: "Cayucos Pier",
        copy: "Take a 20-minute pier and beach walk. Skip it first if lunch runs long.",
        tag: "Quick stop",
        color: "#3f80a5",
      },
      {
        time: "14:10",
        title: "Cambria Main Street",
        copy: "Walk one compact village block, get coffee or bakery snacks, then continue to Moonstone Beach.",
        tag: "Town",
        color: "#9d6a45",
      },
      {
        time: "14:50",
        title: "Moonstone Beach Boardwalk",
        copy: "Walk the boardwalk for 30–40 minutes before heading north to the lodge.",
        tag: "Walk",
        color: "#3f80a5",
      },
      {
        time: "15:45",
        title: "San Simeon Lodge check-in",
        copy: "Unload and confirm breakfast hours for the early Highway 1 start.",
        tag: "Hotel",
        color: "#5b769c",
      },
      {
        time: "16:30",
        title: "Elephant Seal Vista Point",
        copy: "Free roadside viewing. Stay behind the barrier and give the animals space.",
        tag: "Wildlife",
        color: "#194f3d",
      },
      {
        time: "17:30",
        title: "Hearst Memorial Beach sunset",
        copy: "Return south for an easy beach sunset close to the lodge. No castle or room tour.",
        tag: "Sunset",
        color: "#ef9e54",
      },
      {
        time: "19:15",
        title: "Beach Bar & Grill",
        copy: "Eat at San Simeon Lodge to avoid another nighttime drive.",
        tag: "Food",
        color: "#ef9e54",
      },
    ],
    hikes: [
      ["Morro Rock & Embarcadero", "≈ 1 mi flexible · flat"],
      ["Cayucos Pier", "20-minute beach stop"],
      ["Cambria Main Street", "30-minute village walk"],
      ["Moonstone Beach Boardwalk", "1–2 mi flexible · easy"],
      ["Elephant Seal boardwalk", "Short and accessible"],
      ["Hearst Memorial Beach", "Easy sunset walk"],
    ],
    food: [
      [
        "Morro Bay Embarcadero",
        "Veg: café, tacos or grain bowl · Arnav: seafood",
        "Embarcadero, Morro Bay, CA",
      ],
      [
        "Cambria Main Street",
        "Coffee, bakery and vegetarian snack options",
        "Main Street, Cambria, CA",
      ],
      [
        "San Simeon Beach Bar & Grill",
        "Veg: eggplant parmesan, veggie burger or vegetarian pizza · Arnav: seafood/steak",
        "San Simeon Lodge Restaurant",
      ],
    ],
    checks: [
      ["Highway 1", "https://roads.dot.ca.gov/?roadnumber=1"],
      ["Morro Bay visitor info", "https://www.morrobay.org/"],
    ],
  },
  {
    id: "day-6",
    short: "Oct 8",
    weekday: "Thursday",
    title: "Highway 1 → Big Sur → Sunnyvale",
    routeLabel: "The coastal finale",
    distance: "≈ 205 mi",
    drive: "All-day scenic",
    stay: "Home",
    color: "#716083",
    route: [
      "sanSimeon",
      "raggedPoint",
      "mcway",
      "bigSur",
      "bixby",
      "carmel",
      "sunnyvale",
    ],
    closedRoute: ["sanSimeon", "elephantSeal", "raggedPoint", "sanSimeon", "paso", "sunnyvale"],
    timeline: [
      {
        time: "6:30",
        title: "Breakfast and checkout",
        copy: "The plan assumes Highway 1 is fully open. Confirm only construction delays and park access before loading the car.",
        tag: "Prep",
        color: "#194f3d",
      },
      {
        time: "7:00",
        title: "Depart San Simeon",
        copy: "Start north immediately; the best scenery arrives before the Big Sur lunch crowds.",
        tag: "Coast",
        color: "#3f80a5",
      },
      {
        time: "7:35",
        title: "Ragged Point",
        copy: "Coffee and a 25-minute overlook walk before continuing north.",
        tag: "Scenic",
        color: "#3f80a5",
      },
      {
        time: "9:30",
        title: "McWay Falls area",
        copy: "Use the official day-use lot if open and walk the overlook. Never park illegally on Highway 1.",
        tag: "Walk",
        color: "#194f3d",
      },
      {
        time: "11:30",
        title: "Big Sur lunch",
        copy: "Big Sur River Inn or Big Sur Bakery. Keep lunch under one hour.",
        tag: "Food",
        color: "#ef9e54",
      },
      {
        time: "13:10",
        title: "Bixby Creek Bridge",
        copy: "Use the signed viewpoint. Do not make unsafe cross-highway turns for photographs.",
        tag: "Scenic",
        color: "#3f80a5",
      },
      {
        time: "14:10",
        title: "Carmel coffee",
        copy: "Short Ocean Avenue walk, then begin the final drive home.",
        tag: "Pit stop",
        color: "#9d6a45",
      },
      {
        time: "16:30",
        title: "Arrive Sunnyvale",
        copy: "Arrival will move later if park stops, construction controls or lunch take longer.",
        tag: "Home",
        color: "#194f3d",
      },
    ],
    hikes: [
      ["Ragged Point", "Short overlook"],
      ["McWay Falls overlook", "Short overlook · state-park parking"],
      ["Bixby viewpoint", "Short roadside stop"],
      ["Carmel Ocean Avenue", "30-minute walk"],
    ],
    food: [
      [
        "Big Sur River Inn",
        "Veg: Pasta Castroville, portobello sandwich or vegan burger · Arnav: burger/salmon",
        "Big Sur River Inn, CA",
      ],
      [
        "Big Sur Bakery",
        "Vegetarian pastry/sandwich + coffee; verify daily board",
        "Big Sur Bakery, CA",
      ],
      ["Carmel Ocean Avenue", "Coffee stop", "Ocean Avenue, Carmel-by-the-Sea, CA"],
    ],
    checks: [
      ["Highway 1 status", "https://roads.dot.ca.gov/?roadnumber=1"],
      ["Big Sur parks", "https://www.parks.ca.gov/?page_id=570"],
    ],
  },
];

const routeColors = ["#3f80a5", "#ef9e54", "#194f3d", "#9d6a45", "#5b769c", "#716083"];
let currentDayIndex = 0;
let routeMode = localStorage.getItem("arnav-route-mode-v2") || "open";
let mapFocus = "all";

function googleRoute(routeKeys) {
  const route = routeKeys.map((key) => locations[key]);
  const origin = encodeURIComponent(route[0].query);
  const destination = encodeURIComponent(route.at(-1).query);
  const waypoints = route
    .slice(1, -1)
    .map((place) => place.query)
    .join("|");
  const waypointParam = waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : "";
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypointParam}&travelmode=driving`;
}

function splitRoute(routeKeys, maxLocations = 5) {
  if (routeKeys.length <= maxLocations) return [routeKeys];
  const segments = [];
  let start = 0;
  while (start < routeKeys.length - 1) {
    const end = Math.min(start + maxLocations - 1, routeKeys.length - 1);
    segments.push(routeKeys.slice(start, end + 1));
    start = end;
  }
  return segments;
}

function routeButtons(routeKeys, compact = false) {
  const segments = splitRoute(routeKeys);
  return segments
    .map((segment, index) => {
      const start = locations[segment[0]].name;
      const end = locations[segment.at(-1)].name;
      const label =
        segments.length === 1
          ? compact
            ? "Open route"
            : "Google Maps route"
          : `Part ${index + 1}: ${start} → ${end}`;
      return `
        <a
          class="button ${index === 0 ? "primary" : "secondary"}"
          href="${googleRoute(segment)}"
          target="_blank"
          rel="noreferrer"
        >
          ${label}
        </a>
      `;
    })
    .join("");
}

function googleSearch(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function appleSearch(place) {
  return `https://maps.apple.com/?q=${encodeURIComponent(place.query)}`;
}

function renderStays() {
  document.getElementById("stay-strip").innerHTML = stays
    .map(
      (stay, index) => `
        <a
          class="stay-card"
          style="--stay-color:${stay.color}"
          href="${googleSearch(locations[stay.locationKey].query)}"
          target="_blank"
          rel="noreferrer"
          aria-label="Open ${stay.name} in Google Maps"
        >
          <span class="stay-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="day-label">${stay.day}</span>
          <h3>${stay.name}</h3>
          <p>${stay.place}</p>
          <span class="stay-card-footer">
            <span class="booked-pill">✓ Booked</span>
            <span class="stay-map-link">Open map ↗</span>
          </span>
        </a>
      `,
    )
    .join("");
}

function renderDayTabs() {
  const tabs = document.getElementById("day-tabs");
  tabs.innerHTML = days
    .map(
      (day, index) => `
        <button
          class="day-tab ${index === currentDayIndex ? "active" : ""}"
          data-day-index="${index}"
          role="tab"
          aria-selected="${index === currentDayIndex}"
        >
          <strong>${day.short}</strong>
          <span>${day.weekday}</span>
        </button>
      `,
    )
    .join("");
  tabs.querySelectorAll(".day-tab").forEach((button) => {
    button.addEventListener("click", () => {
      currentDayIndex = Number(button.dataset.dayIndex);
      renderDayTabs();
      renderDayDetail();
    });
  });
}

function routeForDay(day) {
  if (day.id === "day-6" && routeMode === "closed") return day.closedRoute;
  return day.route;
}

function renderDayDetail() {
  const day = days[currentDayIndex];
  const route = routeForDay(day);
  const navigationButtons = routeButtons(route);
  const detail = document.getElementById("day-detail");
  const timeline = day.timeline
    .map(
      (item) => `
        <div class="timeline-item" style="--item-color:${item.color}">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-copy">
            <strong>${item.title}</strong>
            <p>${item.copy}</p>
            <span class="tag" style="--tag-color:${item.color}">${item.tag}</span>
          </div>
        </div>
      `,
    )
    .join("");

  const hikes = day.hikes
    .map(
      ([name, detailText]) => `
        <a class="mini-link" href="${googleSearch(name)}" target="_blank" rel="noreferrer">
          <span>${name}</span><small>${detailText} ↗</small>
        </a>
      `,
    )
    .join("");

  const food = day.food
    .map(
      ([name, detailText, query]) => `
        <a class="mini-link" href="${googleSearch(query)}" target="_blank" rel="noreferrer">
          <span>${name}</span><small>${detailText} ↗</small>
        </a>
      `,
    )
    .join("");

  const checks = day.checks
    .map(
      ([name, href]) => `
        <a class="mini-link" href="${href}" target="_blank" rel="noreferrer">
          <span>${name}</span><small>Live check ↗</small>
        </a>
      `,
    )
    .join("");

  const stopLinks = [...new Set(route)]
    .map((key) => locations[key])
    .map(
      (place) => `
        <a class="mini-link" href="${appleSearch(place)}" target="_blank" rel="noreferrer">
          <span>${place.name}</span><small>Apple Maps ↗</small>
        </a>
      `,
    )
    .join("");

  detail.innerHTML = `
    <article class="day-detail-card">
      <header class="day-header">
        <div>
          <p class="eyebrow">${day.routeLabel.toUpperCase()}</p>
          <h3>${day.title}</h3>
        </div>
        <div class="day-meta">
          <span>${day.distance}</span>
          <span>${day.drive}</span>
          <span>Stay: ${day.stay}</span>
        </div>
      </header>
      <div class="day-body">
        <div>
          <div class="timeline">${timeline}</div>
        </div>
        <aside class="day-sidebar">
          <div class="day-actions">${navigationButtons}</div>
          <div class="info-card">
            <span>Planned walks</span>
            <div class="link-list">${hikes}</div>
          </div>
          <div class="info-card">
            <span>Food options</span>
            <div class="link-list">${food}</div>
          </div>
          <div class="info-card">
            <span>Apple Maps stops</span>
            <div class="link-list">${stopLinks}</div>
          </div>
          <div class="info-card">
            <span>Before departure</span>
            <div class="link-list">${checks}</div>
          </div>
        </aside>
      </div>
    </article>
  `;
}

function renderRouteLauncher() {
  const launcher = document.getElementById("route-launcher-list");
  launcher.innerHTML = days
    .map((day, index) => {
      const route = routeForDay(day);
      const navigationButtons = routeButtons(route, true);
      const stops = [...new Set(route)]
        .map((key) => {
          const place = locations[key];
          return `
            <a
              class="route-stop-pill"
              href="${googleSearch(place.query)}"
              target="_blank"
              rel="noreferrer"
            >
              ${place.name}
            </a>
          `;
        })
        .join("");

      return `
        <article
          class="route-card"
          id="route-${day.id}"
          style="--route-color:${routeColors[index]}"
        >
          <div class="route-card-top">
            <div>
              <span class="route-day">${day.short} · Day ${index + 1}</span>
              <h3>${day.title}</h3>
            </div>
            <div class="route-button-group">
              <button class="button map-preview-button" data-map-focus="${index}">
                Preview map
              </button>
              ${navigationButtons}
            </div>
          </div>
          <div class="route-stops" aria-label="${day.short} driving stops">${stops}</div>
          <p>Walks linked separately: ${day.hikes.map(([name]) => name).join(" · ")}</p>
        </article>
      `;
    })
    .join("");
  launcher.querySelectorAll("[data-map-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      setMapFocus(button.dataset.mapFocus);
      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function projectToRouteMap(coords) {
  const [lat, lon] = coords;
  const width = 820;
  const height = 620;
  const horizontalPadding = 48;
  const verticalPadding = 42;
  const minLon = -122.2;
  const maxLon = -118.55;
  const minLat = 35.15;
  const maxLat = 39.3;
  const x =
    horizontalPadding +
    ((lon - minLon) / (maxLon - minLon)) * (width - horizontalPadding * 2);
  const y =
    verticalPadding +
    ((maxLat - lat) / (maxLat - minLat)) * (height - verticalPadding * 2);
  return [x, y];
}

function focusedDayEntries() {
  if (mapFocus === "all") {
    return days.map((day, index) => ({ day, index }));
  }
  const index = Number(mapFocus);
  return Number.isInteger(index) && days[index]
    ? [{ day: days[index], index }]
    : days.map((day, dayIndex) => ({ day, index: dayIndex }));
}

function renderRouteMap() {
  const map = document.getElementById("trip-map");
  const visibleDays = focusedDayEntries();
  const routeKeys = [
    ...new Set(visibleDays.flatMap(({ day }) => routeForDay(day))),
  ];
  const hotelKeys = new Set(["elet", "mariposa", "curry", "threeRivers", "sanSimeon"]);
  const labelOffsets = {
    sunnyvale: [10, -13, "start"],
    elet: [-14, 28, "end"],
    sandHarbor: [14, -11, "start"],
    emeraldBay: [-12, -12, "end"],
    mariposa: [-12, -13, "end"],
    curry: [12, -13, "start"],
    grant: [-12, -13, "end"],
    sherman: [-12, 20, "end"],
    threeRivers: [-12, 19, "end"],
    morroBay: [-12, -18, "end"],
    cambria: [-12, -12, "end"],
    sanSimeon: [14, 27, "start"],
    raggedPoint: [12, -18, "start"],
    mcway: [12, -10, "start"],
    bixby: [12, -10, "start"],
    carmel: [12, -10, "start"],
  };

  const routeLines = visibleDays
    .map(({ day, index }) => {
      const points = routeForDay(day)
        .map((key) => projectToRouteMap(locations[key].coords).join(","))
        .join(" ");
      const dashed = day.id === "day-6" && routeMode === "closed" ? "10 9" : "";
      return `
        <polyline class="route-halo" points="${points}"></polyline>
        <polyline
          class="route-path"
          points="${points}"
          stroke="${routeColors[index]}"
          ${dashed ? `stroke-dasharray="${dashed}"` : ""}
        ></polyline>
      `;
    })
    .join("");

  const markers = routeKeys
    .map((key) => {
      const place = locations[key];
      const [x, y] = projectToRouteMap(place.coords);
      const visibleEntry = visibleDays.find(({ day }) => routeForDay(day).includes(key));
      const dayIndex =
        visibleEntry?.index ?? days.findIndex((day) => routeForDay(day).includes(key));
      const color = routeColors[Math.max(dayIndex, 0)];
      const hotelClass = hotelKeys.has(key) ? " hotel" : "";
      return `
        <a href="${googleSearch(place.query)}" target="_blank" rel="noreferrer">
          <circle class="route-stop-ring${hotelClass}" cx="${x}" cy="${y}" r="${hotelKeys.has(key) ? 8 : 6}"></circle>
          <circle class="route-stop-dot" cx="${x}" cy="${y}" r="${hotelKeys.has(key) ? 4.5 : 3.5}" fill="${color}">
            <title>${place.name} — open in Google Maps</title>
          </circle>
        </a>
      `;
    })
    .join("");

  const labels = Object.entries(labelOffsets)
    .filter(([key]) => routeKeys.includes(key))
    .map(([key, [dx, dy, anchor]]) => {
      const place = locations[key];
      const [x, y] = projectToRouteMap(place.coords);
      return `
        <text
          class="route-map-label"
          x="${x + dx}"
          y="${y + dy}"
          text-anchor="${anchor}"
        >${place.name.replace(" / Vikingsholm", "")}</text>
      `;
    })
    .join("");

  map.innerHTML = `
    <svg
      class="route-map-svg"
      viewBox="0 0 820 620"
      role="img"
      aria-labelledby="route-map-title route-map-description"
    >
      <title id="route-map-title">${
        mapFocus === "all"
          ? "California trip route overview"
          : `${days[Number(mapFocus)].short} driving route`
      }</title>
      <desc id="route-map-description">
        ${
          mapFocus === "all"
            ? "Six color-coded driving routes from Sunnyvale through Lake Tahoe, Yosemite, Sequoia, Morro Bay, Cambria, San Simeon and the Big Sur coast."
            : `The planned stops for ${days[Number(mapFocus)].title}.`
        }
      </desc>
      <defs>
        <linearGradient id="route-ocean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dcecf2"></stop>
          <stop offset="100%" stop-color="#b9d7e2"></stop>
        </linearGradient>
        <linearGradient id="route-land" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8f3e8"></stop>
          <stop offset="100%" stop-color="#e6dcc7"></stop>
        </linearGradient>
        <pattern id="route-grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M 44 0 L 0 0 0 44" fill="none" stroke="rgba(23,32,28,.055)" stroke-width="1"></path>
        </pattern>
      </defs>
      <rect width="820" height="620" fill="url(#route-ocean)"></rect>
      <path
        class="route-land"
        d="M0 0 H820 V620 H224 C205 584 190 548 180 510 C167 459 147 424 112 390 C80 359 49 342 0 330 Z"
        fill="url(#route-land)"
      ></path>
      <rect width="820" height="620" fill="url(#route-grid)"></rect>
      <path
        class="route-sierra"
        d="M610 34 C690 105 654 167 715 232 C760 282 709 336 762 414 C793 460 762 526 806 588"
      ></path>
      <text class="terrain-label ocean-label" x="40" y="540">PACIFIC</text>
      <text class="terrain-label sierra-label" x="705" y="170" transform="rotate(67 705 170)">SIERRA NEVADA</text>
      <g class="route-lines">${routeLines}</g>
      <g class="route-markers">${markers}</g>
      <g class="route-labels">${labels}</g>
      <g class="map-north" transform="translate(758 52)">
        <path d="M0 22 L8 0 L16 22 L8 17 Z"></path>
        <text x="8" y="36" text-anchor="middle">N</text>
      </g>
    </svg>
    <div class="route-map-caption">
      <span>${
        mapFocus === "all"
          ? "Full-trip geographic overview."
          : `${days[Number(mapFocus)].short} · ${days[Number(mapFocus)].routeLabel}`
      }</span>
      <span>Each dot opens that stop in Google Maps.</span>
    </div>
  `;
}

function renderMapPanel() {
  const controls = document.getElementById("map-day-controls");
  controls.innerHTML = `
    <button class="map-day-button ${mapFocus === "all" ? "active" : ""}" data-map-day="all">
      <span class="map-day-dot all-days"></span>
      <span><strong>All</strong><small>Full loop</small></span>
    </button>
    ${days
      .map(
        (day, index) => `
          <button
            class="map-day-button ${mapFocus === String(index) ? "active" : ""}"
            data-map-day="${index}"
            style="--day-color:${routeColors[index]}"
          >
            <span class="map-day-dot"></span>
            <span><strong>${day.short}</strong><small>Day ${index + 1}</small></span>
          </button>
        `,
      )
      .join("")}
  `;

  const title = document.getElementById("map-focus-title");
  const kicker = document.getElementById("map-focus-kicker");
  const copy = document.getElementById("map-focus-copy");
  const stops = document.getElementById("map-focus-stops");
  const actions = document.getElementById("map-panel-actions");

  if (mapFocus === "all") {
    kicker.textContent = "Map focus";
    title.textContent = "Full California loop";
    copy.textContent =
      "Six drive days and every planned driving stop. Pick a day to declutter the map or scroll this complete stop list.";
    const completeStopList = [];
    const seenStops = new Set();
    days.forEach((day, dayIndex) => {
      routeForDay(day).forEach((key) => {
        if (!seenStops.has(key)) {
          seenStops.add(key);
          completeStopList.push({ key, dayIndex });
        }
      });
    });
    stops.innerHTML = completeStopList
      .map(({ key, dayIndex }) => {
        const place = locations[key];
        return `
          <a href="${googleSearch(place.query)}" target="_blank" rel="noreferrer">
            <span>D${dayIndex + 1}</span>
            <strong>${place.name}</strong>
            <small>↗</small>
          </a>
        `;
      })
      .join("");
    actions.innerHTML = `<a class="button primary full-width" href="#route-launcher">Open route pack</a>`;
  } else {
    const index = Number(mapFocus);
    const day = days[index];
    const route = routeForDay(day);
    kicker.textContent = `${day.short} · Day ${index + 1}`;
    title.textContent = day.title;
    copy.textContent = `${day.distance} · ${day.drive}. Stay: ${day.stay}.`;
    stops.innerHTML = [...new Set(route)]
      .map((key, stopIndex) => {
        const place = locations[key];
        return `
          <a href="${googleSearch(place.query)}" target="_blank" rel="noreferrer">
            <span>${String(stopIndex + 1).padStart(2, "0")}</span>
            <strong>${place.name}</strong>
            <small>↗</small>
          </a>
        `;
      })
      .join("");
    actions.innerHTML = routeButtons(route, true);
  }

  controls.querySelectorAll("[data-map-day]").forEach((button) => {
    button.addEventListener("click", () => setMapFocus(button.dataset.mapDay));
  });
}

function setMapFocus(focus) {
  mapFocus = focus;
  renderRouteMap();
  renderMapPanel();
}

function setRouteMode(mode) {
  routeMode = mode;
  localStorage.setItem("arnav-route-mode-v2", mode);
  document.querySelectorAll("[data-route-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.routeMode === mode);
  });
  renderRouteMap();
  renderMapPanel();
  renderRouteLauncher();
  if (currentDayIndex === days.length - 1) renderDayDetail();
}

function initialize() {
  renderStays();
  renderDayTabs();
  renderDayDetail();
  document.querySelectorAll("[data-route-mode]").forEach((button) => {
    button.addEventListener("click", () => setRouteMode(button.dataset.routeMode));
  });
  setRouteMode(routeMode);
}

document.addEventListener("DOMContentLoaded", initialize);
