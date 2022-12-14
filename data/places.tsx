import Cuisine from "./cuisines";
import Dish from "./dishes";

export type Place = {
  name: string;
  cuisine: Cuisine;
  dishes: Dish[];
  address: string;
  latitude: number;
  longitude: number;
  stars: number;
  googleMapUrl: string;
  recommended?: true;
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
    googleMapUrl: "https://goo.gl/maps/SQLzMEfXHpRwkNpA9",
    stars: 4.0,
  },
  {
    name: "Tianfu Renjia 天府人家",
    cuisine: Cuisine.LIAONING,
    dishes: [Dish.BRAISED_PORK_WITH_VERMICELLI],
    address: "34 Jln Bukit Ho Swee, #01-864, Singapore 160034",
    latitude: 1.2880873715413441,
    longitude: 103.82700809530772,
    googleMapUrl: "https://goo.gl/maps/DnZ7zfeYwifocY7CA",
    stars: 4.4,
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
    googleMapUrl: "https://g.page/hand-in-hand-shandong-restaurant?share",
    stars: 3.6,
  },
  // Sichuan
  {
    name: "Chinese Noodle 中华面馆",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    address: "84 Marine Parade Central, #01-49, Singapore 440084",
    latitude: 1.3022430318387233,
    longitude: 103.90656025762591,
    googleMapUrl: "https://goo.gl/maps/55pPjmJjeiH8JnCL7",
    stars: 3.8,
  },
  {
    name: "Jin Jin Eating House 金金餐室",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    address: "496 North Bridge Rd, #01/01, Singapore 188739",
    latitude: 1.298523391197038,
    longitude: 103.85580064762839,
    stars: 4.3,
    googleMapUrl: "https://g.page/JJeat?share",
  },
  {
    name: "Sichuan Alley Noodle",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    address: "51A Telok Ayer St, #01-01, Singapore 048441",
    latitude: 1.2831262397435237,
    longitude: 103.84921811485097,
    googleMapUrl: "https://goo.gl/maps/xjvu7nm7xtspnFMR6",
    stars: 4.2,
  },
  {
    name: "Old Chengdu 老成都川菜馆",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES, Dish.MAPO_TOFU],
    stars: 4.1,
    address: "80 Pagoda St, Singapore 059239",
    googleMapUrl: "https://g.page/oldchengdu_sg?share",
    latitude: 1.2838521387384787,
    longitude: 103.84371166746612,
    recommended: true,
  },
  {
    name: "老四川豆花庄",
    cuisine: Cuisine.SICHUAN,
    dishes: [],
    latitude: 1.2832784047786925,
    longitude: 103.84375287554063,
    address: "46 Temple St, Singapore 058591",
    stars: 4.3,
    googleMapUrl: "https://goo.gl/maps/zZQtXfrD2jwwWJMz5",
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
    googleMapUrl: "https://goo.gl/maps/CDypMeyKhEihTCAp8",
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
    googleMapUrl: "https://goo.gl/maps/cWCXtu13Dwd1u7ft9",
    recommended: true,
  },
  {
    name: "Chilli Up Hunan Cuisine 天天湘上湖南菜",
    cuisine: Cuisine.HUNAN,
    dishes: [],
    address: "Chinatown Point, Floor 1, 53 Temple St, Singapore 058598",
    googleMapUrl: "https://goo.gl/maps/SLFPFv9iUr7VHGoi9",
    latitude: 1.2830998049409224,
    longitude: 103.84348443827163,
    stars: 4.2,
  },
  {
    name: "湘香 Xiang's Signature Hunan Cuisine",
    cuisine: Cuisine.HUNAN,
    dishes: [Dish.FARMHOUSE_FRIED_PORK],
    stars: 4.1,
    googleMapUrl: "https://goo.gl/maps/TYd3sDiCmjnVJEqVA",
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
    googleMapUrl: "https://goo.gl/maps/3Nd7srcNj5t3ovGPA",
  },
  // Qinghai
  {
    name: "Alijiang 阿里疆",
    cuisine: Cuisine.QINGHAI,
    dishes: [Dish.STIR_FRIED_DOUGH_SLICES_WITH_MUTTON],
    stars: 4.0,
    address: "1 HarbourFront Walk, #03-11 VivoCity, Singapore 098585",
    latitude: 1.2635020292162096,
    longitude: 103.82110991526599,
    googleMapUrl: "https://goo.gl/maps/KSKKvRZEEWXn3QSb8",
  },
  // Beijing
  {
    name: "Tung Lok Peking Duck, Orchard",
    cuisine: Cuisine.BEIJING,
    dishes: [Dish.BEIJING_ROAST_DUCK],
    stars: 4.0,
    address: "181 Orchard Rd, #07-07/08/09, Singapore 238896",
    latitude: 1.300949042259325,
    longitude: 103.84003435514444,
    googleMapUrl: "https://goo.gl/maps/4sPUpVbpp4Az8TiA9",
  },
  {
    name: "Imperial Treasure Super Peking Duck",
    cuisine: Cuisine.BEIJING,
    dishes: [Dish.BEIJING_ROAST_DUCK],
    stars: 4.3,
    address: "05-42/45, Paragon, 290 Orchard Rd, 238859",
    latitude: 1.3033837977671834,
    longitude: 103.83553479453099,
    googleMapUrl: "https://goo.gl/maps/uEXDc2kqwp5LbUGU7",
    recommended: true,
  },
  {
    name: "Hand In Hand Beijing Restaurant 手拉手京华小馆",
    cuisine: Cuisine.BEIJING,
    dishes: [],
    stars: 4.1,
    address: "143 Jln Besar, Singapore 208859",
    latitude: 1.306933673008098,
    longitude: 103.85610036863737,
    googleMapUrl: "https://g.page/handinhandbeijing?share",
  },
  {
    name: "Lao Beijing 老北京食堂",
    cuisine: Cuisine.BEIJING,
    dishes: [],
    stars: 4.4,
    address: "10 Sinaran Dr, #02-76/84 Square 2, Singapore 307506",
    latitude: 1.3206459360500287,
    longitude: 103.84436688581637,
    googleMapUrl: "https://goo.gl/maps/WEq6gUbvC9Q3J1o87",
  },
  {
    name: "Yan Palace 燕阁大酒楼",
    cuisine: Cuisine.BEIJING,
    dishes: [],
    stars: 3.9,
    address: "Blk 531 Upper Cross Street #01-49 Hong Lim Complex, 050531",
    latitude: 1.2844643136968632,
    longitude: 103.84603330974187,
    googleMapUrl: "https://goo.gl/maps/KF1HKHF85DnX7Rcn6",
  },
];

export default places;
