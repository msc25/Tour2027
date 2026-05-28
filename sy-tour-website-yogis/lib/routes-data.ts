export interface Route {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  cities: string[];
  description: string;
  image: string;
  imageAlt: string;
  accentColor: string;
}

export const routes: Route[] = [
  {
    id: 1,
    name: "West Coast",
    slug: "west-coast",
    tagline: "Pacific to the Prairies",
    cities: ["Victoria", "Kelowna", "Kamloops", "Edmonton", "Calgary"],
    description:
      "Beginning at the Pacific shore and journeying through British Columbia into Alberta — forests, mountains, and the vibrations of the West.",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mountains and forest, British Columbia, Canada",
    accentColor: "#3eccb5",
  },
  {
    id: 2,
    name: "Prairies",
    slug: "prairies",
    tagline: "Big Skies, Open Hearts",
    cities: ["Winnipeg", "Saskatoon", "Regina", "Lethbridge"],
    description:
      "Crossing the vast interior of Canada — under immense skies and golden horizons, vibrating the heart of the nation.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Prairie landscape at golden hour, Canada",
    accentColor: "#c9933a",
  },
  {
    id: 3,
    name: "Great Lakes",
    slug: "great-lakes",
    tagline: "Ontario's Shores & Cities",
    cities: ["Thunder Bay", "Sudbury", "Ottawa", "Toronto"],
    description:
      "Following the shores of the Great Lakes through Ontario — from smaller communities to the final Mega Program in Toronto.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Great Lakes shoreline, Ontario, Canada",
    accentColor: "#c084a5",
  },
  {
    id: 4,
    name: "Maritimes",
    slug: "maritimes",
    tagline: "East Coast Rising",
    cities: ["Halifax", "Moncton", "Fredericton", "Quebec City", "Montréal"],
    description:
      "From the Atlantic shores through the eastern provinces — bringing vibrations to the coastlines and awakening the East.",
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Coastal Nova Scotia, Maritime Canada",
    accentColor: "#3eccb5",
  },
];

export const quotes = [
  {
    text: "…somebody told me that in Canada there is an ocean of seekers, there are many, many seekers here and very true seekers.",
    attribution: "H.H. Shri Mataji Nirmala Devi",
    date: "October 9th, 1981",
    location: "Vancouver, Canada",
  },
  {
    text: "Especially happening of this Kundalini is an extremely easy thing and it works out very fast and in thousands and thousands of people it has worked — and I am sure in Canada it has to work.",
    attribution: "H.H. Shri Mataji Nirmala Devi",
    date: "August 11th, 1990",
    location: "Vancouver, Canada",
  },
  {
    text: "Somehow, it has to go from Canada to America. So, it is going to penetrate via Canada, I think, that side.",
    attribution: "H.H. Shri Mataji Nirmala Devi",
    date: "September 11th, 1992",
    location: "Toronto, Canada",
  },
];
