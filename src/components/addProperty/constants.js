import React from "react";
import {
  FaSocks,
  FaFutbol,
  FaSnowflake,
  FaRobot,
  FaLongArrowAltUp,
  FaPaw,
  FaConciergeBell,
  FaParking,
  FaShoppingCart,
  FaBook,
  FaWater,
  FaSwimmingPool,
  FaChild,
  FaWifi,
  FaShieldAlt,
  FaBaby,
  FaChess,
  FaHelicopter,
  FaBuilding,
  FaMoneyBill,
  FaLandmark,
  FaRunning,
  FaBiking,
  FaStore,
  FaChessKing,
  FaHospital,
  FaChalkboardTeacher,
  FaGolfBall,
  FaArrowUp,
  FaUtensils,
  FaBabyCarriage,
  FaTree,
  FaFilm,
  FaStoreAlt,
  FaBed,
  FaHotTub,
  FaWalking,
  FaFire,
  FaMountain,
  FaBasketballBall,
  FaSpa,
  FaBookOpen,
  FaWineGlassAlt,
  FaLeaf,
  FaCloudSunRain,
  FaBolt,
  FaCar,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdSportsCricket } from "react-icons/md";
import { RiBilliardsFill } from "react-icons/ri";
import { GiFamilyHouse, GiShuttlecock, GiVillage } from "react-icons/gi";
import {
  BsFillBuildingFill,
  BsFillBuildingsFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { BiRectangle } from "react-icons/bi";
import dayjs from "dayjs";

export let groupApartmentsConstants = {
  project_name: "",
  price_per_sqft: "",
  start_price: "",
  end_price: "",
  state: "",
  city: "",
  maps_details: {},
  bhk_details: {},
  amenities: [],
  number_of_floors: "",
  ready_to_occupy: false,
  possession_date: "",
  number_of_car_parking: "",
  number_of_bike_parking: "",
  contact_details: {},
  about_property: "",
  image_details: [],
  property_images: [],
  project_area: "",
  project_size: "",
  rera_id: "",
  sale_type: "",
  facing: [],
  furnishing_detail: [],
  property_age: "",
};

export let groupVillasConstants = {
  project_name: "",
  price_per_sqft: "",
  start_price: "",
  end_price: "",
  state: "",
  city: "",
  maps_details: {},
  bhk_details: {},
  amenities: [],
  number_of_floors: [],
  land_area_sizes: [],
  land_width: "",
  land_length: "",
  ready_to_occupy: false,
  possession_date: "",
  number_of_car_parking: "",
  number_of_bike_parking: "",
  contact_details: {},
  image_details: [],
  about_property: "",
  property_images: [],
  total_project_area: "",
  project_size: "",
  rera_id: "",
  sale_type: "",
  facing: [],
  furnishing_detail: [],
  property_age: "",
};

export let groupPlotsConstants = {
  project_name: "",
  price_per_sqyd: "",
  start_price: "",
  end_price: "",
  state: "",
  city: "",
  maps_details: {},
  bhk_details: {},
  amenities: [],
  plot_sizes: [],
  ready_to_occupy: false,
  possession_date: "",
  contact_details: {},
  image_details: [],
  about_property: "",
  property_images: [],
  total_project_area: "",
  rera_id: "",
  facing: [],
};

export let singleFlatConstants = {
  project_name: "",
  final_price: "",
  carpet_area: "",
  state: "",
  city: "",
  amenities: [],
  number_of_floors: "",
  floor_number: "",
  bedroom_available: [],
  number_of_washrooms: "",
  ready_to_occupy: "",
  available_from: "",
  number_of_car_parking: "",
  number_of_bike_parking: "",
  maps_details: {},
  contact_details: {},
  image_details: [],
  property_images: [],
  about_property: "",
  sale_type: "",
  facing: [],
  furnishing_detail: [],
};

export let singleBuildingConstants = {
  project_name: "",
  final_price: "",
  carpet_area: "",
  state: "",
  city: "",
  amenities: [],
  number_of_floors: "",
  bedroom_available: [],
  number_of_washrooms: "",
  ready_to_occupy: "",
  available_from: "",
  number_of_car_parking: "",
  number_of_bike_parking: "",
  maps_details: {},
  contact_details: {},
  image_details: [],
  property_images: [],
  about_property: "",
  sale_type: "",
  facing: [],
  furnishing_detail: [],
  land_size: "",
  land_width: "",
  land_length: "",
};

export let singleVillaConstants = {
  project_name: "",
  final_price: "",
  carpet_area: "",
  state: "",
  city: "",
  amenities: [],
  number_of_floors: "",
  bedroom_available: [],
  number_of_washrooms: "",
  ready_to_occupy: "",
  available_from: "",
  number_of_car_parking: "",
  number_of_bike_parking: "",
  maps_details: {},
  contact_details: {},
  image_details: [],
  property_images: [],
  about_property: "",
  sale_type: "",
  facing: [],
  furnishing_detail: [],
  land_size: "",
  land_width: "",
  land_length: "",
  floors: "",
};

export let singlePlotConstants = {
  project_name: "",
  final_price: "",
  state: "",
  city: "",
  amenities: [],
  maps_details: {},
  contact_details: {},
  image_details: [],
  property_images: [],
  about_property: "",
  facing: [],
  land_size: "",
  land_width: "",
  land_length: "",
  is_fencing: "",
};

export let rentConstants = {
  project_name: "",
  carpet_area: "",
  rent_per_month: "",
  advance_amount: "",
  state: "",
  city: "",
  amenities: [],
  number_of_floors: "",
  floor_number: "",
  bedroom_available: [],
  ready_to_occupy: "",
  available_from: "",
  number_of_car_parking: "",
  number_of_bike_parking: "",
  maps_details: {},
  contact_details: {},
  image_details: [],
  property_images: [],
  about_property: "",
  sale_type: "",
  facing: [],
  furnishing_detail: [],
};

export let commercialConstants = {
  project_name: "",
  state: "",
  city: "",
  commercial_category: "",
  commercial_type: "",
  min_contract_period: "",
  final_price: "",
  price_per_square_feet: "",
  price_per_square_yard: "",
  builtup_area: "",
  passenger_lifts: "",
  ready_to_occupy: "",
  possession_date: "",
  service_lifts: "",
  parking_available: "",
  negotialble: "",
  tax_gov_charges_included: "",
  dg_ups_charges_included: "",
  water_charges_included: "",
  floor_number: "",
  electricity_bill_included: "",
  safety_deposit: "",
  rent_per_month: "",
  amenities: [],
  maps_details: {},
  contact_details: {},
  image_details: [],
  property_images: [],
};

export let pgConstants = {
  project_name: "",
  state: "",
  city: "",
  sharing_for: [],
  sharing_types: [],
  best_suited_for: [],
  attached_washroom: "",
  food_offerings: [],
  food_facility: "",
  parking_facility: "",
  ready_to_move_in: "",
  coliving_common_areas: [],
  non_veg_available: "",
  visitor_allowed: "",
  opposite_sex_visitor_allowed: "",
  drinking_allowed: "",
  smoking_allowed: "",
  any_time_allowed: "",
  last_time_entry: "",
  amenities: [],
  maps_details: {},
  contact_details: {},
  image_details: [],
  property_images: [],
  furnishing_detail: [],
};
export const allStages = [
  {
    id: 0,
    title: "Basic Details",
    status: "current",
  },
  {
    id: 1,
    title: "Property Details",
    status: "pending",
  },
  {
    id: 2,
    title: "Amenities",
    status: "pending",
  },
  {
    id: 3,
    title: "Upload Images",
    status: "pending",
  },

  {
    id: 4,
    title: "Payment Plans",
    status: "pending",
  },
];

export const commercialStages = [
  {
    id: 0,
    title: "Basic Details",
    status: "completed",
  },
  {
    id: 1,
    title: "Amenities",
    status: "pending",
  },
  {
    id: 2,
    title: "Upload Images",
    status: "pending",
  },

  {
    id: 3,
    title: "Payment Plans",
    status: "pending",
  },
];

export const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

export const imageTypes = [
  "Living Room",
  "Master Bedroom",
  "Children Bedroom",
  "Guest Bedroom",
  "Balcony",
  "Bathroom",
  "Kitchen",
  "Common Area",
  "Plot View",
  "Outside View",
  "Floor Plan",
  "Brochure",
  "Others",
];

export const citiesInIndia = {
  "Andaman and Nicobar Islands (union territory)": ["Port Blair"],
  "Andhra Pradesh": [
    "Adoni",
    "Amaravati",
    "Anantapur",
    "Chandragiri",
    "Chittoor",
    "Dowlaiswaram",
    "Eluru",
    "Guntur",
    "Kadapa",
    "Kakinada",
    "Kurnool",
    "Machilipatnam",
    "Nagarjunakoṇḍa",
    "Rajahmundry",
    "Srikakulam",
    "Tirupati",
    "Vijayawada",
    "Visakhapatnam",
    "Vizianagaram",
    "Yemmiganur",
  ],
  "Arunachal Pradesh": ["Itanagar"],
  Assam: [
    "Dhuburi",
    "Dibrugarh",
    "Dispur",
    "Guwahati",
    "Jorhat",
    "Nagaon",
    "Sivasagar",
    "Silchar",
    "Tezpur",
    "Tinsukia",
  ],
  Bihar: [
    "Ara",
    "Barauni",
    "Begusarai",
    "Bettiah",
    "Bhagalpur",
    "Bihar Sharif",
    "Bodh Gaya",
    "Buxar",
    "Chapra",
    "Darbhanga",
    "Dehri",
    "Dinapur Nizamat",
    "Gaya",
    "Hajipur",
    "Jamalpur",
    "Katihar",
    "Madhubani",
    "Motihari",
    "Munger",
    "Muzaffarpur",
    "Patna",
    "Purnia",
    "Pusa",
    "Saharsa",
    "Samastipur",
    "Sasaram",
    "Sitamarhi",
    "Siwan",
  ],
  "Chandigarh (union territory)": ["Chandigarh"],
  Chhattisgarh: [
    "Ambikapur",
    "Bhilai",
    "Bilaspur",
    "Dhamtari",
    "Durg",
    "Jagdalpur",
    "Raipur",
    "Rajnandgaon",
  ],
  "Dadra and Nagar Haveli and Daman and Diu (union territory)": [
    "Daman",
    "Diu",
    "Silvassa",
  ],
  "Delhi (national capital territory)": ["Delhi", "New Delhi"],
  Goa: ["Madgaon", "Panaji"],
  Gujarat: [
    "Ahmadabad",
    "Amreli",
    "Bharuch",
    "Bhavnagar",
    "Bhuj",
    "Dwarka",
    "Gandhinagar",
    "Godhra",
    "Jamnagar",
    "Junagadh",
    "Kandla",
    "Khambhat",
    "Kheda",
    "Mahesana",
    "Morbi",
    "Nadiad",
    "Navsari",
    "Okha",
    "Palanpur",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Surat",
    "Surendranagar",
    "Valsad",
    "Veraval",
  ],
  Haryana: [
    "Ambala",
    "Bhiwani",
    "Chandigarh",
    "Faridabad",
    "Firozpur Jhirka",
    "Gurugram",
    "Hansi",
    "Hisar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Panipat",
    "Pehowa",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
  ],
  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Dalhousie",
    "Dharmshala",
    "Hamirpur",
    "Kangra",
    "Kullu",
    "Mandi",
    "Nahan",
    "Shimla",
    "Una",
  ],
  "Jammu and Kashmir (union territory)": [
    "Anantnag",
    "Baramula",
    "Doda",
    "Gulmarg",
    "Jammu",
    "Kathua",
    "Punch",
    "Rajouri",
    "Srinagar",
    "Udhampur",
  ],
  Jharkhand: [
    "Bokaro",
    "Chaibasa",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "Giridih",
    "Hazaribag",
    "Jamshedpur",
    "Jharia",
    "Rajmahal",
    "Ranchi",
    "Saraikela",
  ],
  Karnataka: [
    "Badami",
    "Ballari",
    "Bengaluru",
    "Belagavi",
    "Bhadravati",
    "Bidar",
    "Chikkamagaluru",
    "Chitradurga",
    "Davangere",
    "Halebid",
    "Hassan",
    "Hubballi-Dharwad",
    "Kalaburagi",
    "Kolar",
    "Madikeri",
    "Mandya",
    "Mangaluru",
    "Mysuru",
    "Raichur",
    "Shivamogga",
    "Shravanabelagola",
    "Shrirangapattana",
    "Tumakuru",
    "Vijayapura",
  ],
  Kerala: [
    "Alappuzha",
    "Vatakara",
    "Idukki",
    "Kannur",
    "Kochi",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Mattancheri",
    "Palakkad",
    "Thalassery",
    "Thiruvananthapuram",
    "Thrissur",
  ],
  "Ladakh (union territory)": ["Kargil", "Leh"],
  "Madhya Pradesh": [
    "Balaghat",
    "Barwani",
    "Betul",
    "Bharhut",
    "Bhind",
    "Bhojpur",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dr. Ambedkar Nagar (Mhow)",
    "Guna",
    "Gwalior",
    "Hoshangabad",
    "Indore",
    "Itarsi",
    "Jabalpur",
    "Jhabua",
    "Khajuraho",
    "Khandwa",
    "Khargone",
    "Maheshwar",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Murwara",
    "Narsimhapur",
    "Narsinghgarh",
    "Narwar",
    "Neemuch",
    "Nowgong",
    "Orchha",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Sarangpur",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Ujjain",
    "Vidisha",
  ],
  Maharashtra: [
    "Ahmadnagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Bhandara",
    "Bhusawal",
    "Bid",
    "Buldhana",
    "Chandrapur",
    "Daulatabad",
    "Dhule",
    "Jalgaon",
    "Kalyan",
    "Karli",
    "Kolhapur",
    "Mahabaleshwar",
    "Malegaon",
    "Matheran",
    "Mumbai",
    "Nagpur",
    "Nanded",
    "Nashik",
    "Osmanabad",
    "Pandharpur",
    "Parbhani",
    "Pune",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sevagram",
    "Solapur",
    "Thane",
    "Ulhasnagar",
    "Vasai-Virar",
    "Wardha",
    "Yavatmal",
  ],
  Manipur: ["Imphal"],
  Meghalaya: ["Cherrapunji", "Shillong"],
  Mizoram: ["Aizawl", "Lunglei"],
  Nagaland: ["Kohima", "Mon", "Phek", "Wokha", "Zunheboto"],
  Odisha: [
    "Balangir",
    "Baleshwar",
    "Baripada",
    "Bhubaneshwar",
    "Brahmapur",
    "Cuttack",
    "Dhenkanal",
    "Kendujhar",
    "Konark",
    "Koraput",
    "Paradip",
    "Phulabani",
    "Puri",
    "Sambalpur",
    "Udayagiri",
  ],
  "Puducherry (union territory)": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
  Punjab: [
    "Amritsar",
    "Batala",
    "Chandigarh",
    "Faridkot",
    "Firozpur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Nabha",
    "Patiala",
    "Rupnagar",
    "Sangrur",
  ],
  Rajasthan: [
    "Abu",
    "Ajmer",
    "Alwar",
    "Amer",
    "Barmer",
    "Beawar",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittaurgarh",
    "Churu",
    "Dhaulpur",
    "Dungarpur",
    "Ganganagar",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalor",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Kishangarh",
    "Kota",
    "Merta",
    "Nagaur",
    "Nathdwara",
    "Pali",
    "Phalodi",
    "Pushkar",
    "Sawai Madhopur",
    "Shahpura",
    "Sikar",
    "Sirohi",
    "Tonk",
    "Udaipur",
  ],
  Sikkim: ["Gangtok", "Gyalshing", "Lachung", "Mangan"],
  "Tamil Nadu": [
    "Arcot",
    "Chengalpattu",
    "Chennai",
    "Chidambaram",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanniyakumari",
    "Kodaikanal",
    "Kumbakonam",
    "Madurai",
    "Mamallapuram",
    "Nagappattinam",
    "Nagercoil",
    "Palayamkottai",
    "Pudukkottai",
    "Rajapalayam",
    "Ramanathapuram",
    "Salem",
    "Thanjavur",
    "Tiruchchirappalli",
    "Tirunelveli",
    "Tiruppur",
    "Thoothukudi",
    "Udhagamandalam",
    "Vellore",
  ],
  Telangana: [
    "Hyderabad",
    "Karimnagar",
    "Khammam",
    "Mahbubnagar",
    "Nizamabad",
    "Sangareddi",
    "Warangal",
  ],
  Tripura: ["Agartala"],
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Amroha",
    "Ayodhya",
    "Azamgarh",
    "Bahraich",
    "Ballia",
    "Banda",
    "Bara Banki",
    "Bareilly",
    "Basti",
    "Bijnor",
    "Bithur",
    "Budaun",
    "Bulandshahr",
    "Deoria",
    "Etah",
    "Etawah",
    "Faizabad",
    "Farrukhabad-cum-Fatehgarh",
    "Fatehpur",
    "Fatehpur Sikri",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur",
    "Lakhimpur",
    "Lalitpur",
    "Lucknow",
    "Mainpuri",
    "Mathura",
    "Meerut",
    "Mirzapur-Vindhyachal",
    "Moradabad",
    "Muzaffarnagar",
    "Partapgarh",
    "Pilibhit",
    "Prayagraj",
    "Rae Bareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Shahjahanpur",
    "Sitapur",
    "Sultanpur",
    "Tehri",
    "Varanasi",
  ],
  Uttarakhand: [
    "Almora",
    "Dehra Dun",
    "Haridwar",
    "Mussoorie",
    "Nainital",
    "Pithoragarh",
  ],
  "West Bengal": [
    "Alipore",
    "Alipur Duar",
    "Asansol",
    "Baharampur",
    "Bally",
    "Balurghat",
    "Bankura",
    "Baranagar",
    "Barasat",
    "Barrackpore",
    "Basirhat",
    "Bhatpara",
    "Bishnupur",
    "Budge Budge",
    "Burdwan",
    "Chandernagore",
    "Darjeeling",
    "Diamond Harbour",
    "Dum Dum",
    "Durgapur",
    "Halisahar",
    "Haora",
    "Hugli",
    "Ingraj Bazar",
    "Jalpaiguri",
    "Kalimpong",
    "Kamarhati",
    "Kanchrapara",
    "Kharagpur",
    "Cooch Behar",
    "Kolkata",
    "Krishnanagar",
    "Malda",
    "Midnapore",
    "Murshidabad",
    "Nabadwip",
    "Palashi",
    "Panihati",
    "Purulia",
    "Raiganj",
    "Santipur",
    "Shantiniketan",
    "Shrirampur",
    "Siliguri",
    "Siuri",
    "Tamluk",
    "Titagarh",
  ],
};

export const bedroomTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];
export const pgTypes = [
  "1 SHARING",
  "2 SHARING",
  "3 SHARING",
  "4 SHARING",
  "5 SHARING",
  "6 SHARING",
];

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 12 },
    xxl: { span: 12 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 12 },
    xxl: { span: 12 },
  },
};

export const initialAmenities = [
  { title: "Squash Court", icon: <FaSocks /> },
  { title: "Cricket Pitch", icon: <MdSportsCricket /> },
  { title: "Football", icon: <FaFutbol /> },
  { title: "Central AC", icon: <FaSnowflake /> },
  { title: "Home Automation", icon: <FaRobot /> },
  { title: "High Speed Elevators", icon: <FaLongArrowAltUp /> },
  { title: "Pet Area", icon: <FaPaw /> },
  { title: "Concierge Desk", icon: <FaConciergeBell /> },
  { title: "Visitor's Parking", icon: <FaParking /> },
  { title: "Hypermarket", icon: <FaShoppingCart /> },
  { title: "Study Room", icon: <FaBook /> },
  { title: "View of Water", icon: <FaWater /> },
  { title: "Swimming Pool", icon: <FaSwimmingPool /> },
  { title: "Kids' Play Areas", icon: <FaChild /> },
  { title: "Central Wi-Fi", icon: <FaWifi /> },
  { title: "24 x 7 Security", icon: <FaShieldAlt /> },
  { title: "Pre-School", icon: <FaBaby /> },
  { title: "Indoor Games", icon: <FaChess /> },
  { title: "Helipad", icon: <FaHelicopter /> },
  { title: "Serviced Apartments", icon: <FaBuilding /> },
  { title: "ATM's", icon: <FaMoneyBill /> },
  { title: "Private Pool", icon: <FaSwimmingPool /> },
  { title: "View of Landmark", icon: <FaLandmark /> },
  { title: "Badminton Court", icon: <GiShuttlecock /> },
  { title: "Jogging Track", icon: <FaRunning /> },
  { title: "Cycle Track", icon: <FaBiking /> },
  { title: "Attached Market", icon: <FaStore /> },
  { title: "Clubhouse", icon: <FaChessKing /> },
  { title: "Medical Facility", icon: <FaHospital /> },
  { title: "Conference Room", icon: <FaChalkboardTeacher /> },
  { title: "Golf Course", icon: <FaGolfBall /> },
  { title: "Service Elevators", icon: <FaArrowUp /> },
  { title: "Food Court", icon: <FaUtensils /> },
  { title: "Private Gym", icon: <CgGym /> },
  { title: "Built in Wardrobes", icon: <FaBed /> },
  { title: "Power Backup", icon: <FaBolt /> },
  { title: "Restaurant", icon: <FaUtensils /> },
  { title: "Day Care Center", icon: <FaBabyCarriage /> },
  { title: "Large Green Area", icon: <FaTree /> },
  { title: "Multiplex", icon: <FaFilm /> },
  { title: "High Street Retail", icon: <FaStoreAlt /> },
  { title: "Servant Quarter", icon: <FaBed /> },
  { title: "Private Jacuzzi", icon: <FaHotTub /> },
  { title: "Walk-in closet", icon: <FaWalking /> },
  { title: "Outdoor BBQ Area", icon: <FaFire /> },
  { title: "Car Wash Area", icon: <FaCar /> },
  { title: "Cinema", icon: <FaFilm /> },
  { title: "Sky Lounge", icon: <FaMountain /> },
  { title: "Rock Climbing Wall", icon: <FaMountain /> },
  { title: "Basketball Court", icon: <FaBasketballBall /> },
  { title: "Spa and Wellness Center", icon: <FaSpa /> },
  { title: "Library", icon: <FaBookOpen /> },
  { title: "Roof Deck", icon: <FaBuilding /> },
  { title: "Billiards Room", icon: <RiBilliardsFill /> },
  { title: "Wine Cellar", icon: <FaWineGlassAlt /> },
  { title: "Garden", icon: <FaLeaf /> },
  { title: "Dining Area", icon: <FaUtensils /> },
  { title: "Rooftop Pool", icon: <FaSwimmingPool /> },
  { title: "Sky Garden", icon: <FaCloudSunRain /> },
];

export function getIconByTitle(title) {
  const amenity = initialAmenities.find((amenity) => amenity.title === title);

  if (amenity) {
    return amenity.icon;
  } else {
    // Handle the case where the title is not found
    return null;
  }
}

// add property types
export const purchaseTypes = ["Sell", "Rent", "Commercial", "PG/Co-Living"];

// Commercial Types
export const commercialTypes = [
  "Office Space",
  "Retail Space",
  "Plot/Land",
  "Storage",
];

export const officeSpaceTypes = [
  { title: "Ready to Move in", icon: "" },
  { title: "Co-Working", icon: "" },
];

export const retailSpaceTypes = [
  { title: "Located in Mall", icon: "" },
  { title: "Located in Commercial Project", icon: "" },
  { title: "Residential Project", icon: "" },
  { title: "Retail complex/building", icon: "" },
  { title: "Other", icon: "" },
];

export const plotLandTypes = [
  { title: "Commercial Land", icon: "" },
  { title: "Industrial Land", icon: "" },
  { title: "Agriculture Land", icon: "" },
];

export const storageTypes = [
  { title: "Cold Storage", icon: "" },
  { title: "Warehouse", icon: "" },
];

export const sellCategoryTypes = [
  {
    title: "Group Properties",
    currentTitle: "Group",
  },
  {
    title: "Single Property",
    currentTitle: "Single",
  },
  {
    title: "Commercial",
    currentTitle: "Commercial",
  },
];

export const rentCategoryTypes = [
  {
    title: "Flat",
    currentTitle: "Flat",
  },
  {
    title: "Villa",
    currentTitle: "Villa",
  },
  {
    title: "Building",
    currentTitle: "Building",
  },
  {
    title: "Commercial",
    currentTitle: "Commercial",
  },
];

export const commercialCategoryTypes = [
  {
    title: "Sell",
    currentTitle: "Sell",
  },
  {
    title: "Rent",
    currentTitle: "Rent",
  },
];

export function formatNumber(num) {
  let number = parseFloat(num);

  if (isNaN(number)) {
    return 0; // Handle invalid input
  }

  const croresResult = number / 10000000;
  const lakhsResult = number / 100000;
  const thousandsResult = number / 1000;

  if (number >= 10000000) {
    if (Number.isInteger(croresResult)) {
      return croresResult.toString() + "C"; // Integer result with "C" suffix
    }
    return croresResult.toFixed(2) + "C"; // Decimal result with 2 decimal places and "C" suffix for crores
  } else if (number >= 100000) {
    if (Number.isInteger(lakhsResult)) {
      return lakhsResult.toString() + "L"; // Integer result with "L" suffix
    }
    return lakhsResult.toFixed(2) + "L"; // Decimal result with 2 decimal places and "L" suffix for lakhs
  } else {
    if (Number.isInteger(thousandsResult)) {
      return thousandsResult.toString() + "K"; // Integer result with "K" suffix
    }
    return thousandsResult.toFixed(2) + "K"; // Decimal result with 2 decimal places and "K" suffix for thousands
  }
}

export const propertyTabs = {
  Residential: {
    Rent: { Flat: [], Villa: [], Building: [] },
    Sell: {
      "Group Properties": [
        {
          name: "Group Appartments",
          desc: "You can post advertisements for group Appartments here",
          icon: <BsFillBuildingsFill />,
        },
        {
          name: "Group Villas",
          desc: "You can post advertisements for group Villas here",
          icon: <GiVillage />,
        },
        {
          name: "Group Plots",
          desc: "You can post advertisements for group Plots here",
          icon: <TfiLayoutGrid3 />,
        },
      ],
      "Single Property": [
        {
          name: "Flat",
          desc: "You can post advertisements for Flat here",
          icon: <BsFillHouseDoorFill />,
        },
        {
          name: "Building",
          desc: "You can post advertisements for Building here",
          icon: <BsFillBuildingFill />,
        },
        {
          name: "Villa",
          desc: "You can post advertisements for Villa here",
          icon: <GiFamilyHouse />,
        },
        {
          name: "Plot",
          desc: "You can post advertisements for Open Plot here",
          icon: <BiRectangle />,
        },
      ],
    },
    PG: {},
  },
  Commercial: {
    Sell: {
      "Office Space": [
        {
          name: "Ready to Move in",
          icon: "",
          desc: "You can post advertisements for Office Space here",
        },
        {
          name: "Co-Working",
          icon: "",
          desc: "You can post advertisements for Co-working here",
        },
      ],
      "Retail Space": [
        {
          name: "Located in Mall",
          icon: "",
          desc: "You can post advertisements for Located in Mall here",
        },
        {
          name: "Located in Commercial Project",
          icon: "",
          desc: "You can post advertisements for Commercial Project here",
        },
        {
          name: "Residential Project",
          icon: "",
          desc: "You can post advertisements for Residential Project here",
        },
        {
          name: "Retail complex",
          icon: "",
          desc: "You can post advertisements for Retail complex/building here",
        },
        {
          name: "Other",
          icon: "",
          desc: "You can post advertisements for Other Projects here",
        },
      ],
      "Plot/Land": [
        {
          name: "Commercial Land",
          icon: "",
          desc: "You can post advertisements for Commercial Land here",
        },
        {
          name: "Industrial Land",
          icon: "",
          desc: "You can post advertisements for Industrial Land here",
        },
        {
          name: "Agriculture Land",
          icon: "",
          desc: "You can post advertisements for Agriculture Land here",
        },
      ],
      Storage: [
        {
          name: "Cold Storage",
          icon: "",
          desc: "You can post advertisements for Cold Storage here",
        },
        {
          name: "Warehouse",
          icon: "",
          desc: "You can post advertisements for Warehouse here",
        },
      ],
    },
    Rent: {
      "Office Space": [
        {
          name: "Ready to Move in",
          icon: "",
          desc: "You can post advertisements for Office Space here",
        },
        {
          name: "Co-Working",
          icon: "",
          desc: "You can post advertisements for Co-working here",
        },
      ],
      "Retail Space": [
        {
          name: "Located in Mall",
          icon: "",
          desc: "You can post advertisements for Located in Mall here",
        },
        {
          name: "Located in Commercial Project",
          icon: "",
          desc: "You can post advertisements for Commercial Project here",
        },
        {
          name: "Residential Project",
          icon: "",
          desc: "You can post advertisements for Residential Project here",
        },
        {
          name: "Retail complex",
          icon: "",
          desc: "You can post advertisements for Retail complex/building here",
        },
        {
          name: "Other",
          icon: "",
          desc: "You can post advertisements for Other Projects here",
        },
      ],
      "Plot/Land": [
        {
          name: "Commercial Land",
          icon: "",
          desc: "You can post advertisements for Commercial Land here",
        },
        {
          name: "Industrial Land",
          icon: "",
          desc: "You can post advertisements for Industrial Land here",
        },
        {
          name: "Agriculture Land",
          icon: "",
          desc: "You can post advertisements for Agriculture Land here",
        },
      ],
      Storage: [
        {
          name: "Cold Storage",
          icon: "",
          desc: "You can post advertisements for Cold Storage here",
        },
        {
          name: "Warehouse",
          icon: "",
          desc: "You can post advertisements for Warehouse here",
        },
      ],
    },
  },
};

export const getListingDetailValuesGroup = (
  data,
  type,
  form,
  bedroomsTypes
) => {
  const [latitude, longitude] = data?.map_details?.location?.split(",");

  if (type === "group-appartments") {
    let obj = {
      project_name: data?.project_name,
      price_per_sqft: data?.price_per_sqft,
      start_price: data?.start_price,
      end_price: data?.end_price,
      state: data?.address?.state,
      city: data?.address?.city,
      maps_details: {
        long_name: data?.address?.street_address,
        short_name: data?.address?.area,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      bhk_details: bedroomsTypes,
      amenities: data?.amenities,
      number_of_floors: data?.number_of_floors,
      ready_to_occupy: data?.ready_to_occupy,
      possession_date: data.possession_date
        ? dayjs(data.possession_date)
        : null,
      number_of_car_parking: data?.number_of_car_parking,
      number_of_bike_parking: data?.number_of_bike_parking,
      contact_details: {},
      about_property: data?.about_property,
      image_details: [],
      property_images: data?.images
        ?.filter((i) => i.title === "Property Images")
        ?.map((i) => {
          return {
            fileData: {},
            url: "http://64.227.177.77/" + i?.image,
            id: i?.image_id,
            fileType: i?.meta_data[0]?.name,
          };
        }),
      project_area: data?.project_area,
      project_size: "",
      rera_id: data?.rera_id,
      sale_type: data?.sale_type,
      facing: data?.facing,
      furnishing_detail: data?.furnishing_detail,
      property_age: data?.property_age,
    };
    form.setFieldsValue(obj);
    return obj;
  } else if (type === "group-villas") {
    let obj = {
      project_name: data?.project_name,
      price_per_sqft: data?.price_per_sqft,
      start_price: data?.start_price,
      end_price: data?.end_price,
      state: data?.address?.state,
      city: data?.address?.city,
      maps_details: {
        long_name: data?.address?.street_address,
        short_name: data?.address?.area,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      bhk_details: bedroomsTypes,
      amenities: data?.amenities,
      number_of_floors: data?.number_of_floors,
      land_area_sizes: data?.land_area_sizes,
      land_width: data?.land_length,
      land_length: data?.land_width,
      ready_to_occupy: data?.ready_to_occupy,
      possession_date: data.possession_date
        ? dayjs(data.possession_date)
        : null,
      number_of_car_parking: data?.number_of_car_parking,
      number_of_bike_parking: data?.number_of_bike_parking,
      contact_details: {},
      about_property: data?.about_property,
      image_details: [],
      property_images: data?.images
        ?.filter((i) => i.title === "Property Images")
        ?.map((i) => {
          return {
            fileData: {},
            url: "http://64.227.177.77/" + i?.image,
            id: i?.image_id,
            fileType: i?.meta_data[0]?.name,
          };
        }),
      total_project_area: data?.total_project_area,
      project_size: "",
      rera_id: data?.rera_id,
      sale_type: data?.sale_type,
      facing: data?.facing,
      furnishing_detail: data?.furnishing_detail,
      property_age: data?.property_age,
    };
    form.setFieldsValue(obj);
    return obj;
  } else if (type === "group-plots") {
    let obj = {
      project_name: data?.project_name,
      price_per_sqyd: data?.price_per_sqyd,
      start_price: data?.start_price,
      end_price: data?.end_price,
      state: data?.address?.state,
      city: data?.address?.city,
      maps_details: {
        long_name: data?.address?.street_address,
        short_name: data?.address?.area,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },

      plot_sizes: data?.plot_sizes,
      amenities: data?.amenities,
      contact_details: {},
      about_property: data?.about_property,
      image_details: [],
      property_images: data?.images
        ?.filter((i) => i.title === "Property Images")
        ?.map((i) => {
          return {
            fileData: {},
            url: "http://64.227.177.77/" + i?.image,
            id: i?.image_id,
            fileType: i?.meta_data[0]?.name,
          };
        }),
      total_project_area: data?.total_project_area,

      rera_id: data?.rera_id,

      facing: data?.facing,
    };
    form.setFieldsValue(obj);
    return obj;
  }
};

export const getListingDetailValuesSingle = (data, type, form) => {
  const [latitude, longitude] = data?.map_details?.location?.split(",");

  if (type === "flat") {
    let obj = {
      project_name: data?.project_name,
      final_price: data?.final_price,
      carpet_area: data?.carpet_area,
      state: data?.address?.state,
      city: data?.address?.city,
      maps_details: {
        long_name: data?.address?.street_address,
        short_name: data?.address?.area,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      bedroom_available: data?.bedroom_available,
      amenities: data?.amenities,
      number_of_floors: data?.number_of_floors,
      floor_number: data?.floor_number,
      ready_to_occupy: data?.ready_to_occupy,
      available_from: data.available_from ? dayjs(data.available_from) : null,
      number_of_car_parking: data?.number_of_car_parking,
      number_of_bike_parking: data?.number_of_bike_parking,
      number_of_washrooms: data?.number_of_washrooms,
      contact_details: {},
      about_property: data?.about_property,
      image_details: [],
      property_images: data?.images
        ?.filter((i) => i.title === "Property Images")
        ?.map((i) => {
          return {
            fileData: {},
            url: "http://64.227.177.77/" + i?.image,
            id: i?.image_id,
            fileType: i?.meta_data[0]?.name,
          };
        }),

      sale_type: data?.sale_type,
      facing: data?.facing,
      furnishing_detail: data?.furnishing_detail,
    };
    form.setFieldsValue(obj);
    return obj;
  } else if (type === "building") {
    let obj = {
      project_name: data?.project_name,
      final_price: data?.final_price,
      carpet_area: data?.carpet_area,
      state: data?.address?.state,
      city: data?.address?.city,
      maps_details: {
        long_name: data?.address?.street_address,
        short_name: data?.address?.area,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      bedroom_available: data?.bedroom_available,
      amenities: data?.amenities,
      number_of_floors: data?.number_of_floors,
      floor_number: data?.floor_number,
      ready_to_occupy: data?.ready_to_occupy,
      available_from: data?.available_from ? dayjs(data?.available_from) : null,
      number_of_car_parking: data?.number_of_car_parking,
      number_of_bike_parking: data?.number_of_bike_parking,
      number_of_washrooms: data?.number_of_washrooms,
      contact_details: {},
      about_property: data?.about_property,
      image_details: [],
      property_images: data?.images
        ?.filter((i) => i.title === "Property Images")
        ?.map((i) => {
          return {
            fileData: {},
            url: "http://64.227.177.77/" + i?.image,
            id: i?.image_id,
            fileType: i?.meta_data[0]?.name,
          };
        }),

      sale_type: data?.sale_type,
      facing: data?.facing,
      furnishing_detail: data?.furnishing_detail,
      land_size: data?.land_size,
      land_width: data?.land_width,
      land_length: data?.land_length,
    };
    form.setFieldsValue(obj);
    return obj;
  } else if (type === "villa") {
    let obj = {
      project_name: data?.project_name,
      final_price: data?.final_price,
      carpet_area: data?.carpet_area,
      state: data?.address?.state,
      city: data?.address?.city,
      maps_details: {
        long_name: data?.address?.street_address,
        short_name: data?.address?.area,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      bedroom_available: data?.bedroom_available,
      amenities: data?.amenities,
      number_of_floors: data?.number_of_floors,
      floors: data?.floors,
      floor_number: data?.floor_number,
      ready_to_occupy: data?.ready_to_occupy,
      available_from: data?.available_from ? dayjs(data?.available_from) : null,
      number_of_car_parking: data?.number_of_car_parking,
      number_of_bike_parking: data?.number_of_bike_parking,
      number_of_washrooms: data?.number_of_washrooms,
      contact_details: {},
      about_property: data?.about_property,
      image_details: [],
      property_images: data?.images
        ?.filter((i) => i.title === "Property Images")
        ?.map((i) => {
          return {
            fileData: {},
            url: "http://64.227.177.77/" + i?.image,
            id: i?.image_id,
            fileType: i?.meta_data[0]?.name,
          };
        }),

      sale_type: data?.sale_type,
      facing: data?.facing,
      furnishing_detail: data?.furnishing_detail,
      land_size: data?.land_size,
      land_width: data?.land_width,
      land_length: data?.land_length,
    };
    form.setFieldsValue(obj);
    return obj;
  } else if (type === "plot") {
    let obj = {
      project_name: data?.project_name,
      final_price: data?.final_price,
      state: data?.address?.state,
      city: data?.address?.city,
      maps_details: {
        long_name: data?.address?.street_address,
        short_name: data?.address?.area,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
      amenities: data?.amenities,

      contact_details: {},
      about_property: data?.about_property,
      image_details: [],
      property_images: data?.images
        ?.filter((i) => i.title === "Property Images")
        ?.map((i) => {
          return {
            fileData: {},
            url: "http://64.227.177.77/" + i?.image,
            id: i?.image_id,
            fileType: i?.meta_data[0]?.name,
          };
        }),

      sale_type: data?.sale_type,
      facing: data?.facing,
      land_size: data?.land_size,
      land_width: data?.land_width,
      land_length: data?.land_length,
      is_fencing: data?.is_fencing,
    };
    form.setFieldsValue(obj);
    return obj;
  }
};

export const getListingDetailValuesRent = (data, form) => {
  const [latitude, longitude] = data?.map_details?.location?.split(",");

  let obj = {
    project_name: data?.project_name,
    carpet_area: data?.carpet_area,
    rent_per_month: data?.rent_per_month,
    advance_amount: data?.advance_amount,
    state: data?.address?.state,
    city: data?.address?.city,
    maps_details: {
      long_name: data?.address?.street_address,
      short_name: data?.address?.area,
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    },
    bedroom_available: data?.bedroom_available,
    amenities: data?.amenities,
    number_of_floors: data?.number_of_floors,
    floor_number: data?.floor_number,
    ready_to_move_in: data?.ready_to_move_in,
    number_of_car_parking: data?.number_of_car_parking,
    number_of_bike_parking: data?.number_of_bike_parking,
    number_of_washrooms: data?.number_of_washrooms,
    contact_details: {},
    about_property: data?.about_property,
    image_details: [],
    property_images: data?.images
      ?.filter((i) => i.title === "Property Images")
      ?.map((i) => {
        return {
          fileData: {},
          url: "http://64.227.177.77/" + i?.image,
          id: i?.image_id,
          fileType: i?.meta_data[0]?.name,
        };
      }),

    sale_type: data?.sale_type,
    facing: data?.facing,
    furnishing_detail: data?.furnishing_detail,
  };
  form.setFieldsValue(obj);
  return obj;
};

export const getListingDetailValuesPg = (data, form, selectedTypes) => {
  const [latitude, longitude] = data?.map_details?.location?.split(",");

  let obj = {
    project_name: data?.project_name,
    state: data?.address?.state,
    city: data?.address?.city,
    maps_details: {
      long_name: data?.address?.street_address,
      short_name: data?.address?.area,
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    },
    sharing_for: data?.sharing_for,
    sharing_types: selectedTypes,
    best_suited_for: data?.best_suited_for,
    amenities: data?.amenities,
    attached_washroom: data?.attached_washroom,
    food_offerings: data?.food_offerings,
    food_facility: data?.food_facility,
    parking_facility: data?.parking_facility,
    ready_to_move_in: data?.ready_to_move_in,
    coliving_common_areas: data?.coliving_common_areas,
    non_veg_available: data?.non_veg_available,
    visitor_allowed: data?.visitor_allowed,
    opposite_sex_visitor_allowed: data?.opposite_sex_visitor_allowed,
    drinking_allowed: data?.drinking_allowed,
    smoking_allowed: data?.smoking_allowed,
    any_time_allowed: data.any_time_allowed,
    last_time_entry: data?.last_time_entry,
    contact_details: {},
    about_property: data?.about_property ? data?.about_property : "",
    image_details: [],
    property_images: data?.images
      ?.filter((i) => i.title === "Property Images")
      ?.map((i) => {
        return {
          fileData: {},
          url: "http://64.227.177.77/" + i?.image,
          id: i?.image_id,
          fileType: i?.meta_data[0]?.name,
        };
      }),

    furnishing_detail: data?.furnishing_detail,
  };
  form.setFieldsValue(obj);
  return obj;
};

export const getListingDetailValuesCommercial = (data, form) => {
  const [latitude, longitude] = data?.map_details?.location?.split(",");

  let obj = {
    project_name: data?.project_name,
    state: data?.address?.state,
    city: data?.address?.city,
    maps_details: {
      long_name: data?.address?.street_address,
      short_name: data?.address?.area,
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    },

    commercial_category: data?.commercial_category,
    commercial_type: data?.commercial_type,
    min_contract_period: data?.min_contract_period,
    final_price: data?.final_price,
    price_per_square_feet: data?.price_per_square_feet,
    price_per_square_yard: data?.price_per_square_yard,
    builtup_area: data?.builtup_area,
    passenger_lifts: data?.passenger_lifts,
    ready_to_occupy: data?.ready_to_occupy,
    possession_date: data.possession_date ? dayjs(data?.possession_date) : null,
    service_lifts: data?.service_lifts,
    parking_available: data?.parking_available,
    negotialble: data?.negotialble,
    tax_gov_charges_included: data?.tax_gov_charges_included,
    dg_ups_charges_included: data?.dg_ups_charges_included,
    water_charges_included: data?.water_charges_included,
    floor_number: data?.floor_number,
    electricity_bill_included: data?.electricity_bill_included,
    safety_deposit: data?.safety_deposit,
    rent_per_month: data?.rent_per_month,

    amenities: data?.amenities,

    contact_details: {},
    about_property: data?.about_property ? data?.about_property : "",
    image_details: [],
    property_images: data?.images
      ?.filter((i) => i.title === "Property Images")
      ?.map((i) => {
        return {
          fileData: {},
          url: "http://64.227.177.77/" + i?.image,
          id: i?.image_id,
          fileType: i?.meta_data[0]?.name,
        };
      }),
  };
  form.setFieldsValue(obj);
  return obj;
};

export const dateRegex =
  /^[A-Z][a-z]{2}, \d{1,2} [A-Z][a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT$/;

function parseDate(dateString) {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day); // Months are zero-based
}

export function calculatePercentage(startDateStr, todayDateStr) {
  const startDate = parseDate(startDateStr);
  const todayDate = parseDate(todayDateStr);

  if (todayDate > startDate) {
    return 100;
  }

  const startYear = startDate.getFullYear();
  const currentYear = todayDate.getFullYear();

  // Calculate the difference in years
  const yearsDifference = startYear - currentYear;

  // Define the percentage based on the difference in years
  let percentage = 0;

  if (yearsDifference === 0) {
    percentage = 95;
  } else if (yearsDifference <= 5) {
    percentage = (10 - yearsDifference * 2) * 10;
  } else {
    percentage = 0;
  }
  console.log(yearsDifference, percentage, startYear, currentYear);
  return Math.max(0, Math.min(100, percentage)); // Ensure the percentage is within 0-100.
}

function formatDateToDDMMYYYY(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const today = new Date();

export const getTodayDate = () => {
  return formatDateToDDMMYYYY(today);
};
