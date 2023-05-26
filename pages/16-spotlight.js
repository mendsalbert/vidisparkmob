import React, { useEffect } from "react";
import ArtWorksOfTheWeek from "../src/components/Spotlight/ArtWorksOfTheWeek";
import CuratedCollections from "../src/components/Spotlight/CuratedCollections";
import Layouts from "../src/layouts/Layouts";
import { countdown } from "../src/utils";

const Spotlight = () => {
  useEffect(() => {
    countdown();
  }, []);

  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <ArtWorksOfTheWeek />
        <CuratedCollections />
      </div>
    </Layouts>
  );
};
export default Spotlight;
