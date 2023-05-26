import React from "react";
import { Nav, Tab } from "react-bootstrap";
const ProductV2Tabs = () => {
  return (
    <div className="tabs-block swiper-container">
      <div className="swiper-nav">
        <div className="swiper-button-next">
          <svg className="crumina-icon next-button">
            <use xlinkHref="#arrow-right2-icon" />
          </svg>
        </div>
        <div className="swiper-button-prev">
          <svg className="crumina-icon prev-button">
            <use xlinkHref="#arrow-left2-icon" />
          </svg>
        </div>
      </div>
      {/*TAB TITLE*/}
      <Tab.Container defaultActiveKey={"tab1"}>
        <Nav as={"ul"} className="tabs-list swiper-wrapper">
          <Nav.Link as={"li"} eventKey="tab1" className="swiper-slide">
            <a>Bids</a>
          </Nav.Link>
          <Nav.Link as={"li"} eventKey="tab2" className="swiper-slide">
            <a>Description</a>
          </Nav.Link>
          <Nav.Link as={"li"} eventKey="tab3" className="swiper-slide">
            <a>Additional Details</a>
          </Nav.Link>
          <Nav.Link as={"li"} eventKey="tab4" className="swiper-slide">
            <a>Activity</a>
          </Nav.Link>
        </Nav>
        {/*/TAB TITLE*/}
        <Tab.Content>
          <Tab.Pane eventKey="tab1" className="tab">
            <div className="placed-bid">
              <div className="bid-placer">
                <div className="avatar box-42">
                  <img src="img/avatar-3.png" alt="avatar" />
                </div>
                <div className="bid-info">
                  <div className="bid-title">
                    Bid placed by{" "}
                    <span className="gradient-text">Crimson Ray</span>
                  </div>
                  <div className="bid-date">03/25/2021 at 12:19pm</div>
                </div>
              </div>
              <div className="bid-box">
                <div className="crypto-value">2.31 ETH</div>
                <div className="currency-value">125.230 U$D</div>
              </div>
            </div>
            <div className="placed-bid">
              <div className="bid-placer">
                <div className="avatar box-42">
                  <img src="img/avatar-4.png" alt="avatar" />
                </div>
                <div className="bid-info">
                  <div className="bid-title">
                    Bid placed by{" "}
                    <span className="gradient-text">Jenn Art</span>
                  </div>
                  <div className="bid-date">03/25/2021 at 12:19pm</div>
                </div>
              </div>
              <div className="bid-box">
                <div className="crypto-value">2.31 ETH</div>
                <div className="currency-value">125.230 U$D</div>
              </div>
            </div>
            <div className="placed-bid">
              <div className="bid-placer">
                <div className="avatar box-42">
                  <img src="img/avatar-5.png" alt="avatar" />
                </div>
                <div className="bid-info">
                  <div className="bid-title">
                    Bid placed by{" "}
                    <span className="gradient-text">Derek Greyson</span>
                  </div>
                  <div className="bid-date">03/25/2021 at 12:19pm</div>
                </div>
              </div>
              <div className="bid-box">
                <div className="crypto-value">2.31 ETH</div>
                <div className="currency-value">125.230 U$D</div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="tab2" className="tab">
            <div className="product-description">
              <p>
                I am a self-taught digital artist who specializes in 3d art and
                motion graphics. Most of my works are inspired by nature and
                biomechanic themes.
              </p>
              <p>
                What does it mean? Biomechanics is the study of the structure,
                function and motion of the mechanical aspects of biological
                systems, at any level from whole organisms to organs, cells and
                cell organelles, using the methods of mechanics. Biomechanics is
                a branch of biophysics.
              </p>
            </div>
          </Tab.Pane>
          {/*TAB DETAILS*/}
          <Tab.Pane eventKey="tab3" className="tab">
            {/* Detailed description*/}
            <div className="product-description">
              <ul className="details-list">
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Size</span>
                  <span className="bold">5000 x 3500px (37MB)</span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Formats</span>
                  <span className="bold">MP4, JPEG and PNG</span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Contract Address</span>
                  <span className="bold">0xf7a6...f643</span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Token ID</span>
                  <span className="bold">3584</span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Token Standard</span>
                  <span className="bold">ERC-721</span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Blockchain</span>
                  <span className="bold">Ethereum</span>
                </li>
              </ul>
            </div>
          </Tab.Pane>
          {/*/TAB DETAILS*/}
          {/*TAB ACTIVITY*/}
          <Tab.Pane eventKey="tab4" className="tab">
            {/*Activity Item*/}
            <div className="activity-item sale">
              <div className="bid-placer">
                <div className="avatar box-42">
                  <a href="/08-Profile-Page">
                    <img src="img/avatar.png" alt="avatar" />
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="bid-info">
                  <div className="bid-title">
                    <span className="gradient-text">
                      <a href="/08-Profile-Page">Dexter Stark</a>
                    </span>{" "}
                    sold
                  </div>
                  <div className="bid-date">53 minutes ago</div>
                </div>
              </div>
              <div className="bid-box">
                <div className="crypto-value">2.31 ETH</div>
                <div className="currency-value">125.230 U$D</div>
              </div>
            </div>
            {/*/ Activity Item*/}
            {/*Activity Item*/}
            <div className="activity-item purchase">
              <div className="bid-placer">
                <div className="avatar box-42">
                  <a href="/08-Profile-Page">
                    <img src="img/avatar-14.png" alt="avatar" />
                  </a>
                </div>
                <div className="bid-info">
                  <div className="bid-title">
                    <span className="gradient-text">
                      <a href="/08-Profile-Page">Derek Greyson</a>
                    </span>{" "}
                    purchased
                  </div>
                  <div className="bid-date">56 minutes ago</div>
                </div>
              </div>
              <div className="bid-box">
                <div className="crypto-value">2.31 ETH</div>
                <div className="currency-value">125.230 U$D</div>
              </div>
            </div>
            {/*/ Activity Item*/}
            {/*Activity Item*/}
            <div className="activity-item listing">
              <div className="bid-placer">
                <div className="avatar box-42">
                  <a href="/08-Profile-Page">
                    <img src="img/avatar-2.png" alt="avatar" />
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="bid-info">
                  <div className="bid-title">
                    <span className="gradient-text">
                      <a href="/08-Profile-Page">Jackie Jones</a>
                    </span>{" "}
                    listed
                  </div>
                  <div className="bid-date">58 minutes ago</div>
                </div>
              </div>
              <div className="bid-box">
                <div className="crypto-value">2.31 ETH</div>
                <div className="currency-value">125.230 U$D</div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      {/*/TAB ACTIVITY*/}
    </div>
  );
};

export default ProductV2Tabs;
