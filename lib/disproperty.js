/**
 * Disproperty: Disposable properties.
 * Copyright (c) 2015 Vladislav Zarakovsky
 * MIT license https://github.com/vlazar/disproperty/blob/master/LICENSE
 */
(function(root) {

  function disproperty(obj, prop, value) {
    return Object.defineProperty(obj, prop, {
      configurable: true,

      get: function() {
        delete this[prop];
        return value;
      },

      set: function(newValue) {
        value = newValue;
      }
    });
  }

  // Exports: AMD, CommonJS, <script> tag
  if (typeof define === 'function' && define.amd) {
    define(function() { return disproperty });
  } else if (typeof exports === 'object') {
    module.exports = disproperty;
  } else {
    root.disproperty = disproperty;
  }

})(this);
