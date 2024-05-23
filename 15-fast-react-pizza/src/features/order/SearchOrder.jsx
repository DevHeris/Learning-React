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
        onChange={(e) => setOrderID(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
