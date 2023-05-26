import React from "react";
import ProfileInfoAvatar from "../src/components/Profile Page/Profile Info/ProfileInfoAvatar";
import ProfileInfoForm from "../src/components/Profile Page/Profile Info/ProfileInfoForm";
import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";
import Layouts from "../src/layouts/Layouts";
import { useAuth } from "../src/lib/auth";

const ProfileInfo = () => {
  useAuth();
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        {/* / Profile Info Sidebar */}
        <ProfileInfoSidebar />
        {/* / Profile Info Sidebar */}
        <div className="main-content-area">
          {/* <div className="page-title">
            <h2>
              <span className="gradient-text">Profile</span> Info
            </h2>
          </div> */}
          <div className="user-db-content-area">
            {/* / Profile Info Form */}
            <ProfileInfoForm />
            {/* / Profile Info Form */}

            {/* / Profile Info Avatar */}
            <ProfileInfoAvatar />
            {/* / Profile Info Avatar */}
          </div>
          {/* <button className="btn btn-wide btn-dark">Save Changes</button> */}
        </div>
      </div>
    </Layouts>
  );
};
export default ProfileInfo;
