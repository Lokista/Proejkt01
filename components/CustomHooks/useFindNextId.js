import { useEffect, useState } from "react";
import { getDocs, collection, doc, setDoc, getDoc } from "firebase/firestore";
import { colProRef } from "../../auth/firebase";
function useFindNextId() {
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    getNextId();
  }, []);
  if (nextIndex === 0) {
    return null;
  }

  return nextIndex;
}
export const getNextId = async () => {
  const Doks = await getDocs(colProRef);
  const products = await Doks.docs.map((doc) => doc.data());
  let number = 0;
  products?.forEach(({ id }) => {
    if (id > number) {
      number = id;
    }
  });
  return number + 1;
};
export default useFindNextId;
