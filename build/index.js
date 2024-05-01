/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./src/icons.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    className,
    icon,
    size
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`is-${size}`]: size
    })
  });
  const colorProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseColorProps)(attributes);
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseBorderProps)(attributes);
  const spacingProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalGetSpacingClassesAndStyles)(attributes);

  // Dynamically determine which icon to use for each style.
  const LightIcon = _icons__WEBPACK_IMPORTED_MODULE_6__.Icons[icon]?.light || _icons__WEBPACK_IMPORTED_MODULE_6__.Icons.filled?.light;
  const DarkIcon = _icons__WEBPACK_IMPORTED_MODULE_6__.Icons[icon]?.dark || _icons__WEBPACK_IMPORTED_MODULE_6__.Icons.filled?.dark;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // Map class names to icon attribute.
    const styleToIcons = {
      'is-style-stroke': 'stroke',
      'is-style-circle': 'circle',
      'is-style-eye': 'eye'
    };

    // Find the first matching style and set the corresponding icon.
    const icon = Object.keys(styleToIcons).find(style => className?.includes(style));
    if (icon) {
      setAttributes({
        icon: styleToIcons[icon]
      });
    } else {
      // Reset or handle the attribute when no styles are matched.
      setAttributes({
        icon: undefined
      });
    }
  }, [className]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Size')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Size'),
    isShownByDefault: true,
    hasValue: () => !!size,
    onDeselect: () => setAttributes({
      size: undefined
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Invert', 'appearance-toggle-block'),
    hideLabelFromVision: true,
    value: size,
    onChange: value => {
      setAttributes({
        size: value
      });
    },
    isBlock: true,
    size: '__unstable-large',
    __nextHasNoMarginBottom: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
    value: "small",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Small', 'appearance-toggle-block')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
    value: "large",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Large', 'appearance-toggle-block')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wp-block-tabor-appearance-toggle__label",
    htmlFor: "theme-toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "wp-block-tabor-appearance-toggle__input",
    id: "theme-toggle",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Toggle appearance', 'appearance-toggle-block')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wp-block-tabor-appearance-toggle__track', colorProps.className, borderProps.className),
    style: {
      ...borderProps.style,
      ...colorProps.style,
      ...spacingProps.style
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-tabor-appearance-toggle__selector",
    style: {
      ...colorProps.style.text
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-tabor-appearance-toggle__icon wp-block-tabor-appearance-toggle__icon--light",
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: LightIcon,
    size: 16
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-tabor-appearance-toggle__icon wp-block-tabor-appearance-toggle__icon--dark",
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: DarkIcon,
    size: 16
  }))))))));
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icons: function() { return /* binding */ Icons; }
/* harmony export */ });
/* harmony import */ var _icons_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/index.js */ "./src/icons/index.js");

const Icons = {
  filled: {
    light: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.FilledLight,
    dark: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.FilledDark
  },
  stroke: {
    light: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.StrokeLight,
    dark: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.StrokeDark
  },
  circle: {
    light: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.CircleLight,
    dark: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.CircleDark
  },
  eye: {
    light: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.EyeLight,
    dark: _icons_index_js__WEBPACK_IMPORTED_MODULE_0__.EyeDark
  }
};

/***/ }),

/***/ "./src/icons/index.js":
/*!****************************!*\
  !*** ./src/icons/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircleDark: function() { return /* reexport safe */ _library_circle_dark__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   CircleLight: function() { return /* reexport safe */ _library_circle_light__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   EyeDark: function() { return /* reexport safe */ _library_eye_dark__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   EyeLight: function() { return /* reexport safe */ _library_eye_light__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   FilledDark: function() { return /* reexport safe */ _library_filled_dark__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   FilledLight: function() { return /* reexport safe */ _library_filled_light__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   StrokeDark: function() { return /* reexport safe */ _library_stroke_dark__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   StrokeLight: function() { return /* reexport safe */ _library_stroke_light__WEBPACK_IMPORTED_MODULE_2__["default"]; }
/* harmony export */ });
/* harmony import */ var _library_filled_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/filled-light */ "./src/icons/library/filled-light.js");
/* harmony import */ var _library_filled_dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/filled-dark */ "./src/icons/library/filled-dark.js");
/* harmony import */ var _library_stroke_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/stroke-light */ "./src/icons/library/stroke-light.js");
/* harmony import */ var _library_stroke_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/stroke-dark */ "./src/icons/library/stroke-dark.js");
/* harmony import */ var _library_circle_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library/circle-light */ "./src/icons/library/circle-light.js");
/* harmony import */ var _library_circle_dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library/circle-dark */ "./src/icons/library/circle-dark.js");
/* harmony import */ var _library_eye_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library/eye-light */ "./src/icons/library/eye-light.js");
/* harmony import */ var _library_eye_dark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library/eye-dark */ "./src/icons/library/eye-dark.js");









/***/ }),

/***/ "./src/icons/library/circle-dark.js":
/*!******************************************!*\
  !*** ./src/icons/library/circle-dark.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 4a8 8 0 1 0 0 16V4ZM2 12C2 6.477 6.477 2 12 2c.375 0 .745.02 1.11.061C18.11 2.614 22 6.852 22 12s-3.89 9.386-8.89 9.939c-.365.04-.735.061-1.11.061-5.523 0-10-4.477-10-10Z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/icons/library/circle-light.js":
/*!*******************************************!*\
  !*** ./src/icons/library/circle-light.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 4a8 8 0 1 0 0 16V4ZM2 12C2 6.477 6.477 2 12 2c.375 0 .745.02 1.11.061C18.11 2.614 22 6.852 22 12s-3.89 9.386-8.89 9.939c-.365.04-.735.061-1.11.061-5.523 0-10-4.477-10-10Z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/icons/library/eye-dark.js":
/*!***************************************!*\
  !*** ./src/icons/library/eye-dark.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  d: "M4.728 12.253a1 1 0 0 0-1.456 1.37c1.182 1.258 2.5 2.227 3.896 2.898l-1.024 1.694a1 1 0 0 0 1.712 1.034l1.214-2.01c.636.178 1.28.297 1.93.357V20a1 1 0 1 0 2 0v-2.404c.65-.06 1.294-.18 1.93-.356l1.214 2.01a1 1 0 1 0 1.712-1.035l-1.024-1.694c1.395-.671 2.714-1.64 3.896-2.898a1 1 0 1 0-1.457-1.37c-2.153 2.29-4.736 3.39-7.271 3.39s-5.118-1.1-7.272-3.39Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/icons/library/eye-light.js":
/*!****************************************!*\
  !*** ./src/icons/library/eye-light.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 6c-3.127 0-6.367 1.79-8.638 5.606a.77.77 0 0 0 0 .788C5.633 16.209 8.873 18 12 18s6.367-1.79 8.638-5.606a.77.77 0 0 0 0-.788C18.367 7.791 15.127 6 12 6Zm0-2c3.952 0 7.79 2.272 10.357 6.583a2.77 2.77 0 0 1 0 2.834C19.79 17.727 15.952 20 12 20c-3.952 0-7.79-2.272-10.357-6.583a2.77 2.77 0 0 1 0-2.834C4.21 6.273 8.048 4 12 4Zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/icons/library/filled-dark.js":
/*!******************************************!*\
  !*** ./src/icons/library/filled-dark.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  d: "M12.056 3.6a1 1 0 0 0-.908-1.564c-5.123.434-9.144 4.728-9.144 9.962 0 5.522 4.476 9.998 9.998 9.998 5.234 0 9.528-4.021 9.962-9.144a1 1 0 0 0-1.564-.908A6 6 0 0 1 12.055 3.6Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/icons/library/filled-light.js":
/*!*******************************************!*\
  !*** ./src/icons/library/filled-light.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  d: "M13 2a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V2Zm0 19a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Zm6.777-16.777a1 1 0 0 1 0 1.414l-.71.71a1 1 0 1 1-1.414-1.414l.71-.71a1 1 0 0 1 1.414 0ZM6.347 19.067a1 1 0 1 0-1.414-1.414l-.71.71a1 1 0 1 0 1.414 1.414l.71-.71ZM20 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM2 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H2Zm15.653 6.653a1 1 0 0 1 1.414 0l.71.71a1 1 0 0 1-1.414 1.414l-.71-.71a1 1 0 0 1 0-1.414ZM5.637 4.223a1 1 0 1 0-1.414 1.414l.71.71a1 1 0 0 0 1.414-1.414l-.71-.71Zm2.12 3.534a6 6 0 1 1 8.486 8.486 6 6 0 0 1-8.486-8.486Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/icons/library/stroke-dark.js":
/*!******************************************!*\
  !*** ./src/icons/library/stroke-dark.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12.097 2.53a1 1 0 0 1-.041 1.07 6 6 0 0 0 8.345 8.344 1 1 0 0 1 1.563.908c-.434 5.122-4.728 9.144-9.962 9.144-5.522 0-9.998-4.476-9.998-9.998 0-5.234 4.021-9.528 9.144-9.962a1 1 0 0 1 .949.494ZM9.424 4.424a7.998 7.998 0 1 0 10.152 10.152A8 8 0 0 1 9.424 4.424Z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/icons/library/stroke-light.js":
/*!*******************************************!*\
  !*** ./src/icons/library/stroke-light.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM4.223 4.223a1 1 0 0 1 1.414 0l.71.71a1 1 0 1 1-1.414 1.414l-.71-.71a1 1 0 0 1 0-1.414Zm15.554 0a1 1 0 0 1 0 1.414l-.71.71a1 1 0 0 1-1.414-1.414l.71-.71a1 1 0 0 1 1.414 0ZM9.172 9.172a4 4 0 1 0 5.656 5.656 4 4 0 0 0-5.656-5.656ZM7.757 7.757a6 6 0 1 1 8.486 8.486 6 6 0 0 1-8.486-8.486ZM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM6.347 17.653a1 1 0 0 1 0 1.414l-.71.71a1 1 0 0 1-1.414-1.414l.71-.71a1 1 0 0 1 1.414 0Zm11.306 0a1 1 0 0 1 1.414 0l.71.71a1 1 0 0 1-1.414 1.414l-.71-.71a1 1 0 0 1 0-1.414ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (svg);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/save.js");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * WordPress dependencies
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M12.056 5.25626C12.2319 5.00102 12.2448 4.6672 12.0891 4.39911C11.9335 4.13101 11.6372 3.9767 11.3283 4.00287C7.22296 4.35074 4 7.79206 4 11.987C4 16.4125 7.58755 20 12.013 20C16.208 20 19.6495 16.777 19.9971 12.6714C20.0233 12.3625 19.869 12.0663 19.6009 11.9106C19.3328 11.755 18.999 11.768 18.7437 11.9439C17.9695 12.4776 17.0318 12.79 16.0186 12.79C13.3629 12.79 11.2099 10.637 11.2099 7.98124C11.2099 6.96821 11.5223 6.03055 12.056 5.25626Z",
    fill: "currentColor"
  })),
  example: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/icons.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Save({
  attributes
}) {
  const {
    className,
    icon,
    size
  } = attributes;
  const colorProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalGetColorClassesAndStyles)(attributes);
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalGetBorderClassesAndStyles)(attributes);
  const spacingProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalGetSpacingClassesAndStyles)(attributes);

  // Dynamically determine which icon to use for each style.
  const LightIcon = _icons__WEBPACK_IMPORTED_MODULE_4__.Icons[icon]?.light || _icons__WEBPACK_IMPORTED_MODULE_4__.Icons.filled?.light;
  const DarkIcon = _icons__WEBPACK_IMPORTED_MODULE_4__.Icons[icon]?.dark || _icons__WEBPACK_IMPORTED_MODULE_4__.Icons.filled?.dark;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`is-${size}`]: size
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: classes
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wp-block-tabor-appearance-toggle__label",
    htmlFor: "theme-toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "wp-block-tabor-appearance-toggle__input",
    id: "theme-toggle",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle appearance')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-tabor-appearance-toggle__track', colorProps.className, borderProps.className),
    style: {
      ...borderProps.style,
      ...colorProps.style,
      ...spacingProps.style
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-tabor-appearance-toggle__selector",
    style: {
      ...colorProps.style
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-tabor-appearance-toggle__icon wp-block-tabor-appearance-toggle__icon--light",
    "aria-hidden": "true"
  }, LightIcon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-tabor-appearance-toggle__icon wp-block-tabor-appearance-toggle__icon--dark",
    "aria-hidden": "true"
  }, DarkIcon)))));
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"tabor/appearance-toggle","version":"0.1.0","title":"Appearance Toggle","category":"design","description":"Allow visitors to switch between light and dark appearances.","supports":{"color":{"link":false,"text":true,"__experimentalSkipSerialization":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalSkipSerialization":true,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}},"html":false,"multiple":false,"__experimentalSelector":".wp-block-tabor-appearance-toggle__track"},"attributes":{"icon":{"type":"string"},"size":{"type":"string","default":"small"}},"styles":[{"name":"filled","label":"Filled","isDefault":true},{"name":"stroke","label":"Stroke"},{"name":"circle","label":"Circle"},{"name":"eye","label":"Eye"}],"textdomain":"appearance-toggle","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktabor_appearance_toggle_block"] = self["webpackChunktabor_appearance_toggle_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map