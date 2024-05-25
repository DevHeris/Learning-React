import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderID, setOrderID] = useState("");
  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();

    if (!orderID) return;

    navigate(`/order/${orderID}`);
    setOrderID("");
  }

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="search"
        placeholder="Search order #"
        value={orderID}
        className=" w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        onChange={(e) => setOrderID(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
