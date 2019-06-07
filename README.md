# React Basic Slider

A basic react slider/carousel component that uses React Hooks and styled-components and that has touch support.

![alt text](https://i.imgur.com/1GXU0BR.png)

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

### Props

| property   | type    | default        | purpose                                                                                                           |
| ---------- | ------- | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| loop       | boolean | true           | Let's you go through the carousel again after you reach the last slider and click the next arrow                  |
| selected   | number  | 0              | Slide to display                                                                                                  |
| showArrows | boolean | true           | Displays the next/prev arrows                                                                                     |
| showNav    | boolean | true           | Displays the bottom dotted navigation                                                                             |
| leftArrow  | string  | not displaying | Change the default left arrow to a custom one. Needs to be an URL that goes into the src attribute of an img tag  |
| rightArrow | string  | not displaying | Change the default right arrow to a custom one. Needs to be an URL that goes into the src attribute of an img tag |
