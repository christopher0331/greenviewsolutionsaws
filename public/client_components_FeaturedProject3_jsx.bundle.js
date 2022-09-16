"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcrs"] = self["webpackChunkcrs"] || []).push([["client_components_FeaturedProject3_jsx"],{

/***/ "./client/components/FeaturedProject3.jsx":
/*!************************************************!*\
  !*** ./client/components/FeaturedProject3.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar Feature3 = /*#__PURE__*/function (_Component) {\n  _inherits(Feature3, _Component);\n\n  var _super = _createSuper(Feature3);\n\n  function Feature3(props) {\n    var _this;\n\n    _classCallCheck(this, Feature3);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      primaryImage: \"\",\n      allImages: [],\n      imageIndex: 0\n    };\n    _this.changePrimary = _this.changePrimary.bind(_assertThisInitialized(_this));\n    _this.changeImagesRightArrow = _this.changeImagesRightArrow.bind(_assertThisInitialized(_this));\n    _this.changeImagesLeftArrow = _this.changeImagesLeftArrow.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Feature3, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState({\n        primaryImage: [\"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.12.21-Custom-Folder/FullSize/webp.webp\", ''],\n        allImages: [[\"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.12.21-Custom-Folder/Mobile/webp+(2).webp\", ''], [\"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.12.21-Custom-Folder/Mobile/webp+(3).webp\", ''], [\"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.12.21-Custom-Folder/Mobile/webp+(4).webp\", ''], [\"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.12.21-Custom-Folder/Mobile/webp+(5).webp\", ''], [\"https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.12.21-Custom-Folder/Mobile/webp.webp\", '']]\n      });\n    }\n  }, {\n    key: \"changePrimary\",\n    value: function changePrimary(target) {\n      this.setState({\n        primaryImage: target\n      });\n    }\n  }, {\n    key: \"changeImagesRightArrow\",\n    value: function changeImagesRightArrow() {\n      if (this.state.imageIndex === this.state.allImages.length - 1) {\n        this.setState({\n          imageIndex: 0,\n          primaryImage: this.state.allImages[this.state.imageIndex]\n        });\n      } else {\n        this.setState({\n          imageIndex: this.state.imageIndex + 1,\n          primaryImage: this.state.allImages[this.state.imageIndex]\n        });\n      }\n    }\n  }, {\n    key: \"changeImagesLeftArrow\",\n    value: function changeImagesLeftArrow() {\n      if (this.state.imageIndex === 0) {\n        this.setState({\n          imageIndex: 1,\n          primaryImage: this.state.allImages[this.state.imageIndex]\n        });\n      } else {\n        this.setState({\n          imageIndex: this.state.imageIndex - 1,\n          primaryImage: this.state.allImages[this.state.imageIndex]\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", {\n        className: \"imageSection\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"h3\", {\n        className: \"featuredTitle\"\n      }, \"Feature 3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", {\n        className: \"primaryImageBox\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"img\", {\n        className: \"primaryImage\",\n        src: this.state.primaryImage[0],\n        alt: this.state.primaryImage[1]\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n        onClick: function onClick() {\n          return _this2.changeImagesLeftArrow();\n        },\n        id: \"projectLeftArrow\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronCircleLeft,\n        color: \"black\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n        onClick: function onClick() {\n          return _this2.changeImagesRightArrow();\n        },\n        id: \"projectRightArrow\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronCircleRight,\n        color: \"black\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", {\n        className: \"secondaryCarousel\"\n      }, this.state.allImages.map(function (image) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"img\", {\n          onClick: function onClick() {\n            return _this2.changePrimary(image);\n          },\n          className: \"secondaryImages\",\n          src: image[0],\n          alt: image[1]\n        });\n      })))));\n    }\n  }]);\n\n  return Feature3;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feature3);\n\n//# sourceURL=webpack://crs/./client/components/FeaturedProject3.jsx?");

/***/ })

}]);