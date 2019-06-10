import React, { useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  touch-action: none;
`;

const SliderInner = styled.div``;

const Slides = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  ${props =>
    props.hasTransition &&
    `
    -webkit-transition: -webkit-transform 0.25s;
    transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
    transition: transform 0.25s, -webkit-transform 0.25s;
  `}
  ${props => `
    width: ${100 * props.children.length}%;
    transform: transformX(${-1 * props.index * (100 / props.children.length)}%);
  `}

  & > * {
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
`;

const ArrowsWrapper = styled.div`
  height: 0;
  left: 0;
  position: absolute;
  top: ${props =>
    !props.arrowsWidth
      ? "calc(50% - 25px)"
      : `calc(50% - ${props.arrowsWidth})`};
  width: 100%;
  z-index: 1;
  ${props =>
    !props.showNav &&
    `
    top: calc(50% - 20px);
    `}
  ${props =>
    props.arrowsPosition === "bottom" &&
    `
      position: relative;
      bottom: 15px;
    `}
`;

const Arrow = styled.button`
  background: none;
  border: none;
  height: 40px;
  opacity: 0.5;
  outline: none;
  position: absolute;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
  padding: 0px;
  cursor: pointer;
  width: ${props => props.arrowWidth || "25px"};
  height: auto;
  top: 0;
  img {
    width: 100%;
    height: 100%;
  }
  ${props =>
    props.direction === "left" &&
    `
    left: 10px;
  `}
  ${props =>
    props.direction === "right" &&
    `
    right: 10px;
  `}

  ${props =>
    props.children === false &&
    `
    width: 0;
    height: 0;
    border-style: solid;
    ${props.direction === "left" &&
      `
      border-width: 7.5px 15px 7.5px 0;
      border-color: transparent #000000 transparent transparent;
    `};
    ${props.direction === "right" &&
      `
      border-width: 7.5px 0 7.5px 15px;
      border-color: transparent transparent transparent #000000;
    `};
  `}
`;

const NavWrapper = styled.div`
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 10px;
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
`;

const NavButton = styled.button`
  background: none;
  border: 0;
  height: 20px;
  opacity: 0.5;
  outline: none;
  position: relative;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
  width: 20px;
  padding: 0;
  cursor: pointer;
  &:after {
    background: #345;
    border-radius: 50%;
    content: "";
    display: block;
    height: 6px;
    left: 7px;
    position: absolute;
    top: 7px;
    width: 6px;
  }
  ${props =>
    props.isLastIndex &&
    `
    opacity: 1;
    &:after{
      height: 12px;
      left: 4px;
      opacity: 1;
      top: 4px;
      width: 12px;
    }
  `}
`;

const initialState = {
  dragStart: 0,
  dragStartTime: new Date(),
  index: 0,
  lastIndex: 0,
  transition: false
};

const sliderReducer = (state, action) => {
  switch (action.type) {
    case "setInitialState":
      return {
        ...state,
        index: action.payload.index,
        lastIndex: action.payload.lastIndex
      };
    case "handleDragStart":
      return {
        ...state,
        dragStart: action.payload.dragStart,
        dragStartTime: new Date(),
        transition: false,
        slideWidth: action.payload.slideWidth
      };
    case "handleDragMove":
      return {
        ...state,
        index: action.payload.index
      };
    case "handleDragEnd":
      return {
        ...state,
        transition: true,
        dragStart: 0,
        index: action.payload.index,
        lastIndex: action.payload.lastIndex
      };
    case "goToSlide":
      return {
        ...state,
        transition: true,
        index: action.payload.index,
        lastIndex: action.payload.lastIndex
      };
    default:
      return state;
  }
};

const TSlider = props => {
  const sliderRef = useRef(null);
  const [state, dispatch] = useReducer(sliderReducer, initialState);
  useEffect(() => {
    const { selected } = props;

    dispatch({
      type: "setInitialState",
      payload: { index: selected, lastIndex: selected }
    });
  }, []);

  const getDragX = (event, isTouch) => {
    return isTouch ? event.touches[0].pageX : event.pageX;
  };
  const handleDragStart = (event, isTouch) => {
    const x = getDragX(event, isTouch);
    dispatch({
      type: "handleDragStart",
      payload: {
        dragStart: x,
        slideWidth: ReactDOM.findDOMNode(sliderRef.current).offsetWidth
      }
    });
  };

  const handleDragMove = (event, isTouch) => {
    const { dragStart, lastIndex, slideWidth } = state;

    const x = getDragX(event, isTouch);
    const offset = dragStart - x;
    const percentageOffset = offset / slideWidth;
    const newIndex = lastIndex + percentageOffset;
    const SCROLL_OFFSET_TO_STOP_SCROLL = 30;

    // Stop scrolling if you slide more than 30 pixels
    if (Math.abs(offset) > SCROLL_OFFSET_TO_STOP_SCROLL) {
      event.stopPropagation();
      event.preventDefault();
    }
    dispatch({ type: "handleDragMove", payload: { index: newIndex } });
  };

  const handleDragEnd = () => {
    const { children } = props;
    const { dragStartTime, index, lastIndex } = state;

    const timeElapsed = new Date().getTime() - dragStartTime.getTime();
    const offset = lastIndex - index;
    const velocity = Math.round((offset / timeElapsed) * 10000);

    let newIndex = Math.round(index);

    if (Math.abs(velocity) > 5) {
      newIndex = velocity < 0 ? lastIndex + 1 : lastIndex - 1;
    }

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= children.length) {
      newIndex = children.length - 1;
    }
    dispatch({
      type: "handleDragEnd",
      payload: {
        index: newIndex,
        lastIndex: newIndex
      }
    });
  };

  const goToSlide = (index, event) => {
    const { children, loop } = props;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (index < 0) {
      index = loop ? children.length - 1 : 0;
    } else if (index >= children.length) {
      index = loop ? 0 : children.length - 1;
    }

    dispatch({
      type: "goToSlide",
      payload: { index: index, lastIndex: index }
    });
  };

  const renderNav = () => {
    const { children } = props;
    const { lastIndex } = state;

    const nav = children.map((slide, i) => {
      return (
        <NavButton
          isLastIndex={i === lastIndex}
          key={i}
          onClick={event => goToSlide(i, event)}
        />
      );
    });

    return <NavWrapper>{nav}</NavWrapper>;
  };

  const renderArrows = (
    leftArrow = null,
    rightArrow = null,
    arrowsPosition = "center"
  ) => {
    const { children, loop, showNav, arrowsWidth } = props;
    const { lastIndex } = state;

    return (
      <ArrowsWrapper
        arrowsPosition={arrowsPosition}
        arrowsWidth={arrowsWidth}
        showNav={showNav}
      >
        {loop || lastIndex > 0 ? (
          <Arrow
            direction="left"
            arrowWidth={arrowsWidth}
            onClick={event => goToSlide(lastIndex - 1, event)}
          >
            {leftArrow !== null && <img src={leftArrow} alt="left arrow" />}
          </Arrow>
        ) : null}
        {loop || lastIndex < children.length - 1 ? (
          <Arrow
            direction="right"
            arrowWidth={arrowsWidth}
            onClick={event => goToSlide(lastIndex + 1, event)}
          >
            {rightArrow !== null && <img src={rightArrow} alt="right arrow" />}
          </Arrow>
        ) : null}
      </ArrowsWrapper>
    );
  };
  const {
    children,
    showArrows,
    leftArrow,
    rightArrow,
    showNav,
    arrowsPosition
  } = props;

  const { index, transition } = state;

  const slidesStyles = {
    width: `${100 * children.length}%`,
    transform: `translateX(${-1 * index * (100 / children.length)}%)`
  };

  return (
    <Root>
      <SliderWrapper className={props.className} ref={sliderRef}>
        {showNav ? renderNav() : null}

        <SliderInner
          onTouchStart={event => handleDragStart(event, true)}
          onTouchMove={event => handleDragMove(event, true)}
          onTouchEnd={() => handleDragEnd(true)}
        >
          <Slides hasTransition={transition} index={index} style={slidesStyles}>
            {children}
          </Slides>
        </SliderInner>
      </SliderWrapper>
      {showArrows ? renderArrows(leftArrow, rightArrow, arrowsPosition) : null}
    </Root>
  );
};

TSlider.defaultProps = {
  loop: false,
  selected: 0,
  showArrows: true,
  showNav: true
};

export default TSlider;
