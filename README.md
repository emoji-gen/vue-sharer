vue-sharer
----------

[![npm](https://img.shields.io/npm/v/vue-sharer.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/vue-sharer)
[![Travis](https://img.shields.io/travis/emoji-gen/vue-sharer/master.svg?maxAge=2592000&style=flat-square&x)](https://travis-ci.org/emoji-gen/vue-sharer)
[![Dependency Status](https://img.shields.io/david/emoji-gen/vue-sharer.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/emoji-gen/vue-sharer)
[![devDependency Status](https://img.shields.io/david/dev/emoji-gen/vue-sharer.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/emoji-gen/vue-sharer?type=dev)

The Vue directive that bind to [Sharer.js](https://github.com/ellisonleao/sharer.js/)

## Requirements

- Vue 1.0 or 2.0

## Getting Started

```
$ npm install vue-sharer --save
```

```js
new Vue({
  directives: {
    sharer: require('vue-sharer')
  }
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
MIT &copy; Emoji Generator
