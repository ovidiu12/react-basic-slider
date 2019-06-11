# React Basic Slider

A basic react slider/carousel component that uses React Hooks and styled-components and that has touch support.

![alt text](https://i.imgur.com/1GXU0BR.png)

DEMO -> https://lucid-easley-d4aea3.netlify.com/

### Instalation

```bash
npm install react-basic-slider
# or
yarn add react-basic-slider
```

### Usage

Simply import the component and add some children to it

```
import Slider from 'react-basic-slider';

...

return(
  <Slider>
     <div style={{ background: "Aquamarine" }}>
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
     <div
       style={{
         background: "MediumSlateBlue",
         backgroundImage:
           "url('https://images.unsplash.com/photo-1559762705-2123aa9b467f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
       }}
     />
  </Slider>
);
```

### Styling

The styling can be done using styled-components, by passing a custom className and style it directly through css or by using the ```customStyles``` prop.

#### Example using styled-components

```
import Slider from "react-basic-slider";

...

const CustomSlider = styled(Slider)`
  button{
    background: red;
  }
`;

...

return(
  <CustomSlider>
    <div style={{background: 'red'}}>a</div>
    <div style={{background: 'green'}}>b</div>
    <div style={{background: 'blue'}}>c</div>
  </CustomSlider>
);
```

#### Example using customStyles prop
```
import Slider from "react-basic-slider";

...

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

...

return(
  <CustomSlider 
    customStyles={{
      mainContainer: mainContainerStyles,
      slidesContainer: slidesContainerStyles,
      navigationContainer: navigationContainerStyles,
      navigationButtons: navigationButtonsStyles,
      arrowsContainer: arrowsContainerStyles,
      leftArrow: leftArrowStyles,
      rightArrow: rightArrowStyles
    }}>
    <div style={{background: 'red'}}>a</div>
    <div style={{background: 'green'}}>b</div>
    <div style={{background: 'blue'}}>c</div>
  </CustomSlider>
);
```

### Props

| property       | type    | default        | purpose                                                                                                           |
| -------------- | ------- | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| loop           | boolean | true           | Let's you go through the carousel again after you reach the last slider and click the next arrow                  |
| selected       | number  | 0              | Slide to display                                                                                                  |
| showArrows     | boolean | true           | Displays the next/prev arrows                                                                                     |
| showNav        | boolean | true           | Displays the bottom dotted navigation                                                                             |
| leftArrow      | string  | not displaying | Change the default left arrow to a custom one. Needs to be an URL that goes into the src attribute of an img tag  |
| rightArrow     | string  | not displaying | Change the default right arrow to a custom one. Needs to be an URL that goes into the src attribute of an img tag |
| arrowsPosition | string  | center         | Change the default arrow positioning. Can be center or bottom                                                     |
| customStyles | object  | not applied         | Change the default styling.                                                     |

### Note

If you're using Rollupjs and you're getting the following error or similar:

```
[!] Error: 'isValidElementType' is not exported by node_modules/react-is/index.js
https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
node_modules/styled-components/dist/styled-components.es.js (7:9)
```

You can fix it following the instruction here: https://github.com/styled-components/styled-components/issues/1654#issuecomment-441151140
