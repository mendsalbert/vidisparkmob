import Link from "next/link";
import React from "react";
const ShoppingCartSideBar = () => {
  return (
    <aside>
      <div className="cart-total-box">
        <div className="cart-total-wrapper">
          <div className="small-title">Order Total</div>
          <div className="total-price">$115.00</div>
          <div className="total-price-details">
            <div className="field">
              <div className="label">Cart</div>
              <div className="value">$120.00</div>
            </div>
            <div className="field">
              <div className="label">Code</div>
              <div className="value">-$5.00</div>
            </div>
            <div className="field">
              <div className="label">Total</div>
              <div className="value">$115.00</div>
            </div>
          </div>
          <div className="to-checkout-button">
            {" "}
            <Link href="/28-checkout">
              <a className="btn btn-fullwidth gradient-background">
                Proceed to Checkout
              </a>
            </Link>{" "}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ShoppingCartSideBar;
