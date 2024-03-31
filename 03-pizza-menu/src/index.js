import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stove oven, all organic, all delicious
      </p>
      <ul className="pizzas">
        <Pizza
          name="Focaccia"
          photoName="pizzas/focaccia.jpg"
          ingredients="Bread with italian olive oil and rosemary"
          price="6"
          soldOut="false"
        />
        <Pizza
          name="Pizza Margherita"
          photoName="pizzas/margherita.jpg"
          ingredients="Tomato and mozarella"
          price="10"
          soldOut="false"
        />
        <Pizza
          name="Pizza Spinaci"
          photoName="pizzas/spinaci.jpg"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price="12"
          soldOut="false"
        />
        <Pizza
          name="Pizza Funghi"
          photoName="pizzas/funghi.jpg"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price="12"
          soldOut="false"
        />
        <Pizza
          name="Pizza Salamino"
          photoName="pizzas/salamino.jpg"
          ingredients="Tomato, mozarella, and pepperoni"
          price="15"
          soldOut="true"
        />
        <Pizza
          name="Pizza Prosciutto"
          photoName="pizzas/prosciutto.jpg"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price="18"
          soldOut="false"
        />
      </ul>
    </main>
  );
}

function Pizza({ name, photoName, ingredients, price, soldOut }) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open.
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
