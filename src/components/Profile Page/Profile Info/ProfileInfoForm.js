import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";
import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const ProfileInfoForm = () => {
  const notify = () => toast.success("Users Information updated succesfully");
  const { updateUser, userInfo } = useUser();
  const [isLoadingUrl, setIsloadingUrl] = useState(false);
  const [isCoverLoading, setIsCoverLoaidng] = useState(false);
  const [urlReady, setUrlReady] = useState(false);
  const [url, setUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [coverReady, setCoverReady] = useState(false);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    console.log(e);
    handleUpload(file, type);
  };

  const handleUpload = async (file, type) => {
    console.log(type);
    if (file) {
      type == "avatar" ? setIsloadingUrl(true) : setIsCoverLoaidng(true);
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENjNEYzZTkxZUVBNmFFRGRBMTA1RmE3QjZDZjA0NzJFQjUxMDdjMGMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM1NjI0MDYyNzksIm5hbWUiOiJ2aWRpc3BhcmsifQ.4FBhhTMnQ3hY-P-ccuX_jKf-6ml4q6gLG9xIr0a-8Xk"; // Replace with your actual Web3.Storage API token
      const fileName = file.name;
      const client = new Web3Storage({ token });
      const cid = await client.put([file], { name: fileName });
      console.log(
        "Clickable link",
        `https://${cid}.ipfs.dweb.link/${fileName}`
      );
      if (type === "avatar") {
        setUrlReady(true);
        setUrl(`https://${cid}.ipfs.dweb.link/${fileName}`);
        setIsloadingUrl(false);
      } else if (type === "cover") {
        setCoverReady(true);
        setCoverUrl(`https://${cid}.ipfs.dweb.link/${fileName}`);
        setIsCoverLoaidng(false);
      }
    } else {
      console.log("No file selected");
    }
  };

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [marketPrice, setMarketPrice] = useState("");
  const [prevbrands, setPrevbrands] = useState("");
  const [marketBio, setMarketBio] = useState("");

  const onUpdateUserDataHandler = () => {
    const updatedUserData = {
      username: username !== "" ? username : userInfo[0]?.data?.username,
      email: email !== "" ? email : userInfo[0]?.data?.email,
      fullname: fullname !== "" ? fullname : userInfo[0]?.data?.fullname,
      bio: bio !== "" ? bio : userInfo[0]?.data?.bio,
      contact: contact !== "" ? contact : userInfo[0]?.data?.contact,
      url: url !== "" ? url : userInfo[0]?.data?.url,
      cover: coverUrl !== "" ? coverUrl : userInfo[0]?.data?.avatarCover,
      marketPrice:
        marketPrice !== "" ? marketPrice : userInfo[0]?.data?.marketPrice,
      prevbrands:
        prevbrands !== "" ? prevbrands : userInfo[0]?.data?.prevBrands,
      marketBio: marketBio !== "" ? marketBio : userInfo[0]?.data?.marketBio,
    };

    updateUser(updatedUserData);
    notify();
  };

  return (
    <div className="cryptoki-form" id="personal-info-form">
      <div className="user-db-title">Personal Info</div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            defaultValue={userInfo[0]?.data?.fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            defaultValue={userInfo[0]?.data?.username}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone"> contact</label>
          <input
            type="number"
            id="phone"
            defaultValue={parseInt(userInfo[0]?.data?.contact)}
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="form-field">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue={userInfo[0]?.data?.email}
          />
        </div>
      </div>

      <div className="form-field ">
        <label htmlFor="message">Bio</label>
        <textarea
          id="message"
          name="message"
          className="comment-form message"
          cols={30}
          rows={10}
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
          data-val="\S"
          data-val-msg="* Please, type a message."
          data-val-msg-id="textareaMessage"
          required=""
          defaultValue={userInfo[0]?.data?.bio}
        />
        <span className="input_error-message" id="textareaMessage" />
      </div>
      <div className="user-db-title tw-pt-3">Monetization(Market Place)</div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="name">Market Bio</label>
          <input
            type="text"
            id="name"
            defaultValue={userInfo[0]?.data?.marketBio}
            onChange={(e) => {
              setMarketBio(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="username">Market Price / hour</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setMarketPrice(e.target.value);
            }}
            defaultValue={userInfo[0]?.data?.marketPrice}
          />
        </div>
        <div className="form-field">
          <label htmlFor="username">Previous Brand(s) worked with</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setPrevbrands(e.target.value);
            }}
            defaultValue={userInfo[0]?.data?.prevBrands}
          />
        </div>
      </div>

      <div className="upload-photo-box">
        <div className="user-db-title tw-mt-2">Avatar and Cover</div>
        <input
          type="file"
          id="fileInput"
          className="tw-hidden"
          onChange={(e) => handleFileChange(e, "avatar")}
        />
        {isLoadingUrl ? (
          <div
            class="tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="tw-!absolute tw!-m-px tw!h-px tw!w-px tw!overflow-hidden tw!whitespace-nowrap tw!border-0 tw!p-0 tw![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          <label htmlFor="fileInput">
            <div className="user-avatar">
              <img
                src={`${
                  urlReady
                    ? url
                    : userInfo[0]?.data?.avatarUrl?.length > 1
                    ? userInfo[0]?.data?.avatarUrl
                    : "https://i.ibb.co/0C0Dkz1/placeholder-image-person-jpg.jpg"
                } `}
                alt=""
              />
            </div>
          </label>
        )}

        <input
          type="file"
          id="fileInput2"
          className="tw-hidden"
          onChange={(e) => handleFileChange(e, "cover")}
        />

        {isCoverLoading ? (
          <div
            class="tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="tw-!absolute tw!-m-px tw!h-px tw!w-px tw!overflow-hidden tw!whitespace-nowrap tw!border-0 tw!p-0 tw![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          <label htmlFor="fileInput2">
            <div className="user-cover-image">
              <img
                src={`${
                  coverReady
                    ? coverUrl
                    : userInfo[0]?.data?.avatarCover?.length > 1
                    ? userInfo[0]?.data?.avatarCover
                    : "img/content/profile/profile-cover-1.png"
                } `}
                alt=""
              />
            </div>
          </label>
        )}
        {/* <div className="user-cover-image">
          <img src="img/content/profile/profile-cover-1.png" alt="" />
        </div> */}
        <div className="upload-notice">
          Images must be .png or .jpg format. Min size 100x100px (avatar) and
          1920x320px (cover)
        </div>
      </div>
      <button
        onClick={() => {
          onUpdateUserDataHandler();
        }}
        className="btn btn-wide btn-dark tw-mt-3"
      >
        Save Changes
      </button>
      <ToastContainer />
    </div>
  );
};

export default ProfileInfoForm;
