import Link from "next/link";
import React from "react";
import { useUser } from "../../../services/user";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
const ProfileInfoSidebar = () => {
  const { userInfo, logout } = useUser();

  console.log(userInfo);
  return (
    <aside>
      <div className="user-db-menu">
        <div className="user-db-header">
          {/* <div className="user-db-cover-image profile-cover-image" /> */}
          <div className="tw-rounded-2xl">
            <img src={userInfo[0]?.data?.avatarCover} alt="" />
          </div>
          <div className="user-header-user-profile">
            <div className="avatar box-64">
              {" "}
              <Link href={`/profile-page/${userInfo[0]?.id}`}>
                <a>
                  <img src={userInfo[0]?.data?.avatarUrl} alt="avatar" />
                  {/* <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span> */}
                </a>
              </Link>{" "}
            </div>
            <div className="title">
              {" "}
              <Link href={`/profile-page/${userInfo[0]?.id}`}>
                <a>{userInfo[0]?.data?.fullname}</a>
              </Link>{" "}
            </div>
            <div className="item-meta">
              <span className="gradient-text">
                @{userInfo[0]?.data?.username}
              </span>
            </div>
          </div>
        </div>
        <div className="user-db-body">
          <ul className="profile-menu">
            <li className="account">
              {" "}
              <Link href="/vidis-ai">
                <a className="tw-flex tw-bg-blue-500 tw-rounded-full tw-ml-5 tw-mb-2 tw-flex-row tw-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                  VidisAI{" "}
                </a>
              </Link>{" "}
            </li>
            <li className="profile">
              {" "}
              <Link href="/profile-info">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#user-icon" />
                  </svg>
                  Profile Info
                </a>
              </Link>{" "}
            </li>
            <li className="account">
              {" "}
              <Link href="/29-account-settings">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#settings-icon" />
                  </svg>
                  Account Settings{" "}
                </a>
              </Link>{" "}
            </li>

            <li className="artwork">
              {" "}
              <Link href="/upload-artwork">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#picture-icon" />
                  </svg>
                  Create Artwork
                </a>
              </Link>{" "}
            </li>
            <li className="artwork">
              {" "}
              <Link href="/dashboard">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <Squares2X2Icon />
                  Dashbaord
                </a>
              </Link>{" "}
            </li>

            <li className="verification">
              {" "}
              <Link href="/get-verified">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#circle-checked-icon" />
                  </svg>
                  Get Verified
                </a>
              </Link>{" "}
            </li>
            <li className="logout" onClick={logout}>
              <a
                onClick={logout}
                className="tw-flex tw-flex-row tw-items-center"
              >
                <svg onClick={logout} className="crumina-icon">
                  <use xlinkHref="#logout-icon" />
                </svg>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ProfileInfoSidebar;
