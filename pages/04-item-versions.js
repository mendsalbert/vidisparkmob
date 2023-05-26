import React, { useEffect } from "react";
import ItemVersion01 from "../src/components/Explore/Item Version/ItemVersion01";
import ItemVersion02 from "../src/components/Explore/Item Version/ItemVersion02";
import ItemVersion03 from "../src/components/Explore/Item Version/ItemVersion03";
import ItemVersion04 from "../src/components/Explore/Item Version/ItemVersion04";
import Layouts from "../src/layouts/Layouts";
import { countdown } from "../src/utils";

const ItemVersions = () => {
  useEffect(() => {
    countdown();
  }, []);

  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        {/* FEATURED ITEMS V1 */}
        <ItemVersion01 />
        {/* FEATURED ITEMS V1 */}
        {/* FEATURED ITEMS V2 */}
        <ItemVersion02 />
        {/* FEATURED ITEMS V2 */}
        {/* FEATURED ITEMS V3 */}
        <ItemVersion03 />
        {/* FEATURED ITEMS V3 */}
        {/* FEATURED ITEMS V4 */}
        <ItemVersion04 />
        {/* FEATURED ITEMS V4 */}
      </div>
    </Layouts>
  );
};
export default ItemVersions;
