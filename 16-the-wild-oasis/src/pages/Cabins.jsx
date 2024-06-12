import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(() => {
    async function getCabinsData() {
      const data = await getCabins();
      console.log(data);
    }
    getCabinsData();
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>
        <img
          src="https://zhgcozyfjmjzkbvvsufb.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
          alt=""
        />
      </p>
    </Row>
  );
}

export default Cabins;
