import React, { useState, useContext } from "react";
import Layouts from "../src/layouts/Layouts";
import { useUser } from "../src/services/user";
import { AuthContext } from "../authContext";
import Link from "next/link";

const bcrypt = require("bcryptjs");
const Registration = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [aggred, setAggred] = useState(false);
  const salt = bcrypt.genSaltSync(10);

  const { addUser } = useUser();

  const onHandleSubmit = () => {
    login();
    if (password != confirmPassword) {
      //TODO: use a password validator here.
      alert("passowrd must match");
      return;
    } else if (aggred == false) {
      alert("You have to aggre to our privacy policy first");
      return;
    }
    const hash = bcrypt.hashSync(password, salt);
    addUser({ username, hash, salt, aggred });
  };

  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="extra-small-section">
          <div className="page-title text-center">
            <h2>
              <span className="gradient-text">Register</span> Account
            </h2>
          </div>
          <div
            id="sign-up"
            className="tk-lp-form user-register-kit-register tk-lp-tabs-form-content active"
            data-handler="lrk_register_action"
          >
            <input type="hidden" name="redirect_to" defaultValue="" />
            <input type="hidden" name="after_login" defaultValue="auto_login" />
            <div className="tk-lp-alert-cont" />
            <div className="tk-lp-form-item">
              <label htmlFor="sign_up_username" className="tk-lp-label">
                Username
              </label>
              <input
                className="tk-lp-input"
                id="sign_up_username"
                name="user_login"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div />
            <div className="tk-lp-form-item">
              <label htmlFor="sign_up_password" className="tk-lp-label">
                Password
              </label>
              <input
                className="tk-lp-input"
                id="sign_up_password"
                name="user_password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="tk-lp-form-item">
              <label htmlFor="sign_up_confirm-password" className="tk-lp-label">
                Confirm Password
              </label>
              <input
                className="tk-lp-input"
                id="sign_up_confirm-password"
                name="user_password_confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>
            <div className="tk-lp-form-item">
              <div className="tk-lp-check">
                <label className="tk-lp-checkbox">
                  <input
                    type="checkbox"
                    name="gdpr"
                    defaultValue={1}
                    value={aggred}
                    onChange={(e) => {
                      setAggred(e.target.checked);
                    }}
                  />
                  <span className="tk-lp-control-indicator" />
                </label>
                <div className="tk-lp-check-text">
                  I agree to{" "}
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                onHandleSubmit();
              }}
              className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
            >
              Register Now
            </button>

            {/* <button
              type="button"
              className=" tk-lp-w-full tk-lp-tabs-form-item"
              data-id="sign-in"
            >
              or
            </button> */}

            {/* <div className="wallet-item orange-gradient tw-mt-10 tw-mb-10">
              <div className="wallet-icon">
                <img src="img/content/wallet/icon-1.png" alt="" />
              </div>
              <div className="wallet-info">
                <div className="title h5">Metamask</div>
                <button
                  onClick={() => {
                    login();
                  }}
                  className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
                >
                  Sign Up with Metamask
                </button>
              </div>
            </div> */}
            <button
              type="button"
              className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item"
              data-id="sign-in"
            >
              <Link href={"/login"}>I have an account!</Link>
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Registration;
