import React, { useState, useEffect } from "react";
import axios from "axios";
import NiceSelect from "../../NiceSelect";
import { useVideo } from "../../../services/videos";
import { ToastContainer, toast } from "react-toastify";
import { Web3Storage } from "web3.storage";

import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../../services/user";
const ProfileUploadAndPreview = () => {
  const notify = () => toast.success("Video Uploaded Successfully");
  const notify2 = () =>
    toast.success("Video uploaded, please fill in the remaining details.");
  const { userInfo } = useUser();

  const [uploadUrl, setUploadUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoUploading, setVideoUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState("");
  const [isStreamReady, setIsStreamReady] = useState(false);
  const [streamKey, setstreamKey] = useState("");
  const [streamServer, setstreamServer] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [isCoverLoading, setIsCoverLoaidng] = useState(false);
  const [coverUrl, setCoverUrl] = useState("");
  const [coverReady, setCoverReady] = useState(false);

  console.log(coverUrl);
  const { addVideo } = useVideo();
  const handleFileChange3 = async (event) => {
    setVideoUploading(true);
    setUploadStep("Uploading Video");
    const file = event.target.files[0];
    const uploadResponse = await fetch("https://api.thetavideoapi.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
      body: JSON.stringify({}),
    });
    const uploadResponseJson = await uploadResponse.json();
    const { presigned_url } = uploadResponseJson?.body?.uploads[0];
    setUploadUrl(presigned_url);
    setUploadStep("Analyzing Video");
    await fetch(presigned_url, {
      method: "PUT",
      headers: { "Content-Type": "application/octet-stream" },
      body: file,
    });
    const videoResponse = await fetch("https://api.thetavideoapi.com/video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
      body: JSON.stringify({
        source_upload_id: uploadResponseJson.body.uploads[0].id,
        playback_policy: "public",
        nft_collection: "0x5d0004fe2e0ec6d002678c7fa01026cabde9e793",
      }),
    });
    const videoResponseJson = await videoResponse.json();
    console.log(videoResponseJson.body.videos);
    let finished = false;
    setUploadStep("About to Complete ");

    while (!finished) {
      const { data } = await axios.get(
        `https://api.thetavideoapi.com/video/${videoResponseJson.body.videos[0].id}`,
        {
          headers: {
            "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
            "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          },
        }
      );
      console.log("data", data);
      if (
        data?.body?.videos?.[0]?.state === "success" &&
        data?.body?.videos?.[0]?.sub_state === "none"
      ) {
        finished = true;
        setVideoUrl(data.body.videos[0].player_uri);
        setUploadStep("Completed ");
        notify2();
        setIsComplete(true);
        setVideoUploading(false);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
      }
    }
  };

  //states

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");

  const categories = [
    { name: "Entertainment", icon: "🎭" },
    { name: "Music", icon: "🎵" },
    { name: "Sports", icon: "⚽" },
    { name: "Gaming", icon: "🎮" },
    { name: "Education", icon: "📚" },
    { name: "News", icon: "📰" },
    { name: "Comedy", icon: "😄" },
    { name: "Lifestyle", icon: "🌴" },
    { name: "Travel", icon: "✈️" },
    { name: "Science and Technology", icon: "🔬" },
    { name: "Health and Fitness", icon: "💪" },
    { name: "Fashion and Beauty", icon: "👗" },
    { name: "Food and Cooking", icon: "🍔" },
    { name: "Business and Finance", icon: "💼" },
    { name: "Art and Design", icon: "🎨" },
  ];

  const onChnage = (name, value) => {
    setCategory(value);
  };

  const onSubmitVideoHandler = () => {
    addVideo({ category, title, coverUrl, description, videoUrl });
    notify();
  };

  const goLive = async () => {
    const data = {
      name: "demo",
      resolutions: ["160p", "240p", "360p", "720p", "source"],
      source_resolution: "720p",
      fps: 60,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
    };

    try {
      const response = await axios.post(
        "https://api.thetavideoapi.com/stream",
        data,
        config
      );
      setIsStreamReady(true);
      setstreamKey(response?.data?.body?.backup_stream_key);
      setstreamServer(response?.data?.body?.backup_stream_server);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange2 = (e, type) => {
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

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(streamKey).then(
        function () {
          alert("API Key copied to clipboard!");
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
    }
  };
  return (
    <div className="artwork-upload-box">
      <div className="user-db-title">Upload</div>
      <input
        type="file"
        id="fileInput2"
        className="tw-hidden"
        onChange={handleFileChange3}
      />

      <div className="upload-container">
        <div className="artwork-upload">
          <label htmlFor="fileInput2">
            <div className="label">Upload File</div>
            <div className="">
              <div className="upload-box">
                <svg className="crumina-icon">
                  <use xlinkHref="#upload-icon" />
                </svg>
                <div className="upload-notice">
                  {" "}
                  Max 120MB, PNG, JPEG, MP3, MP4
                </div>
                {videoUploading ? (
                  <>
                    <div
                      class="tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span class="tw-!absolute tw!-m-px tw!h-px tw!w-px tw!overflow-hidden tw!whitespace-nowrap tw!border-0 tw!p-0 tw![clip:rect(0,0,0,0)]"></span>
                    </div>
                    <p className="upload-notice">{uploadStep}</p>
                  </>
                ) : (
                  <button className="btn btn-normal btn-dark browse-btn">
                    Browse File
                  </button>
                )}
              </div>
            </div>
          </label>
        </div>

        <div className="artwork-upload">
          <div className="label">Go Live</div>
          <div className="upload-box">
            <div className="upload-notice">
              {" "}
              {!isStreamReady ? "Start a live stream" : ""}
            </div>
            <button
              onClick={goLive}
              className="tw-bg-red-600 tw-rounded-full tw-px-3 tw-py-2 tw-flex tw-flex-row tw-items-center tw-space-x-2"
            >
              <span className="tw-text-white">Go Live</span>
              <span class="tw-relative tw-flex tw-h-3 tw-w-3">
                <span class="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-gray-200 tw-opacity-75"></span>
                <span class="tw-relative tw-inline-flex tw-rounded-full tw-h-3 tw-w-3 tw-bg-gray-300"></span>
              </span>
            </button>
            {isStreamReady && (
              <>
                <div className="upload-notice tw-text-center">
                  {showKey && (
                    <div className="tw-flex tw-flex-row tw-space-x-2 tw-items-center">
                      Stream Key -{" "}
                      {streamKey && streamKey.substring(0, 5) + "..."}{" "}
                      <svg
                        onClick={copyToClipboard}
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-copy"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                      </svg>
                    </div>
                  )}
                  {/* <br></br>
                  <button onClick={() => setShowKey(!showKey)}>
                    {showKey ? " Hide API Key" : " Show API Key"}
                  </button> */}
                </div>
                <div className="upload-notice tw-px-3 tw-text-center">
                  Stream Server - {streamServer && streamServer}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div id="tab-1" className="tab active">
        <div className="tab-content">
          <form className="cryptoki-form" id="personal-info-form">
            <div className="form-title">Main Details</div>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="name">Video Title</label>
                <input
                  type="text"
                  id="name"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              {/* <div className="form-field">
                <label>Category</label>
                <NiceSelect
                  arr={categories.map((category) => ({
                    name: category.name,
                    value: category.name.toLowerCase().replace(/\s/g, "-"),
                  }))}
                  ChangeFilterData={(name, value) => onChnage(name, value)}
                  name={"Category"}
                />
              </div> */}
            </div>

            <div className="upload-photo-box">
              <label htmlFor="label">Upload Thumnail URL</label>
              <br />
              <br />
              <input
                type="file"
                id="fileInput3"
                className="tw-hidden"
                onChange={(e) => handleFileChange2(e, "cover")}
              />

              {isCoverLoading ? (
                <div
                  class="tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span class="tw-!absolute tw!-m-px tw!h-px tw!w-px tw!overflow-hidden tw!whitespace-nowrap tw!border-0 tw!p-0 tw![clip:rect(0,0,0,0)]"></span>
                </div>
              ) : (
                <label htmlFor="fileInput3">
                  <div className="user-cover-image tw-rounded-xl">
                    <img
                      className="tw-w-72 tw-h-72"
                      src={`${
                        coverReady
                          ? coverUrl
                          : "img/content/profile/profile-cover-1.png"
                      } `}
                      alt=""
                    />
                  </div>
                </label>
              )}
            </div>
            <br />
            <div className="form-field comment-area">
              <label>Description</label>
              <textarea
                id="message"
                cols={30}
                rows={10}
                className=""
                spellCheck="false"
                defaultValue={""}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            {/* <p>Linces and linces type</p>
            <p>Audience</p>
            <p>Public or private</p> */}
            <button
              type="button"
              onClick={() => {
                onSubmitVideoHandler();
              }}
              className="btn btn-wide btn-dark"
            >
              Create Item
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfileUploadAndPreview;
