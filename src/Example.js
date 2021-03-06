import React, { useState } from "react";
import "./example.css";
import TSlider from "./lib/index";
import styled from "styled-components";
import LeftArrow from "./left-arrow.svg";
import RightArrow from "./right-arrow.svg";

//styling using styled-components
const CustomSlider = styled(TSlider)``;

const Example = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  return (
    <div className="container">
      <CustomSlider
        selected="1"
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        arrowsPosition="bottom"
        loop
        onChange={index => setCurrentIndex(index)}
      >
        <div
          style={{
            background: `${currentIndex == 0 ? "red" : "Aquamarine"}`
          }}
        >
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
      </CustomSlider>
    </div>
  );
};

export default Example;
