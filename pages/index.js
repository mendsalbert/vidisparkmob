import React from "react";
import { connect } from "react-redux";
import HeroSlider from "../src/components/Home/HeroSlider";
import HomeFeaturedCreators from "../src/components/Home/HomeFeaturedCreators";
import HomeFeaturedItems from "../src/components/Home/HomeFeaturedItems";
import HomeLatestNews from "../src/components/Home/HomeLatestNews";
import HomeNewestItems from "../src/components/Home/HomeNewestItems";
import HomeTopCreators from "../src/components/Home/HomeTopCreators";
import Layouts from "../src/layouts/Layouts";

const Index = ({ data }) => {
  return (
    <Layouts>
      <div className="primary-content-area bottom-padding-70">
        <HeroSlider />
        <HomeFeaturedItems data={data} />
        <HomeTopCreators />
        <HomeNewestItems data={data} />
      </div>
    </Layouts>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.nfts,
});

export default connect(mapStateToProps, {})(Index);
