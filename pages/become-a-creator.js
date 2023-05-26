import React from "react";
import BecomeACreatorForm from "../src/components/Become a Creator/BecomeACreatorForm";
import BecomeACreatorHero from "../src/components/Become a Creator/BecomeACreatorHero";
import BecomeACreatorInfo from "../src/components/Become a Creator/BecomeACreatorInfo";
import Layouts from "../src/layouts/Layouts";

const BecomeACreator = () => {
  return (
    <Layouts>
      <div>
        {/* / Become A Creator Hero */}
        <BecomeACreatorHero />
        {/* / Become A Creator Hero */}
        {/* / Become A Creator Info */}
        <BecomeACreatorInfo />
        {/* / Become A Creator Info */}
        {/* / Become A Creator Form */}
        <BecomeACreatorForm />
        {/* / Become A Creator Form */}
      </div>
    </Layouts>
  );
};
export default BecomeACreator;
