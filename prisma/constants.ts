export const categories = [
  { name: "Pizzas" },
  { name: "Combo" },
  { name: "Snacks" },
  { name: "Desserts" },
  { name: "Coffee" },
  { name: "Cocktails" },
  { name: "Drinks" },
];

export const _ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "/assets/ingredients/1.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "/assets/ingredients/2.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "/assets/ingredients/3.png",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "/assets/ingredients/4.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "/assets/ingredients/5.png",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "/assets/ingredients/6.png",
  },
  { name: "Ветчина", price: 79, imageUrl: "/assets/ingredients/7.png" },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "/assets/ingredients/8.png",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "/assets/ingredients/9.png",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "/assets/ingredients/10.png",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "/assets/ingredients/11.png",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "/assets/ingredients/12.png",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "/assets/ingredients/13.png",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "/assets/ingredients/14.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "/assets/ingredients/15.png",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "/assets/ingredients/16.png",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl: "/assets/ingredients/17.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/assets/products/1.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/assets/products/2.webp",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/assets/products/3.webp",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "/assets/products/4.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "/assets/products/5.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом",
    imageUrl: "/assets/products/6.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "/assets/products/7.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер",
    imageUrl: "/assets/products/8.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "/assets/products/9.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "/assets/products/10.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/assets/products/11.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль",
    imageUrl: "/assets/products/12.webp",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "/assets/products/13.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "/assets/products/14.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "/assets/products/15.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "/assets/products/16.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/assets/products/17.webp",
    categoryId: 5,
  },
];
