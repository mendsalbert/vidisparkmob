import React from "react";
const ProductV3Media = () => {
  return (
    <div className="product-media">
      <a
        className="expand-icon"
        data-fslightbox="gallery"
        href="img/content/product-img/product-2.jpg"
      >
        <svg className="crumina-icon">
          <use xlinkHref="#maximize-icon" />
        </svg>
      </a>
      <div className="product-img">
        <img src="img/content/product-img/product-2.jpg" alt="" />
      </div>
    </div>
  );
};

export default ProductV3Media;
