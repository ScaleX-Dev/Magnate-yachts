export interface DayTrip {
  slug: string;
  name: string;
  paragraphs: string[];
  price: number;
  included: string[];
  notIncluded: string[];
  imageLabel: string;
}

export interface TripDay {
  n: string;
  label: string;
  title: string;
  description: string;
  imageLabel: string;
}

export interface Trip {
  slug: string;
  badge: string;
  shortName: string;
  heroTitle: string;
  subtitle: string;
  days: TripDay[];
  price: number;
  included: string[];
  notIncluded: string[];
}

export const DAY_TRIPS: DayTrip[] = [
  {
    slug: "yala",
    name: "Safari in Yala",
    paragraphs: [
      "Dawn breaks over the dry zone, and the park begins to stir. The light, at this hour, is soft and grey, and every creature seems to move a little more carefully because of it. Here, in the scrubland and the still lagoons, water buffalo stand half-submerged, unhurried, as though time itself moves differently in water. A peacock drags its tail through the dust, in no particular rush to impress anyone.",
      "And then — if fortune favours you, and in Yala it very often does — a leopard. Just there, crossing the track ahead, entirely unconcerned by your presence, gone into the undergrowth before you've had the chance to properly believe what you've seen.",
      "The day continues in this way. Elephants move in loose, companionable herds along the tree line. Crocodiles do what crocodiles do best — which is to say, remarkably little — along the banks of a tank. And somewhere above, birds you cannot yet name go about their business, entirely indifferent to being watched.",
      "You need only sit back. The vehicle, private and cool, will carry you there and back, timed precisely for the hours when the park is at its most alive.",
    ],
    price: 70,
    included: [
      "Private vehicle and driver, door to door",
      "Fuel and toll charges",
    ],
    notIncluded: ["Park entrance and safari jeep tickets"],
    imageLabel: "Photograph — Leopard crossing the track, Yala National Park",
  },
  {
    slug: "galle",
    name: "Explore Galle",
    paragraphs: [
      "Within the old fort walls, the sea has a way of making itself known — a breeze funnelled down every narrow street, salt in the air long before you catch sight of the water itself. The houses here are Dutch by ancestry, deep-verandaed and weathered by three centuries of monsoons, and the lighthouse at the point has stood its watch since the 1930s, largely unbothered by the passage of time.",
      "Beyond the fort, the land begins to climb, and something remarkable happens to the colour green. Tea bushes cover the hillsides in row upon row, tended still, as they have been for generations, by workers moving quietly through them with baskets on their backs. Inside the factory, the leaf is dried, rolled, and sorted — and within the hour, what was growing on the bush that very morning arrives, transformed, in your cup.",
      "Further on, the spice gardens offer their own quiet theatre: cinnamon bark peeled in long curls from the tree, cardamom pods split to release a scent that seems to belong to no other place on earth. And nearby, craftsmen bend low over gemstones and handicrafts, shaping them by hand in a tradition that predates the fort itself by a very great many years.",
    ],
    price: 70,
    included: [
      "Private vehicle and driver",
      "Fuel and toll charges",
      "A full-day route through Galle Fort, tea country, spice gardens, and artisan workshops",
    ],
    notIncluded: ["Individual site entrance fees"],
    imageLabel: "Photograph — Dutch colonial gateway, Galle Fort, Sri Lanka",
  },
];

const DAY_SAFARI: TripDay = {
  n: "01",
  label: "DAY 1",
  title: "Yala or Udawalawe",
  description:
    "An early departure, into whichever park you have chosen, both celebrated for their leopards and for elephant herds that move, unhurried, across open grassland. By evening, you return to comfort — and by morning, to breakfast, before the day begins again.",
  imageLabel: "Photograph — Elephant herd at dusk, Udawalawe National Park",
};

export const TRIPS: Trip[] = [
  {
    slug: "3-day",
    badge: "2 NIGHTS · 3 DAYS",
    shortName: "Safari & Hill Country",
    heroTitle: "Safari &\nHill Country",
    subtitle: "The wild south, then the hills above it.",
    days: [
      DAY_SAFARI,
      {
        n: "02",
        label: "DAY 2",
        title: "Into Ella",
        description:
          "The road narrows. It climbs. And somewhere past Haputale, the air changes entirely — cooler, thinner, carrying the scent of eucalyptus and wet earth. Tea estates unfurl down into the valleys below, mist gathering in the low places and lingering there, often past midday. In Ella, you will stand upon the Nine Arch Bridge as a train threads through it — a feat of engineering now nearly a century old, still doing exactly what it was built to do. Little Adam's Peak offers, for comparatively little effort, a view over the entire valley. And at the foot of Ravana Falls, the water falls exactly as it has for longer than anyone has thought to measure. A final stop at a tea estate brings you close to the hills you have spent the day admiring from a distance.",
        imageLabel: "Photograph — Nine Arch Bridge at first light, Ella",
      },
      {
        n: "03",
        label: "DAY 3",
        title: "Homeward, at your own pace",
        description:
          "No urgency here. Only the return journey, in the same comfort as the outward one.",
        imageLabel: "Photograph — Southern coast road at dawn, Sri Lanka",
      },
    ],
    price: 110,
    included: [
      "Private vehicle and driver for all three days",
      "Fuel and toll charges",
      "Hotel stays with breakfast",
      "VAT and taxes",
      "Driver's accommodation",
    ],
    notIncluded: [
      "Park entrance fees",
      "Safari jeep charges",
      "Individual site tickets",
    ],
  },
  {
    slug: "5-day",
    badge: "4 NIGHTS · 5 DAYS",
    shortName: "Wilderness to Ancient Kingdoms",
    heroTitle: "Wilderness to\nAncient Kingdoms",
    subtitle:
      "Leopard country, hill country, and kingdoms built long before either had a name for itself.",
    days: [
      DAY_SAFARI,
      {
        n: "02",
        label: "DAY 2",
        title: "Ella",
        description:
          "Tea hills roll away on either side of the road for the better part of the climb. The Nine Arch Bridge. Little Adam's Peak. The cool descent to Ravana Falls, where the water has been finding its way down for rather longer than the road has existed.",
        imageLabel: "Photograph — Nine Arch Bridge, Ella, morning light",
      },
      {
        n: "03",
        label: "DAY 3",
        title: "Kandy",
        description:
          "The Temple of the Tooth Relic greets the morning in low chant and the scent of incense — a place of pilgrimage for the better part of a millennium, and none the less affecting for its age. By afternoon, the Royal Botanical Gardens at Peradeniya open into an avenue of palms that dwarf everything around them, an orchid house heavy with scent, and shade enough to persuade you to slow down, at last, for a few hours.",
        imageLabel: "Photograph — Temple of the Tooth Relic, Kandy, early morning",
      },
      {
        n: "04",
        label: "DAY 4",
        title: "Sigiriya and Pidurangala",
        description:
          "Sigiriya rises, quite improbably, straight out of the flat jungle floor — a slab of rock over two hundred metres high, crowned by the remains of a fifth-century palace that once stood, by all accounts, rather magnificently. The climb reveals frescoes part of the way up, and near the summit, the great stone paws of a lion long since vanished. From the top, the jungle stretches in every direction, entirely unbroken. And across the way, Pidurangala offers the finest view of Sigiriya there is — best appreciated, as it happens, just as the sun begins to set.",
        imageLabel: "Photograph — Sigiriya rock fortress at sunrise, Sri Lanka",
      },
      {
        n: "05",
        label: "DAY 5",
        title: "Homeward, at your own pace",
        description: "The return, unhurried, exactly as it began.",
        imageLabel: "Photograph — Ancient ruins, central Sri Lanka",
      },
    ],
    price: 140,
    included: [
      "Private vehicle and driver for all five days",
      "Fuel and toll charges",
      "Hotel stays with breakfast",
      "VAT and taxes",
      "Driver's accommodation",
    ],
    notIncluded: [
      "Park entrance fees",
      "Safari jeep charges",
      "Individual site tickets",
    ],
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return TRIPS.find((t) => t.slug === slug);
}
