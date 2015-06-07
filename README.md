# disproperty
[![npm version](https://img.shields.io/npm/v/disproperty.svg)](https://www.npmjs.com/package/disproperty)
[![Build Status](https://img.shields.io/travis/vlazar/disproperty.svg)](https://travis-ci.org/vlazar/disproperty)
[![Code Climate](https://img.shields.io/codeclimate/github/vlazar/disproperty.svg)](https://codeclimate.com/github/vlazar/disproperty)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/github/vlazar/disproperty.svg)](https://codeclimate.com/github/vlazar/disproperty/coverage)

Disposable properties.

> Define properties to be automatically removed after the first read.

## Usage

Require disproperty via AMD, CommonJS or &lt;script&gt; tag and have fun:

**Example**

```javascript
var obj = {};

disproperty(obj, 'sticker', 'JS');

obj.sticker; // 'JS'
obj.sticker; // undefined

disproperty(obj, 'sticker', 'JS');

obj.sticker = 'ES6';
obj.sticker; // 'ES6'
obj.sticker; // undefined
```
