webpackHotUpdate(4,{

/***/ "./containers/ChatContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MessageList_js__ = __webpack_require__("./components/MessageList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MessageInput_js__ = __webpack_require__("./components/MessageInput.js");
var _jsxFileName = "/Users/climbrick/Desktop/reactApp/containers/ChatContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ChatContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChatContainer, _React$Component);

  function ChatContainer(props) {
    var _this;

    _classCallCheck(this, ChatContainer);

    _this = _possibleConstructorReturn(this, (ChatContainer.__proto__ || Object.getPrototypeOf(ChatContainer)).call(this, props));
    _this.state = {
      messages: {}
    };
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChatContainer, [{
    key: "onSubmit",
    value: function onSubmit(data) {
      // data is ab object that contains message and timestamp
      // of user submitted message in MessageInput. Here is where the
      // state should be updated by adding new messages to state and not
      // erare previous state/messages.
      this.setState({
        messages: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MessageList_js__["a" /* default */], {
        messages: this.state.messages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MessageInput_js__["a" /* default */], {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }]);

  return ChatContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatContainer);

/***/ })

})
//# sourceMappingURL=4.f31ebaaaba25afb7b6bd.hot-update.js.map