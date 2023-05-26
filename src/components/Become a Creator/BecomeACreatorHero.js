import React from "react";
const BecomeACreatorHero = () => {
  return (
    <div className="become-creator-bc-box container-1300 section-padding-medium">
      <div className="bc-info">
        <div className="bc-heading">
          <div className="bc-heading-subtitle">JOIN OUR COMMUNITY!</div>
          <div className="bc-heading-title">
            Become a <span className="gradient-text">Creator</span>
          </div>
        </div>
        <div className="bc-description">
          Join thousands of other creators and start earning with your art,
          artworks, videos or art creations! The process takes only a few
          seconds, just fill the form and we’ll contact you
        </div>
        <div className="bc-button">
          <a className="btn btn-wide btn-dark" href="#application-form">
            Fill the Form
          </a>
        </div>
      </div>
      <div className="bc-image">
        <img src="img/content/creators/become-creator.png" alt="" />
      </div>
    </div>
  );
};

export default BecomeACreatorHero;
