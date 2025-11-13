"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WOWReplacement = void 0;
var _animations = require("./animations");
/**
 * Replaces WOW.js classes with framer-motion animations
 * Usage: Replace className="wow fadeInUp" with <WOWReplacement animation="fadeInUp">
 */
var WOWReplacement = exports.WOWReplacement = function WOWReplacement(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 0 : _ref$delay,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 'fadeInUp' : _ref$animation;
  // Remove wow classes from className
  var cleanClassName = className.replace(/\bwow\b/g, '').replace(/\bfadeInUp\b/g, '').replace(/\bfadeInLeft\b/g, '').replace(/\bfadeInRight\b/g, '').replace(/\bfadeIn\b/g, '').trim();
  var delayInSeconds = delay / 1000; // Convert ms to seconds

  switch (animation) {
    case 'fadeInLeft':
      return /*#__PURE__*/React.createElement(_animations.FadeInLeft, {
        delay: delayInSeconds,
        className: cleanClassName
      }, children);
    case 'fadeInRight':
      return /*#__PURE__*/React.createElement(_animations.FadeInRight, {
        delay: delayInSeconds,
        className: cleanClassName
      }, children);
    case 'fadeIn':
      return /*#__PURE__*/React.createElement(_animations.FadeIn, {
        delay: delayInSeconds,
        className: cleanClassName
      }, children);
    case 'fadeInUp':
    default:
      return /*#__PURE__*/React.createElement(_animations.FadeInUp, {
        delay: delayInSeconds,
        className: cleanClassName
      }, children);
  }
};