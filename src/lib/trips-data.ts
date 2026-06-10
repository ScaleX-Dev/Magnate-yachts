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
  routeTags: string[];
  about: string;
  days: TripDay[];
  quote: string;
  quoteAttrib: string;
  included: string[];
  notIncluded: string[];
  honestFor: string;
  honestNotFor: string;
  shorterTrips: string[];
  longerTrips: string[];
}

const DAY_1: TripDay = {
  n: "01",
  label: "DAY ONE",
  title: "To the coast, then up.",
  description:
    "After breakfast on the boat, we pick you up from the harbour gate and head east along the southern coast. The road follows the water — past Unawatuna, past Weligama, past the fishermen still working the rocks in the old way — before it turns inland and starts to climb. Lunch somewhere quiet overlooking the sea. By late afternoon you're in the hill country, the air noticeably cooler, and Ella is half an hour ahead. Where you stay that night is somewhere we know — a small place, six rooms, the kind of bungalow that gets handed down.",
  imageLabel: "Photograph — Southern coast road at dawn, Sri Lanka",
};

const DAY_2: TripDay = {
  n: "02",
  label: "DAY TWO",
  title: "The day everyone remembers.",
  description:
    "Up before sunrise to be at the Nine Arch Bridge for the first train — there's a way to time the walk in so you arrive just as the light comes up over the valley. The train passes underneath you in slow motion and disappears into the tea-country mist. Back for breakfast, then a guided walk through a working estate with someone who's picked tea here for thirty years. Late afternoon you climb Little Adam's Peak — a forty-minute hike, easy enough for any age over eight, with one of the great views in the country at the top. Dinner back at the bungalow.",
  imageLabel: "Photograph — Nine Arch Bridge at first light, Ella",
};

const DAY_3_SHORT: TripDay = {
  n: "03",
  label: "DAY THREE",
  title: "Slowly back to the boat.",
  description:
    "A slow start. The hill-country mornings are cool enough that you might want a second coffee, and there's no point rushing back. We leave Ella by mid-morning, take the long way down through the south, stop at Ravana Falls for half an hour, and have lunch at a place we keep quiet about. Getting you quietly back to the harbour, sustained and slightly different. The boat-side was quietly handled while you were inland — fuel topped up, paperwork sorted, anything that needed attention dealt with.",
  imageLabel: "Photograph — Ravana Falls, Ella, morning light",
};

const DAY_3_LONG: TripDay = {
  n: "03",
  label: "DAY THREE",
  title: "Higher up.",
  description:
    "After breakfast we leave Ella and climb. The road to Nuwara Eliya is one of those drives where you keep stopping for the view — waterfalls, tea fields, roads built into the hillside. Nuwara Eliya itself sits at six thousand feet, cool enough that you'll want a jumper after sundown. The town has been a hill resort since the British built a golf course here in 1889. Staying at a planter's bungalow. Dinner somewhere overlooking the town.",
  imageLabel: "Photograph — Colonial bungalow garden, Nuwara Eliya",
};

const DAY_4: TripDay = {
  n: "04",
  label: "DAY FOUR",
  title: "A day on a tea estate.",
  description:
    "A full day at a working tea estate. We have people we trust — small family operations, mostly, the kind that still process leaves by hand. The morning is in the fields, walking with pickers who've worked those rows for decades, the afternoon is in the factory, watching sorting and rolling and firing. By the end of it, the cup of tea you've been drinking your whole life makes more sense. Dinner somewhere with a view of the valley you've just walked.",
  imageLabel: "Photograph — Tea picker, Nuwara Eliya estate at noon",
};

const DAY_5_SHORT: TripDay = {
  n: "05",
  label: "DAY FIVE",
  title: "The long way back.",
  description:
    "Mid-morning departure, the long scenic route south. We take roads most drivers wouldn't, stop at Ravana Falls for half an hour, lunch at a place we keep quiet about, and leave the coast road to Galle by late afternoon. The boat has been quietly looked after while you were away — fuel, paperwork sorted, anything that needed dealing with dealt with.",
  imageLabel: "Photograph — Ravana Falls waterfall, southern route",
};

export const TRIPS: Trip[] = [
  {
    slug: "3-day",
    badge: "THREE DAYS",
    shortName: "Three days",
    heroTitle: "The south coast,\nand into the hills.",
    routeTags: ["Galle", "South coast", "Ella", "tea", "hill country"],
    about:
      "The shortest of our trips, but the one most families come back talking about. The coast out of Galle, the climb into the hill country, and the train ride through the tea estates that's quietly one of the most cinematic rail journeys in the world. Two nights inland, one of them somewhere most travellers wouldn't find on their own.",
    days: [DAY_1, DAY_2, DAY_3_SHORT],
    quote: "Two days into the hills and the kids forgot they live on a boat.",
    quoteAttrib: "Jojo Marcum · Australia · mid-passage Indian Ocean",
    included: [
      "Private air-conditioned vehicle, English-speaking driver-guide",
      "Fuel, daily touring, pickup from the harbour gate",
      "Boat-side handled in your absence — paperwork, fuel, gas",
    ],
    notIncluded: [
      "Accommodation (book your own, or let us suggest)",
      "Meals and entry costs",
      "Personal expenses (above)",
    ],
    honestFor:
      "Families with kids who are old enough to enjoy a hike and a long drive. Couples wanting a convenience-relaxed taste without committing to a full week. Anyone who wants to understand Sri Lanka and wants the south coast. It's perfectly fine as a single pre-sail country night.",
    honestNotFor:
      "Anyone who needs their own space for longer, or who'd rather have more country — the five days gives it better. Anyone with mobility issues: the Ella section involves some uneven ground. The crew who want the ancient kingdoms — that's the full week.",
    shorterTrips: [],
    longerTrips: ["5-day", "7-day"],
  },
  {
    slug: "5-day",
    badge: "FIVE DAYS",
    shortName: "Five days",
    heroTitle: "Higher,\ninto the high country.",
    routeTags: ["Galle", "South coast", "Ella", "Nuwara Eliya", "tea", "hill country"],
    about:
      "Two more nights up in the hills. The green of the curry tree is already a bit strong — cold mornings, working tea estates, the kind of colonial bungalow quite more travellers leave Sri Lanka without ever finding. The drive up is half the experience: tea country slowly thickening around you until the air changes and the language softens.",
    days: [DAY_1, DAY_2, DAY_3_LONG, DAY_4, DAY_5_SHORT],
    quote: "I came expecting tea. I left understanding it.",
    quoteAttrib: "Nadia Vosberg · Netherlands · passage from Maldives",
    included: [
      "Private air-conditioned vehicle, English-speaking driver-guide",
      "Fuel, daily touring, pickup from the harbour gate",
      "Boat-side handled in your absence — paperwork, fuel, gas",
    ],
    notIncluded: [
      "Accommodation (book your own, or let us suggest)",
      "Meals and entry costs",
      "Personal expenses (above)",
    ],
    honestFor:
      "Families and couples who want proper slow — cold mornings, tea estates, the texture of hill country. The days feel genuinely different. Anyone who's visited Sri Lanka before and wants the part that stays with you. This trip has a pace that rewards people who can sit with a place.",
    honestNotFor:
      "Those who can't sit in a car for extended periods — the drives are long and deliberately paced. Anyone who wants the ancient kingdoms should look at the seven days instead. If you want maximum coverage in minimum time, the three days is the sharper trip.",
    shorterTrips: ["3-day"],
    longerTrips: ["7-day"],
  },
  {
    slug: "7-day",
    badge: "SEVEN DAYS",
    shortName: "A full week",
    heroTitle: "Across the island,\nand to the kings.",
    routeTags: ["Galle", "Ella", "Nuwara Eliya", "Sigiriya", "Dambulla", "Kandy"],
    about:
      "The trip families call us about months later. South coast, hill country, the ancient kingdoms, elephants in the wild, and the cultural spread — built around the longest stretch of island time most cruising crews can give us. No nights inland is the kind of trip that changes how families have looked at island countries since.",
    days: [
      DAY_1,
      DAY_2,
      DAY_3_LONG,
      DAY_4,
      {
        n: "05",
        label: "DAY FIVE",
        title: "Into the ancient kingdoms.",
        description:
          "From the hills, a different country. The road north from Nuwara Eliya is where the landscape starts shifting — terraced tea gives way to dense forest, then to something older and more stone-built. We stop at Dambulla in the afternoon: the cave temple is one of the most densely beautiful sites in the country, five caves of painted Buddhist art that nobody adequately describes. Overnight near Sigiriya, enough time to settle in before tomorrow.",
        imageLabel: "Photograph — Dambulla cave temple, ancient Buddhist art",
      },
      {
        n: "06",
        label: "DAY SIX",
        title: "Sigiriya, and the elephants.",
        description:
          "Up at five-thirty. Sigiriya sits at the top of a volcanic rock plug — the climb takes forty minutes and you want to be at the summit before the sun fully rises. The view at the top is one of those facts: you understand that Sri Lanka is an island. Afternoon: Udawalawe National Park, where the elephants — several hundred of them — move through open grassland in the late afternoon light. The safari runs about three hours. Dinner somewhere quiet.",
        imageLabel: "Photograph — Sigiriya at dawn, ancient rock fortress",
      },
      {
        n: "07",
        label: "DAY SEVEN",
        title: "Through Kandy, slowly south.",
        description:
          "A slower morning. The Temple of the Tooth in Sri Lanka is one of the most sacred Buddhist sites in the world — just early, before it crowds. The drive south takes most of the day, so we break it well — lunch in Kandy, then the long winding road back to the coast. By the time you're back at the harbour, it's been nearly a week. The boat has been quietly sorted while you were inland. Fuel topped up. Gas. Papers. Ready.",
        imageLabel: "Photograph — Temple of the Tooth, Kandy, evening light",
      },
    ],
    quote:
      "Eight hundred miles in seven days, and the kids ranked it higher than the Maldives.",
    quoteAttrib: "Thomas Albrecht · Germany · circumnavigation, westbound",
    included: [
      "Private air-conditioned vehicle, English-speaking driver-guide",
      "Fuel, daily touring, pickup from the harbour gate",
      "Boat-side handled in your absence — paperwork, fuel, gas",
    ],
    notIncluded: [
      "Accommodation (book your own, or let us suggest)",
      "Meals and entry costs",
      "Personal expenses (above)",
    ],
    honestFor:
      "Crews with the time and the appetite — seven days is a stretch for most boats, but it's the one that covers it all. Families who want elephants, ancient cities, tea country, and the coast in a single passage. The trip that moves. Anyone who's waited their whole life to see Sigiriya.",
    honestNotFor:
      "Anyone who needs to keep their boat-days tight — seven days inland is a real commitment and not everyone's boat schedule allows it. Anyone with mobility limits: the Sigiriya climb is steep and non-negotiable. The crew who'd rather sail.",
    shorterTrips: ["3-day", "5-day"],
    longerTrips: [],
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return TRIPS.find((t) => t.slug === slug);
}

export function getTripsBySlug(slugs: string[]): Trip[] {
  return slugs.map((s) => TRIPS.find((t) => t.slug === s)).filter(Boolean) as Trip[];
}
