"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcrs"] = self["webpackChunkcrs"] || []).push([["client_components_IrrigationProject_jsx"],{

/***/ "./client/components/IrrigationProject.jsx":
/*!*************************************************!*\
  !*** ./client/components/IrrigationProject.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n\n\n\nvar IrrigationImage = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Irrigation_642.webp\";\n\nvar Irrigation = function Irrigation(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", {\n    className: \"divBox\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n    variant: \"custom\",\n    src: IrrigationImage,\n    className: \"cardImage\",\n    alt: \"Hunter MP Rotor with 6 inch pop up-head for Irrigation\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n    className: \"cardBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"h1\", {\n    id: \"CardTitles\"\n  }, \"Irrigation\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Text, null, \"Irrigation system installs, repairs or upgrades, our team can bring quality water control to your property.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/irrigation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"button\", {\n    className: \"cardButton\"\n  }, \"Irrigation Services\"), ' ')));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Irrigation);\n\n//# sourceURL=webpack://crs/./client/components/IrrigationProject.jsx?");

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

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nconst CardImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n({\n  bsPrefix,\n  className,\n  variant,\n  as: Component = 'img',\n  ...props\n}, ref) => {\n  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'card-img');\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(variant ? `${prefix}-${variant}` : prefix, className),\n    ...props\n  });\n});\nCardImg.displayName = 'CardImg';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImg);\n\n//# sourceURL=webpack://crs/./node_modules/react-bootstrap/esm/CardImg.js?");

/***/ })

}]);