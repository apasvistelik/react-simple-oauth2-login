"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PopupWindow = _interopRequireDefault(require("./PopupWindow"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var responseTypeLocationKeys = {
  code: 'search',
  token: 'hash'
};
var responseTypeDataKeys = {
  code: 'code',
  token: 'access_token'
};

var OAuth2Login = /*#__PURE__*/function (_Component) {
  _inherits(OAuth2Login, _Component);

  var _super = _createSuper(OAuth2Login);

  function OAuth2Login(props) {
    var _this;

    _classCallCheck(this, OAuth2Login);

    _this = _super.call(this, props);
    _this.onBtnClick = _this.onBtnClick.bind(_assertThisInitialized(_this));
    _this.onRequest = _this.onRequest.bind(_assertThisInitialized(_this));
    _this.onSuccess = _this.onSuccess.bind(_assertThisInitialized(_this));
    _this.onFailure = _this.onFailure.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OAuth2Login, [{
    key: "onBtnClick",
    value: function onBtnClick() {
      var _this$props = this.props,
          buttonText = _this$props.buttonText,
          authorizationUrl = _this$props.authorizationUrl,
          clientId = _this$props.clientId,
          extra = _this$props.extra,
          scope = _this$props.scope,
          redirectUri = _this$props.redirectUri,
          state = _this$props.state,
          responseType = _this$props.responseType,
          popupWidth = _this$props.popupWidth,
          popupHeight = _this$props.popupHeight,
          isCrossOrigin = _this$props.isCrossOrigin;

      var payload = _objectSpread({
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        response_type: responseType
      }, extra || {});

      if (state) {
        payload.state = state;
      }

      var search = (0, _utils.toQuery)(payload);
      var width = popupWidth;
      var height = popupHeight;
      var left = window.screenX + (window.outerWidth - width) / 2;
      var top = window.screenY + (window.outerHeight - height) / 2.5;
      var locationKey = responseTypeLocationKeys[responseType];

      var popup = _PopupWindow["default"].open(buttonText, "".concat(authorizationUrl, "?").concat(search), {
        height: height,
        width: width,
        top: top,
        left: left
      }, {
        locationKey: locationKey,
        isCrossOrigin: isCrossOrigin
      });

      this.popup = popup;
      this.onRequest();
      popup.then(this.onSuccess)["catch"](this.onFailure);
    }
  }, {
    key: "onRequest",
    value: function onRequest() {
      var onRequest = this.props.onRequest;
      onRequest();
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      var _this$props2 = this.props,
          responseType = _this$props2.responseType,
          onSuccess = _this$props2.onSuccess,
          isCrossOrigin = _this$props2.isCrossOrigin;
      var responseKey = responseTypeDataKeys[responseType]; // Cross origin requests will already handle this, let's just return the data

      if (!isCrossOrigin && !data[responseKey]) {
        console.error('received data', data);
        return this.onFailure(new Error("'".concat(responseKey, "' not found in received data")));
      }

      return onSuccess(data);
    }
  }, {
    key: "onFailure",
    value: function onFailure(error) {
      var onFailure = this.props.onFailure;
      onFailure(error);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          className = _this$props3.className,
          buttonText = _this$props3.buttonText,
          children = _this$props3.children,
          render = _this$props3.render;

      if (render) {
        return render({
          className: className,
          buttonText: buttonText,
          children: children,
          onClick: this.onBtnClick
        });
      }

      var attrs = {
        onClick: this.onBtnClick
      };

      if (id) {
        attrs.id = id;
      }

      if (className) {
        attrs.className = className;
      } // eslint-disable-next-line react/jsx-props-no-spreading


      return /*#__PURE__*/_react["default"].createElement("button", _extends({
        type: "button"
      }, attrs), children || buttonText);
    }
  }]);

  return OAuth2Login;
}(_react.Component);

OAuth2Login.defaultProps = {
  id: undefined,
  buttonText: 'Login',
  scope: '',
  state: '',
  className: '',
  children: null,
  popupWidth: 680,
  popupHeight: 680,
  render: null,
  isCrossOrigin: false,
  onRequest: function onRequest() {}
};
OAuth2Login.propTypes = {
  id: _propTypes["default"].string,
  authorizationUrl: _propTypes["default"].string.isRequired,
  clientId: _propTypes["default"].string.isRequired,
  redirectUri: _propTypes["default"].string.isRequired,
  responseType: _propTypes["default"].oneOf(['code', 'token']).isRequired,
  onSuccess: _propTypes["default"].func.isRequired,
  onFailure: _propTypes["default"].func.isRequired,
  buttonText: _propTypes["default"].string,
  children: _propTypes["default"].node,
  popupWidth: _propTypes["default"].number,
  popupHeight: _propTypes["default"].number,
  className: _propTypes["default"].string,
  render: _propTypes["default"].func,
  isCrossOrigin: _propTypes["default"].bool,
  onRequest: _propTypes["default"].func,
  scope: _propTypes["default"].string,
  state: _propTypes["default"].string
};
var _default = OAuth2Login;
exports["default"] = _default;