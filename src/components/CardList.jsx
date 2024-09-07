import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import Card from "./Card";

const CardList = () => {
  const [nannys, setNanny] = useState([]);

  useEffect(() => {
    const nannysRef = ref(database, "nannys");
    get(nannysRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const nannysArr = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setNanny(nannysArr);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {nannys.map((nanny) => (
        <Card nanny={nanny} key={nanny.id} />
      ))}
    </>
  );
};

export default CardList;
