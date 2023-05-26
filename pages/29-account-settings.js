import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layouts from "../src/layouts/Layouts";
import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";
import { useUser } from "../src/services/user";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../src/lib/auth";

const AccountSettings = () => {
  useAuth();
  const notify = () =>
    toast.success("Social Media Accounts updated succesfully");

  const { userInfo, updateUserSocial } = useUser();
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitch, setTwitch] = useState("");
  const [youtube, setYoutube] = useState("");
  const [discord, setDiscord] = useState("");
  const [loading, setloading] = useState(false);

  const onUpdateUserDataHandler = () => {
    setloading(true);
    const updatedUserData = {
      facebook: facebook !== "" ? facebook : userInfo[0]?.data?.facebook,
      twitter: twitter !== "" ? twitter : userInfo[0]?.data?.twitter,
      instagram: instagram !== "" ? instagram : userInfo[0]?.data?.instagram,
      twitch: twitch !== "" ? twitch : userInfo[0]?.data?.twitch,
      youtube: youtube !== "" ? youtube : userInfo[0]?.data?.youtube,
      discord: discord !== "" ? discord : userInfo[0]?.data?.discord,
    };

    updateUserSocial(updatedUserData);
    notify();
    setloading(false);
  };

  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        <ProfileInfoSidebar />
        <div className="main-content-area">
          <div className="cryptoki-form" id="account-settings-form">
            <div className="form-section">
              <div className="user-db-title">Social Accounts</div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Facebook</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon" id="input-facebook-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#facebook-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="facebook-login"
                      onChange={(e) => {
                        setFacebook(e.target.value);
                      }}
                      defaultValue={userInfo[0]?.data?.facebook}
                      // defaultValue="dexterstark"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="name">Twitter</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitter-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="twitter-login"
                      // defaultValue="@dexterstark"
                      onChange={(e) => {
                        setTwitter(e.target.value);
                      }}
                      defaultValue={userInfo[0]?.data?.twitter}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Instagram</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#instagram-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="instagram-login"
                      onChange={(e) => {
                        setInstagram(e.target.value);
                      }}
                      defaultValue={userInfo[0]?.data?.instagram}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="name">Twitch</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitch-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="twitch-login"
                      onChange={(e) => {
                        setTwitch(e.target.value);
                      }}
                      defaultValue={userInfo[0]?.data?.twitch}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Youtube</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#youtube-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="youtube-login"
                      onChange={(e) => {
                        setYoutube(e.target.value);
                      }}
                      defaultValue={userInfo[0]?.data?.youtube}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="name">Discord</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#discord-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="discord-login"
                      onChange={(e) => {
                        setDiscord(e.target.value);
                      }}
                      defaultValue={userInfo[0]?.data?.discord}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                onUpdateUserDataHandler();
              }}
              className="btn btn-wide btn-dark tw-mt-3"
            >
              {loading ? "saving-------" : " Save Changes"}
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Layouts>
  );
};
export default AccountSettings;
