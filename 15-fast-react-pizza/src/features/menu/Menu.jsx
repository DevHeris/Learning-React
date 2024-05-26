/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    unitPrice: 6,
    imageUrl: "pizzas/focaccia.jpg",
    soldOut: false,
    id: 1,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    unitPrice: 10,
    imageUrl: "pizzas/margherita.jpg",
    soldOut: false,
    id: 2,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    unitPrice: 12,
    imageUrl: "pizzas/spinaci.jpg",
    soldOut: false,
    id: 3,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    unitPrice: 12,
    imageUrl: "pizzas/funghi.jpg",
    soldOut: false,
    id: 4,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    unitPrice: 15,
    imageUrl: "pizzas/salamino.jpg",
    soldOut: true,
    id: 5,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    unitPrice: 18,
    imageUrl: "pizzas/prosciutto.jpg",
    soldOut: false,
    id: 6,
  },
];

function Menu() {
  // const menu = useLoaderData();
  const menu = pizzaData;

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  // const menu = await getMenu();
  const menu = pizzaData;
  return menu;
}

export default Menu;
