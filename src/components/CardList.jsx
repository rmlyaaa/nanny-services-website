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
    <div className="container justify-content-center">
      <ul className="list-unstyled">
        {nannys.map((nanny) => (
          <Card nanny={nanny} key={nanny.id} />
        ))}
      </ul>
      <button className="btn mt-3 px-5 py-2 border border-1 rounded-pill bg-darkgreen text-white">
        Load more
      </button>
    </div>
  );
};

export default CardList;
