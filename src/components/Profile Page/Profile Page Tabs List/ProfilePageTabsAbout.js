const ProfilePageTabsAbout = ({ Tab }) => {
  return (
    <Tab.Pane eventKey={"tab7"} id="tab7" className="tab">
      <div className="about-author-wrapper">
        <div className="author-bio">
          <div className="small-title">Full Bio</div>
          <p>
            I am a self-taught digital artist who specializes in 3d art and
            motion graphics. Most of my works are inspired by nature and
            biomechanic themes.
          </p>
          <p>
            What does it mean? Biomechanics is the study of the structure,
            function and motion of the mechanical aspects of biological systems,
            at any level from whole organisms to organs, cells and cell
            organelles, using the methods of mechanics. Biomechanics is a branch
            of biophysics.
          </p>
        </div>
        <div className="author-details">
          <div className="small-title">Details</div>
          <ul className="details-list">
            <li>
              <svg className="crumina-icon bullet-icon">
                <use xlinkHref="#circle-icon" />
              </svg>
              <span className="detail-label">Joined</span>
              <span className="bold">January 5th, 2021</span>
            </li>
            <li>
              <svg className="crumina-icon bullet-icon">
                <use xlinkHref="#circle-icon" />
              </svg>
              <span className="detail-label">Formats</span>
              <span className="bold">Austin, TX - United States</span>
            </li>
            <li>
              <svg className="crumina-icon bullet-icon">
                <use xlinkHref="#circle-icon" />
              </svg>
              <span className="detail-label">Email</span>
              <span className="bold">
                <a href="mailto:dexstarkart@fakemail.com">
                  dexstarkart@fakemail.com
                </a>
              </span>
            </li>
            <li>
              <svg className="crumina-icon bullet-icon">
                <use xlinkHref="#circle-icon" />
              </svg>
              <span className="detail-label">Speciality</span>
              <span className="bold">Motion Graphics</span>
            </li>
          </ul>
        </div>
        <div className="author-social-networks">
          <div className="small-title">Social Media </div>
          <ul className="social-styled-list">
            <li>
              {" "}
              <a href="#">
                <span className="marker">
                  <svg className="crumina-icon">
                    <use xlinkHref="#link-icon" />
                  </svg>
                </span>
                www.dexstarkart.com
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <span className="marker">
                  <svg className="crumina-icon">
                    <use xlinkHref="#facebook-icon" />
                  </svg>
                </span>
                @dexstarkart
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <span className="marker">
                  <svg className="crumina-icon">
                    <use xlinkHref="#twitter-icon" />
                  </svg>
                </span>
                @dexstark_art
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <span className="marker">
                  <svg className="crumina-icon">
                    <use xlinkHref="#instagram-icon" />
                  </svg>
                </span>
                @dexstark
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <span className="marker">
                  <svg className="crumina-icon">
                    <use xlinkHref="#twitch-icon" />
                  </svg>
                </span>
                @dexstarkstreams
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Tab.Pane>
  );
};

export default ProfilePageTabsAbout;
