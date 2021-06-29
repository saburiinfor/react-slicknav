/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_sass_slicknav_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const slicknavOptions = {
  core: ['label', 'duplicate', 'duration', 'easingOpen', 'easingClose', 'closedSymbol', 'openedSymbol', 'prependTo', 'appendTo', 'parentTag', 'closeOnClick', 'allowParentLinks', 'nestedParentLinks', 'showChildren', 'removeIds', 'removeClasses', 'removeStyles', 'brand', 'animations']
};
const slicknavEvents = {
  core: ['toggle', 'open', 'close']
};

class Slicknav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props, context) {
    super(props, context);

    this.toggle = () => this.$mobMenu.toggle();

    this.open = () => this.$mobMenu.open();

    this.close = () => this.$mobMenu.close();
  }

  componentDidMount() {
    let options = this.getOptions();
    this.init(options);
  }

  componentWillReceiveProps(nextProps) {
    this.destroy();
  }

  componentWillUnmount() {
    this.destroy();
  }

  componentDidUpdate(prevProps, prevState) {
    let options = this.getOptions();
    this.init(options);
  }

  init(options) {
    this.$node.slicknav(options);
    this.$mobMenu = this.$node;
  }

  destroy() {
    this.$mobMenu.close();
  }

  getOptions() {
    const options = {};
    let menuOptions = Object.values(slicknavOptions).reduce((a, v) => a.concat(v), []);
    menuOptions.forEach(val => {
      if (val in this.props.options) options[val] = this.props.options[val];
    });
    return options;
  }

  render() {
    const {
      options,
      events,
      children,
      ...props
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
      ref: item => this.$node = $(Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(item)),
      className: 'collapse navbar-collapse',
      id: 'navbarSupportedContent'
    }, props), children);
  }

}

Slicknav.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired)]).isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    duplicate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    duration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    easingOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    easingClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    closedSymbol: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    openedSymbol: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    prependTo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    appendTo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    parentTag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    closeOnClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    allowParentLinks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    nestedParentLinks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    showChildren: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    removeIds: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    removeClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    removeStyles: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    brand: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    animations: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })
};
Slicknav.defaultProps = {
  options: {
    label: 'MENU',
    duplicate: true,
    duration: 200,
    easingOpen: 'swing',
    easingClose: 'swing',
    closedSymbol: '&#9658;',
    openedSymbol: '&#9660;',
    prependTo: 'body',
    appendTo: '',
    parentTag: 'a',
    closeOnClick: false,
    allowParentLinks: false,
    nestedParentLinks: true,
    showChildren: false,
    removeIds: true,
    removeClasses: false,
    removeStyles: false,
    brand: '',
    animations: 'jquery'
  },
  events: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Slicknav);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slicknav_btn{position:relative;display:block;vertical-align:middle;float:right;padding:0.438em 0.625em 0.438em 0.625em;line-height:1.125em;cursor:pointer}.slicknav_btn .slicknav_icon-bar+.slicknav_icon-bar{margin-top:0.188em}.slicknav_menu{*zoom:1}.slicknav_menu .slicknav_menutxt{display:block;line-height:1.188em;float:left}.slicknav_menu .slicknav_icon{float:left;width:1.125em;height:0.875em;margin:0.188em 0 0 0.438em}.slicknav_menu .slicknav_icon:before{background:transparent;width:1.125em;height:0.875em;display:block;content:\"\";position:absolute}.slicknav_menu .slicknav_no-text{margin:0}.slicknav_menu .slicknav_icon-bar{display:block;width:1.125em;height:0.125em;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.25);-moz-box-shadow:0 1px 0 rgba(0,0,0,0.25);box-shadow:0 1px 0 rgba(0,0,0,0.25)}.slicknav_menu:before{content:\" \";display:table}.slicknav_menu:after{content:\" \";display:table;clear:both}.slicknav_nav{clear:both}.slicknav_nav ul{display:block}.slicknav_nav li{display:block}.slicknav_nav .slicknav_arrow{font-size:0.8em;margin:0 0 0 0.4em}.slicknav_nav .slicknav_item{cursor:pointer}.slicknav_nav .slicknav_item a{display:inline}.slicknav_nav .slicknav_row{display:block}.slicknav_nav a{display:block}.slicknav_nav .slicknav_parent-link a{display:inline}.slicknav_brand{float:left}.slicknav_menu{font-size:16px;box-sizing:border-box;background:#4c4c4c;padding:5px}.slicknav_menu *{box-sizing:border-box}.slicknav_menu .slicknav_menutxt{color:#fff;font-weight:bold;text-shadow:0 1px 3px #000}.slicknav_menu .slicknav_icon-bar{background-color:#fff}.slicknav_btn{margin:5px 5px 6px;text-decoration:none;text-shadow:0 1px 1px rgba(255,255,255,0.75);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#222}.slicknav_nav{color:#fff;margin:0;padding:0;font-size:0.875em;list-style:none;overflow:hidden}.slicknav_nav ul{list-style:none;overflow:hidden;padding:0;margin:0 0 0 20px}.slicknav_nav .slicknav_row{padding:5px 10px;margin:2px 5px}.slicknav_nav .slicknav_row:hover{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;background:#ccc;color:#fff}.slicknav_nav a{padding:5px 10px;margin:2px 5px;text-decoration:none;color:#fff}.slicknav_nav a:hover{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;background:#ccc;color:#222}.slicknav_nav .slicknav_txtnode{margin-left:15px}.slicknav_nav .slicknav_item a{padding:0;margin:0}.slicknav_nav .slicknav_parent-link a{padding:0;margin:0}.slicknav_brand{color:#fff;font-size:18px;line-height:30px;padding:7px 12px;height:44px}\n", ""]);
// Exports
/* unused harmony default export */ var _unused_webpack_default_export = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ ]);