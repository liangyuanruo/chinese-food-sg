import Cuisine from "./cuisines";
import Dish from "./dishes";

type Place = {
  name: string;
  cuisine: Cuisine;
  dishes: Dish[];
  latitude?: number;
  longitude?: number;
  url?: string;
};

const places: Place[] = [
  // Liaoning
  {
    name: "Restaurant Manchurian 满族全羊铺",
    cuisine: Cuisine.LIAONING,
    dishes: [],
  },
  {
    name: "Tianfu Renjia 天府人家",
    cuisine: Cuisine.LIAONING,
    dishes: [Dish.BRAISED_PORK_WITH_VERMICELLI],
    url: "https://goo.gl/maps/DnZ7zfeYwifocY7CA",
  },
  // Shandong
  {
    name: "Shou La Shou Shandong",
    cuisine: Cuisine.SHANDONG,
    dishes: [
      Dish.OLD_VINEGAR_PEANUTS,
      Dish.STIR_FRIED_PIG_KIDNEY,
      Dish.SHANDONG_FRIED_CHICKEN,
      Dish.BO_SI_DI_GUA,
    ],
    url: "https://handinhandfood.com/hand-in-hand-shandong-restaurant/",
  },
  // Sichuan
  {
    name: "面道-中华面馆",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
  },
  {
    name: "Jin Jin Eating House 金金餐室",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
  },
  {
    name: "Divine Chicken Pot, Jurong East",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
  },

  {
    name: "Chuan Hung",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
    url: "https://goo.gl/maps/9fCR2vagjms4E8Fk6",
  },
  {
    name: "Old Chengdu 老成都川菜馆",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
  },
  {
    name: "老四川豆花庄",
    cuisine: Cuisine.SICHUAN,
    dishes: [],
  },
  {
    name: "四川名小吃",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
  },
  {
    name: "老成都麻辣烫",
    cuisine: Cuisine.SICHUAN,
    dishes: [Dish.HOT_AND_SOUR_NOODLES],
  },
  // Hunan
  {
    name: "Ziweitang Folk Soup Pot Restaurant 滋味堂私房湘菜馆",
    cuisine: Cuisine.HUNAN,
    dishes: [],
  },
  {
    name: "Hunan Cuisine Restaurant 密斯湘菜館",
    cuisine: Cuisine.HUNAN,
    dishes: [
      Dish.FARMHOUSE_FRIED_PORK,
      Dish.STEAMED_FISH_HEAD_WITH_DICED_HOT_RED_PEPPERS,
    ],
  },
  {
    name: "Chilli Up Hunan Cuisine 天天湘上湖南菜",
    cuisine: Cuisine.HUNAN,
    dishes: [],
  },
  {
    name: "Xiang Signature, Bugis",
    cuisine: Cuisine.HUNAN,
    dishes: [Dish.FARMHOUSE_FRIED_PORK],
  },
  { name: "King of Braise 绝味", cuisine: Cuisine.HUNAN, dishes: [] },
  {
    name: "The Xiang Pavilion",
    cuisine: Cuisine.HUNAN,
    dishes: [],
    url: "https://www.100am.com.sg/stores/thexiangpavilionhunancuisine/",
  },
];

export default places;
