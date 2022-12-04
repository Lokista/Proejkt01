import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ref, set, get, child, onValue } from "firebase/database";
import { db } from "../../auth/firebase";
import { useState, useEffect } from "react";
import { colProRef } from "../../auth/firebase";
import { collection, getDocs } from "firebase/firestore";

function Shop(products) {
  console.log("hahajestemproduktem", products.products);
  const xdxd = async () => {
    const Doks = await getDocs(colProRef);
    const products = await Doks.docs.map((doc) => doc.data());
    console.log("1");
  };

  const [table, setTable] = useState([]);

  useEffect(() => {
    xdxd();
    getDocs(colProRef).then((snap) => {
      setTable(snap.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log("table", table);

  return (
    <div className="relative">
      <Header />
      <Feedback products={products.products}></Feedback>

      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  const Doks = await getDocs(colProRef);
  const products = await Doks.docs.map((doc) => doc.data());

  return {
    props: {
      products,
    },
  };
}
export default Shop;
