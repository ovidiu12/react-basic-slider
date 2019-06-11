import React from "react";
import "./example.css";
import TSlider from "./lib/index";
import LeftArrow from "./left-arrow.svg";
import RightArrow from "./right-arrow.svg";

const CustomStyling = () => {
  const slidesContainerStyles = {};
  const mainContainerStyles = {
    background: "#e9e9e9",
    borderRadius: "10px",
    padding: "30px",
    ">p": {
      padding: "10px"
    }
  };
  const navigationContainerStyles = {};
  const navigationButtonsStyles = {
    background: "#ccc",
    borderRadius: "1px",
    margin: "0 5px"
  };
  const arrowsContainerStyles = {};
  const leftArrowStyles = {
    background: "grey"
  };
  const rightArrowStyles = {
    background: "grey"
  };
  return (
    <div className="container">
      <TSlider
        customStyles={{
          mainContainer: mainContainerStyles,
          slidesContainer: slidesContainerStyles,
          navigationContainer: navigationContainerStyles,
          navigationButtons: navigationButtonsStyles,
          arrowsContainer: arrowsContainerStyles,
          leftArrow: leftArrowStyles,
          rightArrow: rightArrowStyles
        }}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        arrowsPosition="bottom"
        loop
      >
        <div style={{ background: "Aquamarine" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
            dicta ut aliquam dolor recusandae, dolore facilis quo. Numquam
            quibusdam aperiam nostrum, minus laborum odio provident laboriosam
            voluptatibus veritatis doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
            dicta ut aliquam dolor recusandae, dolore facilis quo. Numquam
            quibusdam aperiam nostrum, minus laborum odio provident laboriosam
            voluptatibus veritatis doloribus.
          </p>
        </div>
        <div style={{ background: "Salmon" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
            dicta ut aliquam dolor recusandae, dolore facilis quo. Numquam
            quibusdam aperiam nostrum, minus laborum odio provident laboriosam
            voluptatibus veritatis doloribus.
          </p>
        </div>
        <div style={{ background: "BlueViolet" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repellendus odit, asperiores.
        </div>
        <div
          style={{
            background: "MediumSlateBlue",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559762705-2123aa9b467f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
          }}
        />
        <div style={{ background: "DeepSkyBlue" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
          veritatis maiores debitis nostrum deleniti, quo adipisci impedit qui
          possimus illum mollitia eos earum voluptatem non aspernatur?
          Consectetur exercitationem eos vitae?
        </div>
      </TSlider>
    </div>
  );
};

export default CustomStyling;
