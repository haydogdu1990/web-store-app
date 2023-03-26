import React from "react";
import image1 from "../../images/stock/photo-1414694762283-acccc27bca85.jpg";
import image2 from "../../images/stock/photo-1609621838510-5ad474b7d25d.jpg";
import image3 from "../../images/stock/photo-1625726411847-8cbb60cc71e6.jpg";
import image4 from "../../images/stock/photo-1665553365602-b2fb8e5d1707.jpg";

import Carousel from "nuka-carousel";
import style from "./style.module.css";

const ImageSlider = () => {
  return (
    <div className={style.image}>
      {/* https://github.com/FormidableLabs/nuka-carousel */}
      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={true}
        cellSpacing={0}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "white",
          },
        }}
      >
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </Carousel>
    </div>
  );
};

export default ImageSlider;
