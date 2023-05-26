import Link from "next/link";
import React from "react";
const OrderCheckoutSummary = () => {
  return (
    <div className="form-column">
      <div className="summary-section">
        <div className="small-title">Summary</div>
        <div className="products-in-cart">
          <div className="product-in-cart">
            <div className="product-info">
              <div className="product-thumb">
                {" "}
                <Link href="/07-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-37.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="product-details">
                <div className="product-name">
                  {" "}
                  <Link href="/07-product-page">
                    <a>Cryptoki NFT and DIgital Market PSD Template</a>
                  </Link>{" "}
                </div>
                <div className="license-type">Regular License</div>
              </div>
            </div>
            <div className="product-price">$12.00</div>
          </div>
          <div className="product-in-cart">
            <div className="product-info">
              <div className="product-thumb">
                {" "}
                <Link href="/07-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-38.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="product-details">
                <div className="product-name">
                  {" "}
                  <Link href="/07-product-page">
                    <a>Twitter Gaming Headers Pack 04</a>
                  </Link>{" "}
                </div>
                <div className="license-type">Commercial License</div>
              </div>
            </div>
            <div className="product-price">$40.00</div>
          </div>
          <div className="product-in-cart">
            <div className="product-info">
              <div className="product-thumb">
                {" "}
                <Link href="/07-product-page">
                  <a>
                    <img
                      src="img/content/previews/project-thumb-42.png"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="product-details">
                <div className="product-name">
                  {" "}
                  <Link href="/07-product-page">
                    <a>Olympus WP - Social Networking Theme</a>
                  </Link>{" "}
                </div>
                <div className="license-type">Regular License</div>
              </div>
            </div>
            <div className="product-price">$12.00</div>
          </div>
        </div>
        <div className="total-price-section">
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
              <div className="value total-price gradient-text">$115.00</div>
            </div>
          </div>
        </div>
        <div className="payment-method-section">
          <div className="small-title">Payment Method</div>
          <div className="payment-method">
            <input type="radio" name="payment-method" id="paypal" />
            <label htmlFor="paypal">Paypal</label>
            <div className="payment-description">
              Pay with your Paypal balance or connected bank account/ credit
              card! It’s quick and really secure, it just takes a few minutes to
              set it up!
            </div>
          </div>
          <div className="payment-method">
            <input type="radio" name="payment-method" id="credit-card" />
            <label htmlFor="credit-card">Credit or Debit Card</label>
          </div>
        </div>
        <div className="complete-order-button">
          <input
            className="btn gradient-background"
            type="submit"
            defaultValue="Complete Order!"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCheckoutSummary;
