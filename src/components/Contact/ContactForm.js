import React from "react";
const ContactForm = () => {
  return (
    <div className="main-content-area">
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
            <option value="">Select an Option</option>
            <option value="technical-support-general-help">
              Techhnical Support and/or General Help
            </option>
            <option value="pre-sale">Pre-Sale Question</option>
            <option value="partnership-request">Partnership Request</option>
          </select>
          <span className="input_error-message" id="selectMessage" />
        </div>
        <div className="form-field comment-area">
          <label htmlFor="message">Your comment </label>
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
    </div>
  );
};

export default ContactForm;
