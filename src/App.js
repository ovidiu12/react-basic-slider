import React from "react";
import Example from "./Example";
import CustomStyling from "./CustomStyling";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "grey" }}>Main example: </h1>
      <Example />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center", color: "grey" }}>
        Using Custom Styles:
      </h1>
      <CustomStyling />
    </>
  );
};

export default App;
