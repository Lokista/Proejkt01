import React from "react";
import CheckoutComponent from "../../components/Checkout/CheckoutComponent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Checkout() {
  return (
    <div className="">
      <Header></Header>

      <CheckoutComponent></CheckoutComponent>

      <Footer></Footer>
    </div>
  );
}

export default Checkout;
