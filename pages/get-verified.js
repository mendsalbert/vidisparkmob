import React from "react";
import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";
import Layouts from "../src/layouts/Layouts";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../src/lib/auth";
const GetVerfied = () => {
  useAuth();
  const notify = () => toast.success("Request Submitted");

  return (
    <Layouts>
      <ToastContainer />

      <div className="primary-content-area container content-padding grid-left-sidebar">
        {/* / Profile Info Sidebar */}
        <ProfileInfoSidebar />
        {/* / Profile Info Sidebar */}
        <div className="main-content-area">
          <div className="form-description">
            <div className="form-title">Submit Verification Request</div>
            <div className="description">
              Please complete the following form with all your information,
              links and a message about why you wanna get verified. If your
              application is approved, you’ll receive a confirmation email in
              your inbox within 2-5 bussiness days.
            </div>
          </div>
          <div
            className="cryptoki-form validation"
            id="get-verified-form"
            method="POST"
            action="forms/submit-mail.php"
            noValidate=""
          >
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  data-val="\S"
                  data-val-msg="* This is a required field."
                  data-val-msg-id="nameMessage"
                  required=""
                />
                <span className="input_error-message" id="nameMessage" />
              </div>
              <div className="form-field">
                <label htmlFor="username">Userame</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  data-val="\S"
                  data-val-msg="* This is a required field."
                  data-val-msg-id="usernameMessage"
                  required=""
                />
                <span className="input_error-message" id="usernameMessage" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  data-val="\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b"
                  data-val-msg="* Please enter a valid email address."
                  data-val-msg-id="emailMessage"
                  required=""
                />
                <span className="input_error-message" id="emailMessage" />
              </div>
              <div className="form-field">
                <label htmlFor="soc_account">Verified Social Account</label>
                <input
                  type="text"
                  id="soc_account"
                  name="soc_account"
                  data-val="\S"
                  data-val-msg="* This is a required field."
                  data-val-msg-id="socialMessage"
                  required=""
                />
                <span className="input_error-message" id="socialMessage" />
              </div>
            </div>
            <div className="form-field comment-area">
              <label htmlFor="message">Your comment</label>
              <textarea
                id="message"
                name="message"
                className="comment-form message"
                cols={30}
                rows={10}
                data-val="\S"
                data-val-msg="* Please, type a message."
                data-val-msg-id="textareaMessage"
                required=""
                defaultValue={""}
              />
              <span className="input_error-message" id="textareaMessage" />
            </div>
            <button
              className="btn btn-normal btn-dark waves-effect waves-button waves-float waves-light"
              type="submit"
              onClick={notify}
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default GetVerfied;
