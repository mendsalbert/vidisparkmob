import React from "react";
import NotificationsFilter from "../src/components/Notifications/NotificationsFilter";
import NotificationsLists from "../src/components/Notifications/NotificationsLists";
import Layouts from "../src/layouts/Layouts";

const Notification = () => {
  return (
    <Layouts>
      <div className="primary-content-area container grid-aside-main-4-col content-padding">
        {/* / Notifications Filter*/}
        <NotificationsFilter />
        {/* / Notifications Filter*/}
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Notifications</span>
            </h2>
          </div>

          {/* / Notifications Lists */}
          <NotificationsLists />
          {/* / Notifications Lists */}
        </div>
      </div>
    </Layouts>
  );
};
export default Notification;
