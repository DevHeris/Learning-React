import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
