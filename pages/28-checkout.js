import React from "react";
import OrderCheckoutForm from "../src/components/Order Checkout/OrderCheckoutForm";
import Layouts from "../src/layouts/Layouts";

const Checkout = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding shopping-cart-page">
        <div className="page-title-section">
          <h2>
            Order <span className="gradient-text">Checkout</span>
          </h2>
        </div>
        {/*  checkout form */}
        <OrderCheckoutForm />
      </div>
    </Layouts>
  );
};
export default Checkout;
