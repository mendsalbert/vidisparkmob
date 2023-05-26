import { useRouter } from "next/router";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import ProfilePageTabsAbout from "./Profile Page Tabs List/ProfilePageTabsAbout";
import ProfilePageTabsActivity from "./Profile Page Tabs List/ProfilePageTabsActivity";
import ProfilePageTabsCollected from "./Profile Page Tabs List/ProfilePageTabsCollected";
import ProfilePageTabsCreated from "./Profile Page Tabs List/ProfilePageTabsCreated";
import ProfilePageTabsFollow from "./Profile Page Tabs List/ProfilePageTabsFollow";
import ProfilePageTabsFollowing from "./Profile Page Tabs List/ProfilePageTabsFollowing";
import ProfilePageTabsLiked from "./Profile Page Tabs List/ProfilePageTabsLiked";
import ProfilePageTabsOnSale from "./Profile Page Tabs List/ProfilePageTabsOnSale";
import { useVideo } from "../../services/videos";

const ProfilePageTabs = ({ id }) => {
  const { videoResults } = useVideo();

  const filteredVideos = videoResults?.filter((item) => item.userId == id);
  const router = useRouter();
  let currentPath = router.pathname;
  currentPath = currentPath.includes("/09-profile-page-about")
    ? "tab7"
    : "tab1";
  const [activeToggle, setActiveToggle] = useState(currentPath);

  return (
    <div className="profile-page-container container">
      {/*  TABS BLOCK */}
      <div className="tabs-block swiper-container">
        <div className="swiper-nav">
          <div className="swiper-button-next">
            <svg className="crumina-icon next-button">
              <use xlinkHref="#arrow-right2-icon" />
            </svg>
          </div>
          <div className="swiper-button-prev">
            <svg className="crumina-icon prev-button">
              <use xlinkHref="#arrow-left2-icon" />
            </svg>
          </div>
        </div>
        <Tab.Container defaultActiveKey={activeToggle}>
          {/* TABS BUTTONS AND TABS SWIPER */}
          <Nav className="tabs-list swiper-wrapper">
            <Nav.Link as={"li"} eventKey={"tab1"} className="swiper-slide">
              <a href="#tab1">
                Content Created <span className="count"></span>
              </a>
            </Nav.Link>
          </Nav>
          {/* TABS BUTTONS AND TABS SWIPER */}
          <Tab.Content className="tabs-content-wrapper">
            {/*  CREATED */}
            <ProfilePageTabsCreated Tab={Tab} filteredVideos={filteredVideos} />
          </Tab.Content>
        </Tab.Container>
      </div>
      {/*  TABS BLOCK */}
    </div>
  );
};

export default ProfilePageTabs;
