import Link from "next/link";
import React from "react";
import Layouts from "../src/layouts/Layouts";

const Wallet = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="wallet-wrapper section-small">
          <div className="section-title text-center">
            <span className="gradient-text">Connect</span> your Wallet
          </div>
          <div className="wallet-grid">
            <div className="wallet-item orange-gradient">
              <div className="wallet-icon">
                <img src="img/content/wallet/icon-1.png" alt="" />
              </div>
              <div className="wallet-info">
                <div className="title h5">Metamask</div>
                <div className="description">
                  Learn about how to get the wallet and much more clicking{" "}
                  <a href="#">here</a>
                </div>
              </div>
            </div>
            <div className="wallet-item turquoise-gradient">
              <div className="wallet-icon">
                <img src="img/content/wallet/icon-2.png" alt="" />
              </div>
              <div className="wallet-info">
                <div className="title h5">WalletConnect</div>
                <div className="description">
                  Learn about how to get the wallet and much more clicking{" "}
                  <a href="#">here</a>
                </div>
              </div>
            </div>
            <div className="wallet-item purple-gradient">
              <div className="wallet-icon">
                <img src="img/content/wallet/icon-3.png" alt="" />
              </div>
              <div className="wallet-info">
                <div className="title h5">Fortmatic</div>
                <div className="description">
                  Learn about how to get the wallet and much more clicking{" "}
                  <a href="#">here</a>
                </div>
              </div>
            </div>
            <div className="wallet-item green-gradient">
              <div className="wallet-icon">
                <img src="img/content/wallet/icon-4.png" alt="" />
              </div>
              <div className="wallet-info">
                <div className="title h5">Portis</div>
                <div className="description">
                  Learn about how to get the wallet and much more clicking{" "}
                  <a href="#">here</a>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-text text-center">
            New to wallets?{" "}
            <Link href="/19-faq">
              <a>Learn how to make a wallet</a>
            </Link>{" "}
            in our FAQs page
            <br /> and check other helpful guides to get started!
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Wallet;
