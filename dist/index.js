import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  border: 0;\n  height: 20px;\n  opacity: 0.5;\n  outline: none;\n  position: relative;\n  -webkit-transition: opacity 0.25s;\n  transition: opacity 0.25s;\n  width: 20px;\n  padding: 0;\n  cursor: pointer;\n  &:after {\n    background: #345;\n    border-radius: 50%;\n    content: \"\";\n    display: block;\n    height: 6px;\n    left: 7px;\n    position: absolute;\n    top: 7px;\n    width: 6px;\n  }\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  -webkit-align-content: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin-top: 10px;\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n  -ms-flex-order: 2;\n  order: 2;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  height: 40px;\n  opacity: 0.5;\n  outline: none;\n  position: absolute;\n  -webkit-transition: opacity 0.25s;\n  transition: opacity 0.25s;\n  padding: 0px;\n  cursor: pointer;\n  width: ", ";\n  height: auto;\n  top: 0;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n  ", "\n  ", "\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 0;\n  left: 0;\n  position: absolute;\n  top: ", ";\n  width: 100%;\n  z-index: 1;\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  ", "\n  ", "\n\n  & > * {\n    -webkit-flex-basis: 0;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  touch-action: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
var Root = styled.div(_templateObject());
var SliderWrapper = styled.div(_templateObject2());
var SliderInner = styled.div(_templateObject3());
var Slides = styled.div(_templateObject4(), function (props) {
  return props.hasTransition && "\n    -webkit-transition: -webkit-transform 0.25s;\n    transition: -webkit-transform 0.25s;\n    transition: transform 0.25s;\n    transition: transform 0.25s, -webkit-transform 0.25s;\n  ";
}, function (props) {
  return "\n    width: ".concat(100 * props.children.length, "%;\n    transform: transformX(").concat(-1 * props.index * (100 / props.children.length), "%);\n  ");
});
var ArrowsWrapper = styled.div(_templateObject5(), function (props) {
  return !props.arrowsWidth ? "calc(50% - 25px)" : "calc(50% - ".concat(props.arrowsWidth, ")");
}, function (props) {
  return !props.showNav && "\n    top: calc(50% - 20px);\n    ";
}, function (props) {
  return props.arrowsPosition === "bottom" && "\n      position: relative;\n      bottom: 20px;\n    ";
});
var Arrow = styled.button(_templateObject6(), function (props) {
  return props.arrowWidth || "25px";
}, function (props) {
  return props.direction === "left" && "\n    left: 10px;\n  ";
}, function (props) {
  return props.direction === "right" && "\n    right: 10px;\n  ";
}, function (props) {
  return props.children === false && "\n    width: 0;\n    height: 0;\n    border-style: solid;\n    ".concat(props.direction === "left" && "\n      border-width: 7.5px 15px 7.5px 0;\n      border-color: transparent #000000 transparent transparent;\n    ", ";\n    ").concat(props.direction === "right" && "\n      border-width: 7.5px 0 7.5px 15px;\n      border-color: transparent transparent transparent #000000;\n    ", ";\n  ");
});
var NavWrapper = styled.div(_templateObject7());
var NavButton = styled.button(_templateObject8(), function (props) {
  return props.isLastIndex && "\n    opacity: 1;\n    &:after{\n      height: 12px;\n      left: 4px;\n      opacity: 1;\n      top: 4px;\n      width: 12px;\n    }\n  ";
});
var initialState = {
  dragStart: 0,
  dragStartTime: new Date(),
  index: 0,
  lastIndex: 0,
  transition: false
};

var sliderReducer = function sliderReducer(state, action) {
  switch (action.type) {
    case "setInitialState":
      return _objectSpread({}, state, {
        index: action.payload.index,
        lastIndex: action.payload.lastIndex
      });

    case "handleDragStart":
      return _objectSpread({}, state, {
        dragStart: action.payload.dragStart,
        dragStartTime: new Date(),
        transition: false,
        slideWidth: action.payload.slideWidth
      });

    case "handleDragMove":
      return _objectSpread({}, state, {
        index: action.payload.index
      });

    case "handleDragEnd":
      return _objectSpread({}, state, {
        transition: true,
        dragStart: 0,
        index: action.payload.index,
        lastIndex: action.payload.lastIndex
      });

    case "goToSlide":
      return _objectSpread({}, state, {
        transition: true,
        index: action.payload.index,
        lastIndex: action.payload.lastIndex
      });

    default:
      return state;
  }
};

var TSlider = function TSlider(props) {
  var sliderRef = useRef(null);

  var _useReducer = useReducer(sliderReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  useEffect(function () {
    var selected = props.selected;
    dispatch({
      type: "setInitialState",
      payload: {
        index: selected,
        lastIndex: selected
      }
    });
  }, []);

  var getDragX = function getDragX(event, isTouch) {
    return isTouch ? event.touches[0].pageX : event.pageX;
  };

  var handleDragStart = function handleDragStart(event, isTouch) {
    var x = getDragX(event, isTouch);
    dispatch({
      type: "handleDragStart",
      payload: {
        dragStart: x,
        slideWidth: ReactDOM.findDOMNode(sliderRef.current).offsetWidth
      }
    });
  };

  var handleDragMove = function handleDragMove(event, isTouch) {
    var dragStart = state.dragStart,
        lastIndex = state.lastIndex,
        slideWidth = state.slideWidth;
    var x = getDragX(event, isTouch);
    var offset = dragStart - x;
    var percentageOffset = offset / slideWidth;
    var newIndex = lastIndex + percentageOffset;
    var SCROLL_OFFSET_TO_STOP_SCROLL = 30; // Stop scrolling if you slide more than 30 pixels

    if (Math.abs(offset) > SCROLL_OFFSET_TO_STOP_SCROLL) {
      event.stopPropagation();
      event.preventDefault();
    }

    dispatch({
      type: "handleDragMove",
      payload: {
        index: newIndex
      }
    });
  };

  var handleDragEnd = function handleDragEnd() {
    var children = props.children;
    var dragStartTime = state.dragStartTime,
        index = state.index,
        lastIndex = state.lastIndex;
    var timeElapsed = new Date().getTime() - dragStartTime.getTime();
    var offset = lastIndex - index;
    var velocity = Math.round(offset / timeElapsed * 10000);
    var newIndex = Math.round(index);

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

  var goToSlide = function goToSlide(index, event) {
    var children = props.children,
        loop = props.loop;

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
      payload: {
        index: index,
        lastIndex: index
      }
    });
  };

  var renderNav = function renderNav() {
    var children = props.children,
        customStyles = props.customStyles;
    var lastIndex = state.lastIndex;
    var nav = children.map(function (slide, i) {
      return React.createElement(NavButton, {
        style: customStyles !== undefined && customStyles.navigationButtons ? _objectSpread({}, customStyles.navigationButtons) : {},
        isLastIndex: i === lastIndex,
        key: i,
        onClick: function onClick(event) {
          return goToSlide(i, event);
        }
      });
    });
    return React.createElement(NavWrapper, {
      style: customStyles !== undefined && customStyles.navigationContainer ? _objectSpread({}, customStyles.navigationContainer) : {}
    }, nav);
  };

  var renderArrows = function renderArrows() {
    var leftArrow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var rightArrow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var arrowsPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "center";
    var children = props.children,
        loop = props.loop,
        showNav = props.showNav,
        arrowsWidth = props.arrowsWidth,
        customStyles = props.customStyles;
    var lastIndex = state.lastIndex;
    return React.createElement(ArrowsWrapper, {
      style: customStyles !== undefined && customStyles.arrowsContainer ? _objectSpread({}, customStyles.arrowsContainer) : {},
      arrowsPosition: arrowsPosition,
      arrowsWidth: arrowsWidth,
      showNav: showNav
    }, loop || lastIndex > 0 ? React.createElement(Arrow, {
      style: customStyles !== undefined && customStyles.leftArrow ? _objectSpread({}, customStyles.leftArrow) : {},
      direction: "left",
      arrowWidth: arrowsWidth,
      onClick: function onClick(event) {
        return goToSlide(lastIndex - 1, event);
      }
    }, leftArrow !== null && React.createElement("img", {
      src: leftArrow,
      alt: "left arrow"
    })) : null, loop || lastIndex < children.length - 1 ? React.createElement(Arrow, {
      style: customStyles !== undefined && customStyles.rightArrow ? _objectSpread({}, customStyles.rightArrow) : {},
      direction: "right",
      arrowWidth: arrowsWidth,
      onClick: function onClick(event) {
        return goToSlide(lastIndex + 1, event);
      }
    }, rightArrow !== null && React.createElement("img", {
      src: rightArrow,
      alt: "right arrow"
    })) : null);
  };

  var children = props.children,
      showArrows = props.showArrows,
      leftArrow = props.leftArrow,
      rightArrow = props.rightArrow,
      showNav = props.showNav,
      arrowsPosition = props.arrowsPosition,
      customStyles = props.customStyles;
  var index = state.index,
      transition = state.transition;
  var slidesStyles = {
    width: "".concat(100 * children.length, "%"),
    transform: "translateX(".concat(-1 * index * (100 / children.length), "%)")
  };
  var customSlidesStyles;

  if (customStyles !== undefined && customStyles.slidesContainer) {
    customSlidesStyles = _objectSpread({}, slidesStyles, customStyles.slidesContainer);
  }

  return React.createElement(Root, {
    style: customStyles !== undefined && customStyles.mainContainer ? _objectSpread({}, customStyles.mainContainer) : {},
    className: props.className
  }, React.createElement(SliderWrapper, {
    ref: sliderRef
  }, showNav ? renderNav() : null, React.createElement(SliderInner, {
    onTouchStart: function onTouchStart(event) {
      return handleDragStart(event, true);
    },
    onTouchMove: function onTouchMove(event) {
      return handleDragMove(event, true);
    },
    onTouchEnd: function onTouchEnd() {
      return handleDragEnd(true);
    }
  }, React.createElement(Slides, {
    hasTransition: transition,
    index: index,
    style: customSlidesStyles !== undefined ? customSlidesStyles : slidesStyles
  }, children))), showArrows ? renderArrows(leftArrow, rightArrow, arrowsPosition) : null);
};

TSlider.defaultProps = {
  loop: false,
  selected: 0,
  showArrows: true,
  showNav: true
};
export default TSlider;