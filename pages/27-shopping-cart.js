import React from "react";
import ShoppingCartLists from "../src/components/Shopping Cart/ShoppingCartLists";
import ShoppingCartSideBar from "../src/components/Shopping Cart/ShoppingCartSideBar";
import Layouts from "../src/layouts/Layouts";

const ShoppingCart = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding shopping-cart-page">
        <div className="page-title-section">
          <h2>
            Shopping <span className="gradient-text">Cart</span>
          </h2>
        </div>
        <div className="shopping-cart-area grid-right-sidebar">
          {/*      shopping cart */}
          <ShoppingCartLists />
          {/*    cart total box */}
          <ShoppingCartSideBar />
        </div>
      </div>
    </Layouts>
  );
};
export default ShoppingCart;
