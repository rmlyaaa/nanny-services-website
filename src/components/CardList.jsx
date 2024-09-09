import {
  get,
  ref,
  query,
  orderByKey,
  limitToLast,
  endAt,
} from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebase/firebaseConfig";

import Card from "./Card";

const CardList = () => {
  const [limit, setLimit] = useState(5);
  const [lastKey, setLastKey] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const [nannys, setNanny] = useState([]);

  useEffect(() => {
    const nannysRef = ref(database, "nannys");
    let q;

    if (lastKey) {
      q = query(
        nannysRef,
        orderByKey(),
        endAt(lastKey),
        limitToLast(limit + 1)
      );
    } else {
      q = query(nannysRef, orderByKey(), limitToLast(limit));
    }

    get(q)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const nannysArr = Object.entries(snapshot.val()).map(
            ([id, data]) => ({ id, ...data })
          );

          if (lastKey) {
            nannysArr.shift();
          }

          const uniqueNannysArr = nannysArr.filter(
            (nanny) =>
              !nannys.some((existingNanny) => existingNanny.id === nanny.id)
          );

          setNanny((prevNannys) => [...prevNannys, ...uniqueNannysArr]);

          const newLastKey = Object.keys(snapshot.val())[
            Object.keys(snapshot.val()).length - 1
          ];
          setLastKey(newLastKey);

          if (nannysArr.length < limit) {
            setHasMore(false);
          }
        } else {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [limit, lastKey, nannys]);

  const handleLoadMore = () => {
    if (hasMore) {
      setLimit(limit + 5);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <ul className="list-unstyled">
        {[...new Map(nannys.map((nanny) => [nanny.id, nanny])).values()].map(
          (nanny) => (
            <Card nanny={nanny} key={nanny.id} />
          )
        )}
      </ul>
      {hasMore && (
        <button
          className="btn mt-3 px-5 py-2 border border-1 rounded-pill bg-darkgreen text-white"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CardList;
