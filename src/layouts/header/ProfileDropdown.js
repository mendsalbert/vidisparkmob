import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../useClickOutside";
import { useUser } from "../../services/user";

const ProfileDropdown = ({ address }) => {
  const [toggle, setToggle] = useState(false);
  const dayMood = useRef(true);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  useEffect(() => {
    let mood = localStorage.getItem("mood");
    moodChange(mood);
    dayMood.current = mood ? true : false;
    console.log(dayMood.current, mood);
  }, []);

  const moodChange = (dark) => {
    if (dark) {
      document.querySelector("body").classList.add("dark-mode");
      localStorage.setItem("mood", "dark-mood");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
      localStorage.removeItem("mood");
    }
  };

  const onClick = () => {
    dayMood.current = !dayMood.current;
    moodChange(dayMood.current);
  };

  const { userInfo, users } = useUser();
  let user = userInfo[0]?.data;

  return (
    <div
      className={`header-user-profile cryptoki-notif-bttn ${
        toggle ? "active" : ""
      }`}
      ref={domNode}
    >
      {/*user-meta*/}
      <div className="user-meta" onClick={() => setToggle(!toggle)}>
        <div className="user_name">{user?.fullname}</div>
        <div className="user_score">{address} VDPS</div>
      </div>
      {/*/user-meta*/}
      {/*user-avatar*/}
      <div
        className={`avatar box-42 ${toggle ? "hide" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <picture>
          <source type="image/avif" srcSet={users[0]?.data?.avatarUrl} />
          <img
            src={users[0]?.data?.avatarUrl}
            alt="avatar"
            loading="lazy"
            width={100}
            height={100}
          />
        </picture>
        <span className="verified">
          <svg className="crumina-icon">
            <use xlinkHref="#check-icon" />
          </svg>
        </span>
      </div>
      {/*/user-avatar*/}
      {/*close-icon*/}
      <div
        className={`closing-icon ${toggle ? "show" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <svg className="crumina-icon close-icon">
          <use xlinkHref="#cross-icon" />
        </svg>
      </div>
      {/*/close-icon*/}
      <div
        id="profile-dropdown"
        className={`cryptoki-notif-target ${toggle ? "active open" : ""}`}
      >
        <div className="profile-dropdown-header profile-cover-image" />
        <div className="profile-dropdown-body">
          <div className="profile-heading tw-flex">
            {/*user-avatar*/}
            <div className="profile-avatar avatar box-26">
              <img
                src={user?.avatarUrl}
                alt="avatar"
                loading="lazy"
                height={100}
                width={100}
              />
              <span className="verified">
                <svg className="crumina-icon">
                  <use xlinkHref="#check-icon" />
                </svg>
              </span>
            </div>
            {/*/user-avatar*/}
            <div className="profile-link">
              {" "}
              <Link href="upload-artwork">
                <a className="btn btn-small gradient-background">My Profile</a>
              </Link>{" "}
            </div>
          </div>
          {/*user-menu*/}
          <ul className="profile-menu">
            <li className="profile">
              {" "}
              <Link href="profile-info">
                <a className="tw-flex tw-items-center ">
                  <svg className="crumina-icon">
                    <use xlinkHref="#user-icon" />
                  </svg>
                  <span>Profile Info</span>
                </a>
              </Link>{" "}
            </li>
            <li className="account">
              {" "}
              <Link href="/29-account-settings">
                <a className="tw-flex tw-items-center ">
                  <svg className="crumina-icon">
                    <use xlinkHref="#settings-icon" />
                  </svg>
                  Account Settings
                </a>
              </Link>{" "}
            </li>

            <li className="artwork">
              {" "}
              <Link href="/upload-artwork">
                <a className="tw-flex tw-items-center ">
                  <svg className="crumina-icon">
                    <use xlinkHref="#picture-icon" />
                  </svg>
                  Create Artwork
                </a>
              </Link>{" "}
            </li>

            <li className="verification">
              {" "}
              <Link href="/31-get-verified">
                <a className="tw-flex tw-items-center ">
                  <svg className="crumina-icon">
                    <use xlinkHref="#circle-checked-icon" />
                  </svg>
                  Get Verified
                </a>
              </Link>{" "}
            </li>
          </ul>
          {/*/user-menu*/}
        </div>
        <div className="profile-dropdown-footer">
          {/*dark-mode-toggle*/}
          <div className="mode-toggle">
            <div className="mode-title tw-flex tw-items-center">
              <span>
                <svg className="crumina-icon">
                  <use xlinkHref="#moon-icon" />
                </svg>
              </span>
              Night-mode
            </div>
            <label className="toggle-control">
              <input
                type="checkbox"
                ref={dayMood}
                defaultChecked={dayMood.current}
                onClick={(e) => onClick(e)}
              />
              <span className="control" />
            </label>
          </div>
          {/*/dark-mode-toggle*/}
        </div>
      </div>
    </div>
  );
};
export default ProfileDropdown;
