vue-sharer
----------

The Vue directive that bind to Sharer.js

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

## Todo

- [ ] Support Vue 2.0

## License
MIT License
