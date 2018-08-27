vue-sharer
----------

[![npm](https://img.shields.io/npm/v/vue-sharer.svg?maxAge=2592000)](https://www.npmjs.org/package/vue-sharer)
[![Build Status](https://travis-ci.org/emoji-gen/vue-sharer.svg?branch=master)](https://travis-ci.org/emoji-gen/vue-sharer)
[![dependencies Status](https://david-dm.org/emoji-gen/vue-sharer/status.svg)](https://david-dm.org/emoji-gen/vue-sharer)
[![devDependencies Status](https://david-dm.org/emoji-gen/vue-sharer/dev-status.svg)](https://david-dm.org/emoji-gen/vue-sharer?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/emoji-gen/vue-sharer.svg)](https://greenkeeper.io/)

The Vue directive that bind to [Sharer.js](https://github.com/ellisonleao/sharer.js/)
<br>
<br>

## Requirements

- Vue 1.x or 2.x

## Installing

```
$ yarn add vue-sharer
```

or

```
$ npm install vue-sharer --save
```

## Getting Started

```js
import VueSharer from 'vue-sharer'

new Vue({
  directives: {
    sharer: VueSharer,
  },
})
```

```html
<button class="sharer button" data-sharer="twitter" data-title="title" v-sharer>
  Share on Twitter
</button>
```

## Example
First, try to build example projects.

```
$ git clone https://github.com/emoji-gen/vue-sharer.git
$ cd vue-sharer
$ npm install
$ npm run example
```

## License
MIT &copy; [Emoji Generator](https://emoji-gen.ninja)
