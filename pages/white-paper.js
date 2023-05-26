import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  return (
    <Layouts>
      <embed
        src="/whitepaper.pdf"
        width="100%"
        height="800px"
        type="application/pdf"
      />
    </Layouts>
  );
};
export default Faq;
