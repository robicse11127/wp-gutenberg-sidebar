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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerPlugin
} = wp.plugins;
const {
  PluginSidebar,
  PluginSidebarMoreMenuItem
} = wp.editPost;
const {
  __
} = wp.i18n;
const {
  Button,
  PanelBody,
  TextControl,
  TextareaControl,
  SelectControl,
  RadioControl,
  ToggleControl,
  CheckboxControl,
  DateTimePicker
} = wp.components;
const {
  withSelect,
  withDispatch
} = wp.data;
const {
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];

let PluginMetaFields = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('POsts Meta Fields', 'wp-gutenberg-sidebar'),
    icon: "admin-post",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    value: props.text_field,
    label: __('Text meta field', 'wp-gutenberg-sidebar'),
    onChange: value => props.onTextFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
    value: props.textarea_field,
    label: __('Textarea meta field', 'wp-gutenberg-sidebar'),
    onChange: value => props.onTextAreaFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: __('Select meta field', 'wp-gutenberg-sidebar'),
    value: props.select_field,
    options: [{
      label: 'Big',
      value: '100%'
    }, {
      label: 'Medium',
      value: '50%'
    }, {
      label: 'Small',
      value: '25%'
    }],
    onChange: value => props.onSelectFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
    label: __('Radio meta field', 'wp-gutenberg-sidebar'),
    help: __('The type of the current user', 'wp-gutenberg-sidebar'),
    selected: props.radio_field,
    options: [{
      label: 'Author',
      value: 'a'
    }, {
      label: 'Editor',
      value: 'e'
    }],
    onChange: value => props.onRadioFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Toggle meta field', 'wp-gutenberg-sidebar'),
    help: props.toggle_field ? 'Has fixed background.' : 'No fixed background.',
    checked: props.toggle_field,
    onChange: value => props.onToggleFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
    label: __('Checkbox meta field', 'wp-gutenberg-sidebar'),
    help: __('Is the user a author or not?', 'wp-gutenberg-sidebar'),
    checked: props.checkbox_field,
    onChange: value => props.onCheckboxFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DateTimePicker, {
    currentDate: props.date_field,
    onChange: value => props.onDateFieldChange(value),
    is12Hour: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: media => props.onMediaFieldChange(media.url),
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: props.media_field,
    render: ({
      open
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: open
    }, "Open Media Library")
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: props.media_field
  })));
}; // Triggering withSelect.


PluginMetaFields = withSelect(select => {
  return {
    text_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_text_field'],
    textarea_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_textarea_field'],
    select_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_select_field'],
    radio_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_radio_field'],
    toggle_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_toggle_field'],
    checkbox_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_checkbox_field'],
    date_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_date_field'],
    media_field: select('core/editor').getEditedPostAttribute('meta')['_prefix_media_field']
  };
})(PluginMetaFields); // Triggering widthDispatch.

PluginMetaFields = withDispatch(dispatch => {
  return {
    onTextFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_text_field: value
        }
      });
    },
    onTextAreaFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_textarea_field: value
        }
      });
    },
    onSelectFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_select_field: value
        }
      });
    },
    onRadioFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_radio_field: value
        }
      });
    },
    onToggleFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_toggle_field: value
        }
      });
    },
    onCheckboxFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_checkbox_field: value
        }
      });
    },
    onDateFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_date_field: value
        }
      });
    },
    onMediaFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _prefix_media_field: value
        }
      });
    }
  };
})(PluginMetaFields);
registerPlugin('prefix-sidebar', {
  icon: 'smiley',
  render: () => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginSidebarMoreMenuItem, {
      target: "prefix-sidebar"
    }, __('Meta Options', 'wp-gutenberg-sidebar')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginSidebar, {
      name: "prefix-sidebar",
      title: __('Meta Options', 'wp-gutenberg-sidebar')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginMetaFields, null)));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map