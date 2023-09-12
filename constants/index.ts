import { FolderType } from "@/types";

export const entertainment = {
  key: "Entertainment",
  value: [
    "Jet Ski",
    "Wake Boards",
    "Floats",
    'The "In Touch" Dingy',
    "Snorkeling Equipment",
    "Fishing Equipment",
    "Wi-Fi",
  ],
};

export const interior = {
  key: "Interior",
  value:
    "There is plenty of room as it features four spacious rooms. A Master Suite with a large bed-sitting under a panoramic mirror and comfortable seating. A VIP Queen Suite with a large bed and plenty of space and a window view. And two twin cabins with two beds in each room.",
  description: {
    paragraph1:
      "At 105’, M/Y Outta Touch provides a luxurious and inviting atmosphere, accommodating 8 guests in 4 plush staterooms. The master cabin has its own writing desk and large ensuite bathroom, there is also a spacious VIP stateroom and two twin cabins, all of which have full ensuite bathrooms as well.",
    paragraph2:
      " The main salon has ample seating and a beautiful quartz bar that is perfect for entertaining and shaking things up! The private dining salon adjacent to the main salon provides an elegant and intimate dining space. With lovely outdoor dining on the main aft deck and fly bridge, including a hot tub and grill, it is perfect for breathing in those warm tropical mornings and beautiful sunsets the Caribbean has to offer.",
  },
};

export const dining = {
  key: "Dining",
  value:
    "Located at the back of the yacht's main deck, our outdoor dining space offers a captivating culinary experience amidst the beauty of the open sea. The expansive hardwood deck is adorned with a thoughtfully set table and comfortable seating, providing an inviting atmosphere for savoring exquisite meals while being caressed by the gentle sea breeze.",
};

export const contactInfo = {
  address: "Florida, USA",
  phone: "(832) 404-7410",
  email: "ted@gravitas-mgmt.com",
  instagram: "outtatouchyacht",
};

export const about = {
  "Number of Cabins": 4,
  "Total Guests (Sleeping)": 8,
  "Total Guests (Cruising)": 12,
  "Cabin Configuration": "1 King, 1 Queen, 4 Twin Beds (4 Staterooms Total)",
  "Total Crew": 5,
  Length: "32m (105’)",
  Beam: "7.01m (23’)",
  Draft: "1.83m (6’)",
  "Year built": 2000,
  Refit: 2021,
  Builder: "Intermarine Savannah",
  Flag: "St. Vincent & Grenadines",
  "Port of Registry": "Kingstown",
  "Naval Architect": "Paragon Design",
  "Hull Construction": "GRP",
  "Air conditioning": "Yes",
  "Stabilisers at anchor": "Yes",
  "Stabilisers underway": "Yes",
};

export const galleryFilters: {
  label: string;
  value: FolderType;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Exterior",
    value: "aerials",
  },
  {
    label: "Interior",
    value: "interior",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Food & Dining",
    value: "dining",
  },
];

export const navItems: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];
