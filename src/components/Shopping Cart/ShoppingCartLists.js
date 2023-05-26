import Link from "next/link";
import React from "react";
const ShoppingCartLists = () => {
  return (
    <div className="shopping-cart">
      <table className="content-table">
        <thead>
          <tr>
            <th scope="col" className="heading-label">
              Item details
            </th>
            <th scope="col" className="heading-label">
              License
            </th>
            <th scope="col" className="heading-label">
              Price
            </th>
            <th scope="col" className="heading-label" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Item details">
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
                  <div className="product-meta">
                    <div className="item-category ui-templates">
                      UI TEMPLATES
                    </div>
                    <div className="product-seller">
                      @DexterStark
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td data-label="License">
              <form>
                <select className="select-nice">
                  <option value="regular">Regular</option>
                  <option value="commercial">Commercial</option>
                  <option value="extended">Extended</option>
                </select>
              </form>
            </td>
            <td data-label="price" className="price">
              $12.00
            </td>
            <td>
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td data-label="Item details">
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
                  <div className="product-meta">
                    <div className="item-category social-graphics">
                      Social graphics
                    </div>
                    <div className="product-seller">
                      @DexterStark
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td data-label="License">
              <form>
                <select className="select-nice">
                  <option value="regular">Regular</option>
                  <option value="commercial">Commercial</option>
                  <option value="extended">Extended</option>
                </select>
              </form>
            </td>
            <td data-label="price" className="price">
              $40.00
            </td>
            <td>
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td data-label="Item details">
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
                  <div className="product-meta">
                    <div className="item-category coded-templates">
                      Coded templates
                    </div>
                    <div className="product-seller">
                      @JackieJ
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td data-label="License">
              <form>
                <select className="select-nice">
                  <option value="regular">Regular</option>
                  <option value="commercial">Commercial</option>
                  <option value="extended">Extended</option>
                </select>
              </form>
            </td>
            <td data-label="price" className="price">
              $68.00
            </td>
            <td>
              <button className="close">
                <svg className="crumina-icon">
                  <use xlinkHref="#close-circle-icon" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="discount-section">
        <form className="cryptoki-form" id="discount-form">
          <span className="label">Redeem Code</span>
          <input type="text" placeholder="CRYP1258OFF" />
          <button className="btn btn-normal btn-dark" type="submit">
            Redeem!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCartLists;
