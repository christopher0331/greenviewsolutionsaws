"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcrs"] = self["webpackChunkcrs"] || []).push([["client_components_Header_jsx"],{

/***/ "./client/components/Header.jsx":
/*!**************************************!*\
  !*** ./client/components/Header.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.jsx */ \"./client/components/Menu.jsx\");\n\n\n\nvar Header = function Header(props) {\n  var Logo = \"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/FullSizedWebp/clearGVSLogo_300.webp\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"headerLogo\",\n    rel: \"preload\",\n    src: Logo,\n    alt: \"Greenview Solutions Logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    changePage: props.changePage\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://crs/./client/components/Header.jsx?");

/***/ }),

/***/ "./client/components/Menu.jsx":
/*!************************************!*\
  !*** ./client/components/Menu.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Menu = /*#__PURE__*/function (_Component) {\n  _inherits(Menu, _Component);\n\n  var _super = _createSuper(Menu);\n\n  function Menu() {\n    _classCallCheck(this, Menu);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Menu, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"InfoAndMenu\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"MenuInfo\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n        href: \"tel:303-358-8168\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n        className: \"MenuItem\",\n        id: \"phone\"\n      }, \"303.358.8168  |\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n        href: \"mailto:brandon@greenviewsolutions.net\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n        className: \"MenuItem\",\n        id: \"email\"\n      }, \"brandon@greenviewsolutions.net\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"socialIconBar\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n        href: \"https://www.facebook.com/GreenViewSolutions/\",\n        target: \"_blank\",\n        rel: \"noreferrer\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n        className: \"socialIcons\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFacebookF,\n        size: \"lg\",\n        color: \"white\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n        href: \"https://www.linkedin.com/company/greenview-solutions-llc/about/\",\n        target: \"_blank\",\n        rel: \"noreferrer\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n        className: \"socialIcons\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedin,\n        size: \"lg\",\n        color: \"white\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n        href: \"https://www.instagram.com/greenview_solutions_llc/?hl=en\",\n        target: \"_blank\",\n        rel: \"noreferrer\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n        className: \"socialIcons\",\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faInstagram,\n        size: \"lg\",\n        color: \"white\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: \"Menu\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: \"navbar-color\",\n        bg: \"\",\n        expand: \"lg\",\n        variant: \"dark\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Toggle, {\n        \"aria-controls\": \"basic-navbar-nav\",\n        \"class\": \"navbarClass\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Collapse, {\n        id: \"basic-navbar-nav\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"mr-auto\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        id: \"nav-link\",\n        to: \"/\"\n      }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        title: \"Services\",\n        id: \"basic-nav-dropdown\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n        className: \"ddItem\",\n        href: \"/wood-fences\"\n      }, \"Wood Fences\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n        className: \"ddItem\",\n        href: \"/chainlink-fences\"\n      }, \"Chain Link Fences\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n        className: \"ddItem\",\n        href: \"/wrought-iron-fences\"\n      }, \"Wrought Iron Fences\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n        className: \"ddItem\",\n        href: \"/commercial-fences\"\n      }, \"Commercial Fences\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n        className: \"ddItem\",\n        href: \"/custom-fences\"\n      }, \"Custom and Special Fences\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n        className: \"ddItem\",\n        href: \"/irrigation\"\n      }, \"Irrigation\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        id: \"nav-link\",\n        to: \"/about-us\"\n      }, \"About Us\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        id: \"nav-link\",\n        to: \"/contact-us\"\n      }, \"Contact Us\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        id: \"nav-link\",\n        to: \"/tools\"\n      }, \"Tools\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        id: \"nav-link\",\n        to: \"/portfolio\"\n      }, \" Portfolio \"))))));\n    }\n  }]);\n\n  return Menu;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://crs/./client/components/Menu.jsx?");

/***/ })

}]);