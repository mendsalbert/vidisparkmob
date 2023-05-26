import React from "react";
import Layouts from "../src/layouts/Layouts";

const Contact = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title">
          <h2>
            <span className="gradient-text">Get In Touch</span> With Us
          </h2>
        </div>
        <div className="grid-right-sidebar">
          <div className="main-content-area">
            {/* CONTACT FORM */}
            <form
              className="cryptoki-form validation"
              id="contact-form"
              method="POST"
              action="forms/submit-mail.php"
              noValidate=""
            >
              <input type="hidden" name="recaptcha_site_key" defaultValue="" />
              <input type="hidden" name="recaptcha_token" defaultValue="" />
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    data-val="\S"
                    data-val-msg="* This is a required field."
                    data-val-msg-id="textMessage"
                    required=""
                  />
                  <span className="input_error-message" id="textMessage" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    data-val="\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b"
                    data-val-msg="* Please enter a valid email address."
                    data-val-msg-id="emailMessage"
                    required=""
                  />
                  <span className="input_error-message" id="emailMessage" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <select
                  className="select-nice"
                  name="email_subject"
                  id="subject"
                  data-val="\S"
                  data-val-msg="* Please, select an option."
                  data-val-msg-id="selectMessage"
                  required=""
                >
                  <option value="">Select an option</option>
                  <option value="technical-support-general-help">
                    Techhnical Support and/or General Help
                  </option>
                  <option value="pre-sale">Pre-Sale Question</option>
                  <option value="partnership-request">
                    Partnership Request
                  </option>
                </select>
                <span className="input_error-message" id="selectMessage" />
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
                type="submit"
                className="btn btn-normal btn-dark"
                data-badge="inline"
              >
                Send
              </button>
            </form>
            {/* CONTACT FORM */}
          </div>
          <aside>
            <div className="widgets-list">
              <div className="widget widget-contact">
                <div className="widget-title h5">Business Inquiries</div>
                <div className="widget-body">
                  <div className="email">
                    <a href="mailto:business@cryptoki.com">
                      business@cryptoki.com
                    </a>
                  </div>
                  <div className="email-owner">
                    Marina Valentine - Business Manager
                  </div>
                </div>
              </div>
              <div className="widget widget-contact">
                <div className="widget-title h5">Partnership Inquiries</div>
                <div className="widget-body">
                  <div className="email">
                    <a href="mailto:partners@cryptoki.com">
                      partners@cryptoki.com
                    </a>
                  </div>
                  <div className="email-owner">
                    Anthony Rodgers - PR Manager
                  </div>
                </div>
              </div>
              <div className="widget widget-social">
                <div className="widget-title h5">Social Accounts</div>
                <div className="widget-body">
                  <ul className="social-styled-list">
                    <li>
                      <a href="#">
                        <span className="marker">
                          <svg className="crumina-icon">
                            <use xlinkHref="#facebook-icon" />
                          </svg>
                        </span>{" "}
                        @cryptoki
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="marker">
                          <svg className="crumina-icon">
                            <use xlinkHref="#twitter-icon" />
                          </svg>
                        </span>{" "}
                        @cryptoki{" "}
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="marker">
                          <svg className="crumina-icon">
                            <use xlinkHref="#instagram-icon" />
                          </svg>
                        </span>{" "}
                        @cryptoki_art{" "}
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="marker">
                          <svg className="crumina-icon">
                            <use xlinkHref="#twitch-icon" />
                          </svg>
                        </span>{" "}
                        @cryptokilive
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="marker">
                          <svg className="crumina-icon">
                            <use xlinkHref="#discord-icon" />
                          </svg>
                        </span>{" "}
                        @cryptoki
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layouts>
  );
};
export default Contact;
