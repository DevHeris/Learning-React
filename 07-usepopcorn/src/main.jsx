import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

import StarRating from "./StarRating.jsx";
import { useState } from "react";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating onSetRating={setMovieRating} />
      <p>This movie has a rating of {movieRating} stars</p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Test />
    <StarRating />
    <StarRating
      maxRating={5}
      color="red"
      size="48"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={2}
    />
    <StarRating maxRating={10} color="purple" size="30" defaultRating={9} />
    {/* <App /> */}
  </React.StrictMode>
);
