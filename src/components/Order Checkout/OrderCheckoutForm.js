import React from "react";
import OrderCheckoutSummary from "./OrderCheckoutSummary";

const OrderCheckoutForm = () => {
  return (
    <div className="checkout-area">
      <form className="cryptoki-form grid-2-columns" id="checkout-form">
        <div className="form-column">
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="name">You name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="address">Full address address</label>
            <input type="text" id="address" />
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option value="your-country">Your country</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="state">State</label>
              <select id="state">
                <option value="your-state">Your state</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="city">City</label>
              <select id="city">
                <option value="city">Your country</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="zip-code">ZIP code</label>
              <select id="zip-code">
                <option value="your-zip-code">Your ZIP code</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="state">Additonal comments</label>
            <textarea cols={30} rows={10} defaultValue={""} />
          </div>
        </div>

        {/* / Order Checkout Summary */}
        <OrderCheckoutSummary />
        {/* / Order Checkout Summary */}
      </form>
    </div>
  );
};

export default OrderCheckoutForm;
