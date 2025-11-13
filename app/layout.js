"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RootLayout;
exports.metadata = void 0;
var _react = _interopRequireDefault(require("react"));
var _fonts = require("@/lib/fonts");
require("swiper/css");
require("swiper/css/navigation");
require("./globals.css");
var _RootLayoutClient = _interopRequireDefault(require("@/app/RootLayoutClient"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var metadata = exports.metadata = {
  title: 'Hoteler - Hotel Booking React Next JS Template',
  description: 'Hotel Booking React Next JS Template',
  icons: {
    icon: '/images/favicon.png'
  }
};
function RootLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("html", {
    lang: "en",
    className: "".concat(_fonts.barlowCondensed.variable, " ").concat(_fonts.openSans.variable, " ").concat(_fonts.playfairDisplay.variable)
  }, /*#__PURE__*/_react.default.createElement("head", null, /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "/css/bootstrap.min.css"
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "/css/style-dark.css"
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "/css/style.css"
  })), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(_RootLayoutClient.default, null, children)));
}