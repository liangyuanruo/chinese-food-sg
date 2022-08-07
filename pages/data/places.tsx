import Cuisine from "./cuisines";
import Dish from "./dishes";

type Place = {
  name: string;
  cuisine: Cuisine;
  dishes: Dish[];
  address?: string;
  latitude: number;
  longitude: number;
  stars?: number;
  url?: string;
};

const places: Place[] = [
  // Liaoning
  {
    name: "Restaurant Manchurian 满族全羊铺",
    cuisine: Cuisine.LIAONING,
    dishes: [],
    address: "18 Smith St, Singapore 058932",
    latitude: 1.2823122076071485,
    longitude: 103.84455316196886,
    url: "https://goo.gl/maps/SQLzMEfXHpRwkNpA9",
  },
  {
    name: "Tianfu Renjia 天府人家",
    cuisine: Cuisine.LIAONING,
    dishes: [Dish.BRAISED_PORK_WITH_VERMICELLI],
    address: "34 Jln Bukit Ho Swee, #01-864, Singapore 160034",
    latitude: 1.2880873715413441,
    longitude: 103.82700809530772,
    url: "https://goo.gl/maps/DnZ7zfeYwifocY7CA",
  },
  // Shandong
  {
    name: "Hand in Hand Shandong Restaurant",
    cuisine: Cuisine.SHANDONG,
    dishes: [
      Dish.OLD_VINEGAR_PEANUTS,
      Dish.STIR_FRIED_PIG_KIDNEY,
      Dish.SHANDONG_FRIED_CHICKEN,
      Dish.BO_SI_DI_GUA,
    ],
    address: "69 Boat Quay, Singapore 049857",
    latitude: 1.2879139165995381,
    longitude: 103.84931912794099,
    url: "https://g.page/hand-in-hand-shandong-restaurant?share",
  },
  // Sichuan
  {
    name: "Chinese Noodle 中华面馆",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    address: "84 Marine Parade Central, #01-49, Singapore 440084",
    latitude: 1.3022430318387233,
    longitude: 103.90656025762591,
  },
  {
    name: "Jin Jin Eating House 金金餐室",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    address: "496 North Bridge Rd, #01/01, Singapore 188739",
    latitude: 1.298523391197038,
    longitude: 103.85580064762839,
    stars: 4.3,
    url: "https://g.page/JJeat?share",
  },
  {
    name: "Sichuan Alley Noodle",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    address: "51A Telok Ayer St, #01-01, Singapore 048441",
    latitude: 1.2831262397435237,
    longitude: 103.84921811485097,
    url: "https://goo.gl/maps/xjvu7nm7xtspnFMR6",
    stars: 4.2,
  },
  {
    name: "Old Chengdu 老成都川菜馆",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES, Dish.MAPO_TOFU],
    stars: 4.1,
    address: "80 Pagoda St, Singapore 059239",
    url: "https://g.page/oldchengdu_sg?share",
    latitude: 1.2838521387384787,
    longitude: 103.84371166746612,
  },
  {
    name: "老四川豆花庄",
    cuisine: Cuisine.SICHUAN,
    dishes: [],
    latitude: 1.2832784047786925,
    longitude: 103.84375287554063,
    address: "46 Temple St, Singapore 058591",
    stars: 4.3,
    url: "https://goo.gl/maps/zZQtXfrD2jwwWJMz5",
  },
  {
    name: "Sichuan Delicacies 四川名小吃",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    address:
      "People's Park Food Centre, 32 New Market Rd, #01-1042, Singapore 050032",
    stars: 4.4,
    latitude: 1.285070360814813,
    longitude: 103.84255815040666,
  },
  // Hunan
  {
    name: "Hunan Cuisine Restaurant 密斯湘菜館",
    cuisine: Cuisine.HUNAN,
    dishes: [
      Dish.FARMHOUSE_FRIED_PORK,
      Dish.STEAMED_FISH_HEAD_WITH_DICED_HOT_RED_PEPPERS,
    ],
    stars: 3.8,
    address: "8 Mosque St, Singapore 059488",
    latitude: 1.2839477911621175,
    longitude: 103.84421246100491,
  },
  {
    name: "Chilli Up Hunan Cuisine 天天湘上湖南菜",
    cuisine: Cuisine.HUNAN,
    dishes: [],
    address: "Chinatown Point, Floor 1, 53 Temple St, Singapore 058598",
    url: "https://goo.gl/maps/SLFPFv9iUr7VHGoi9",
    latitude: 1.2830998049409224,
    longitude: 103.84348443827163,
  },
  {
    name: "湘香 Xiang's Signature Hunan Cuisine",
    cuisine: Cuisine.HUNAN,
    dishes: [Dish.FARMHOUSE_FRIED_PORK],
    stars: 4.1,
    url: "https://goo.gl/maps/TYd3sDiCmjnVJEqVA",
    address: "14 Liang Seah St, #01-12, Singapore 189035",
    latitude: 1.2981018184803597,
    longitude: 103.8562658711651,
  },
  {
    name: "The Xiang Pavilion 国色天湘",
    cuisine: Cuisine.HUNAN,
    dishes: [],
    stars: 4.4,
    address: "100 Tras St, #02-14A, Singapore 079027",
    latitude: 1.2744082309567768,
    longitude: 103.84363804166628,
    url: "https://www.100am.com.sg/stores/thexiangpavilionhunancuisine/",
  },
];

export default places;
