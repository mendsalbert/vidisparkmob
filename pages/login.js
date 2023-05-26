import React, { useState, useContext } from "react";
import Layouts from "../src/layouts/Layouts";
import { useUser } from "../src/services/user";
import Link from "next/link";
import { AuthContext } from "../authContext";
const Login = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { loginUser } = useUser();

  const onLoginHandler = () => {
    //!this must be called before the real login start
    // login();
    loginUser({ username, password });
  };
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="extra-small-section">
          <div className="page-title text-center">
            <h2>
              <span className="gradient-text">Account</span> Login
            </h2>
          </div>
          <div
            id="sign-in"
            className="tk-lp-form user-register-kit-sign tk-lp-tabs-form-content active"
            data-handler="lrk_sign_in_action"
          >
            <div className="tk-lp-alert-cont" />
            <div className="tk-lp-form-item">
              <label htmlFor="sign_in_username" className="tk-lp-label">
                Username
              </label>
              <input
                className="tk-lp-input"
                id="sign_in_username"
                name="log"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="tk-lp-form-item">
              <label htmlFor="sign_in_password" className="tk-lp-label">
                Password
              </label>
              <input
                className="tk-lp-input"
                id="sign_in_password"
                name="pwd"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="tk-lp-form-item">
              <div className="tk-lp-remember">
                <label className="tk-lp-checkbox">
                  <input
                    type="checkbox"
                    name="rememberme"
                    defaultValue="forever"
                    value={remember}
                    onChange={(e) => {
                      setRemember(e.target.checked);
                    }}
                  />
                  <span className="tk-lp-control-indicator" />
                  Remember Me
                </label>
              </div>
            </div>
            <button
              onClick={() => {
                onLoginHandler();
              }}
              type="button"
              className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
            >
              Log In
            </button>
            <button
              type="button"
              className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item"
              data-id="sign-up"
            >
              <Link href={"/signup"}>Create an Account</Link>
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Login;
