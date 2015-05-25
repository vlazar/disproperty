# disproperty [![npm version](https://img.shields.io/npm/v/disproperty.svg)](https://www.npmjs.com/package/disproperty)

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
