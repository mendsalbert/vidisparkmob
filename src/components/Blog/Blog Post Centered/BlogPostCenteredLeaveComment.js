import React from "react";
const BlogPostCenteredLeaveComment = () => {
  return (
    <div className="leave-comment">
      <h3 className="content-heading">Leave a comment</h3>
      <form className="cryptoki-form" id="comment-form">
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <div className="form-field comment-area">
          <label htmlFor="message">Your comment </label>
          <textarea
            name="message"
            id="message"
            className="comment-form"
            cols={30}
            rows={10}
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-normal btn-dark">
          Post comment
        </button>
      </form>
    </div>
  );
};

export default BlogPostCenteredLeaveComment;
