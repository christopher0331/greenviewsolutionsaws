"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcrs"] = self["webpackChunkcrs"] || []).push([["client_components_Projects_jsx"],{

/***/ "./client/components/Projects.jsx":
/*!****************************************!*\
  !*** ./client/components/Projects.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Modal.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Projects = function Projects() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  var handleClose = function handleClose() {\n    return setShow(false);\n  };\n\n  var handleShow = function handleShow() {\n    return setShow(true);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      show2 = _useState4[0],\n      setShow2 = _useState4[1];\n\n  var handleClose2 = function handleClose2() {\n    return setShow2(false);\n  };\n\n  var handleShow2 = function handleShow2() {\n    return setShow2(true);\n  };\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      show3 = _useState6[0],\n      setShow3 = _useState6[1];\n\n  var handleClose3 = function handleClose3() {\n    return setShow3(false);\n  };\n\n  var handleShow3 = function handleShow3() {\n    return setShow3(true);\n  };\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      show4 = _useState8[0],\n      setShow4 = _useState8[1];\n\n  var handleClose4 = function handleClose4() {\n    return setShow4(false);\n  };\n\n  var handleShow4 = function handleShow4() {\n    return setShow4(true);\n  };\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState10 = _slicedToArray(_useState9, 2),\n      show5 = _useState10[0],\n      setShow5 = _useState10[1];\n\n  var handleClose5 = function handleClose5() {\n    return setShow5(false);\n  };\n\n  var handleShow5 = function handleShow5() {\n    return setShow5(true);\n  };\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState12 = _slicedToArray(_useState11, 2),\n      show6 = _useState12[0],\n      setShow6 = _useState12[1];\n\n  var handleClose6 = function handleClose6() {\n    return setShow6(false);\n  };\n\n  var handleShow6 = function handleShow6() {\n    return setShow6(true);\n  };\n\n  var FeaturedProject1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n    return __webpack_require__.e(/*! import() */ \"client_components_FeaturedProject1_jsx-_f2f81\").then(__webpack_require__.bind(__webpack_require__, /*! ./FeaturedProject1.jsx */ \"./client/components/FeaturedProject1.jsx\"));\n  });\n  var FeaturedProject2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n    return __webpack_require__.e(/*! import() */ \"client_components_FeaturedProject2_jsx-_a2001\").then(__webpack_require__.bind(__webpack_require__, /*! ./FeaturedProject2.jsx */ \"./client/components/FeaturedProject2.jsx\"));\n  });\n  var FeaturedProject3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n    return __webpack_require__.e(/*! import() */ \"client_components_FeaturedProject3_jsx-_fdd71\").then(__webpack_require__.bind(__webpack_require__, /*! ./FeaturedProject3.jsx */ \"./client/components/FeaturedProject3.jsx\"));\n  });\n  var FeaturedProject4 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n    return __webpack_require__.e(/*! import() */ \"client_components_FeaturedProject4_jsx-_cd9e1\").then(__webpack_require__.bind(__webpack_require__, /*! ./FeaturedProject4.jsx */ \"./client/components/FeaturedProject4.jsx\"));\n  });\n  var FeaturedProject5 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n    return __webpack_require__.e(/*! import() */ \"client_components_FeaturedProject5_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./FeaturedProject5.jsx */ \"./client/components/FeaturedProject5.jsx\"));\n  });\n  var FeaturedProject6 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n    return __webpack_require__.e(/*! import() */ \"client_components_FeaturedProject6_jsx-_5db41\").then(__webpack_require__.bind(__webpack_require__, /*! ./FeaturedProject6.jsx */ \"./client/components/FeaturedProject6.jsx\"));\n  });\n  var Residential = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/Mobile/4.14.21-6ftPickett_6.webp\";\n  var Residential2 = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/Mobile/4.23.21-HOA6FtPicket_6.webp\";\n  var ironFence = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/DecorativeIronFence_642_6.webp\";\n  var meshTop = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/CustomPickett_642.webp\";\n  var schoolProject = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Commercial_642.webp\";\n  var splitRail2 = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/RanchRail.webp\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      fontSize: '45px',\n      textShadow: 'black 2px 2px 2px',\n      padding: '8px 8px'\n    }\n  }, \"Featured Projects\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"projects\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n    variant: \"custom\",\n    src: ironFence,\n    className: \"projectImage\",\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n    className: \"projectBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, null, \"Wrought Iron Fence\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"custom\",\n    className: \"successButton\",\n    onClick: handleShow\n  }, \"View Project\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: show,\n    onHide: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturedProject1, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleClose,\n    className: \"projectButton\"\n  }, \"Close\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n    variant: \"custom\",\n    src: splitRail2,\n    className: \"projectImage\",\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n    className: \"projectBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, null, \"Ranch Rail Fence\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"custom\",\n    className: \"successButton\",\n    onClick: handleShow2\n  }, \"View Project\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: show2,\n    onHide: handleClose2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturedProject2, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleClose2\n  }, \"Close\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n    variant: \"custom\",\n    src: meshTop,\n    className: \"projectImage\",\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n    className: \"projectBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, null, \"Custom Residential\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"custom\",\n    className: \"successButton\",\n    onClick: handleShow3\n  }, \"View Project\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: show3,\n    onHide: handleClose3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturedProject3, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleClose3,\n    className: \"projectButton\"\n  }, \"Close\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"projects\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n    variant: \"custom\",\n    src: schoolProject,\n    className: \"projectImage\",\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n    className: \"projectBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, null, \"Commercial Chainlink Fence\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"custom\",\n    className: \"successButton\",\n    onClick: handleShow4\n  }, \"View Project\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: show4,\n    onHide: handleClose4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturedProject4, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleClose4\n  }, \"Close\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n    variant: \"custom\",\n    src: Residential,\n    className: \"projectImage\",\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n    className: \"projectBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, null, \"6ft Cedar Privacy Fence\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"custom\",\n    className: \"successButton\",\n    onClick: handleShow5\n  }, \"View Project\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: show5,\n    onHide: handleClose5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturedProject5, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleClose5\n  }, \"Close\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n    variant: \"custom\",\n    src: Residential2,\n    className: \"projectImage\",\n    alt: \"This is an alt text for residential privacy fencing\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n    className: \"projectBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, null, \"6ft Cedar Privacy Fence\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"custom\",\n    className: \"successButton\",\n    onClick: handleShow6\n  }, \"View Project\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: show6,\n    onHide: handleClose6,\n    className: \"modal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturedProject6, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleClose6\n  }, \"Close\"))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n//# sourceURL=webpack://crs/./client/components/Projects.jsx?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWithBsPrefix */ \"./node_modules/react-bootstrap/esm/createWithBsPrefix.js\");\n/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divWithClassName */ \"./node_modules/react-bootstrap/esm/divWithClassName.js\");\n/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardImg */ \"./node_modules/react-bootstrap/esm/CardImg.js\");\n/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardHeader */ \"./node_modules/react-bootstrap/esm/CardHeader.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\nconst DivStyledAsH5 = (0,_divWithClassName__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('h5');\nconst DivStyledAsH6 = (0,_divWithClassName__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('h6');\nconst CardBody = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('card-body');\nconst CardTitle = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('card-title', {\n  Component: DivStyledAsH5\n});\nconst CardSubtitle = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('card-subtitle', {\n  Component: DivStyledAsH6\n});\nconst CardLink = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('card-link', {\n  Component: 'a'\n});\nconst CardText = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('card-text', {\n  Component: 'p'\n});\nconst CardFooter = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('card-footer');\nconst CardImgOverlay = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('card-img-overlay');\nconst defaultProps = {\n  body: false\n};\nconst Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  bsPrefix,\n  className,\n  bg,\n  text,\n  border,\n  body,\n  children,\n  // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n  as: Component = 'div',\n  ...props\n}, ref) => {\n  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'card');\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ref: ref,\n    ...props,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),\n    children: body ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CardBody, {\n      children: children\n    }) : children\n  });\n});\nCard.displayName = 'Card';\nCard.defaultProps = defaultProps;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Card, {\n  Img: _CardImg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  Title: CardTitle,\n  Subtitle: CardSubtitle,\n  Body: CardBody,\n  Link: CardLink,\n  Text: CardText,\n  Header: _CardHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  Footer: CardFooter,\n  ImgOverlay: CardImgOverlay\n}));\n\n//# sourceURL=webpack://crs/./node_modules/react-bootstrap/esm/Card.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeader.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var _CardHeaderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardHeaderContext */ \"./node_modules/react-bootstrap/esm/CardHeaderContext.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\nconst CardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  bsPrefix,\n  className,\n  // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n  as: Component = 'div',\n  ...props\n}, ref) => {\n  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'card-header');\n  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({\n    cardHeaderBsPrefix: prefix\n  }), [prefix]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CardHeaderContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n    value: contextValue,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n      ref: ref,\n      ...props,\n      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix)\n    })\n  });\n});\nCardHeader.displayName = 'CardHeader';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHeader);\n\n//# sourceURL=webpack://crs/./node_modules/react-bootstrap/esm/CardHeader.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeaderContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeaderContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\ncontext.displayName = 'CardHeaderContext';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);\n\n//# sourceURL=webpack://crs/./node_modules/react-bootstrap/esm/CardHeaderContext.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nconst CardImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n({\n  bsPrefix,\n  className,\n  variant,\n  as: Component = 'img',\n  ...props\n}, ref) => {\n  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'card-img');\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(variant ? `${prefix}-${variant}` : prefix, className),\n    ...props\n  });\n});\nCardImg.displayName = 'CardImg';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImg);\n\n//# sourceURL=webpack://crs/./node_modules/react-bootstrap/esm/CardImg.js?");

/***/ })

}]);