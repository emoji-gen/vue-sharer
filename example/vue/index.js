const Vue       = require('vue')
const VueSharer = require('../../index.js')

new Vue({
  el: 'body',
  directives: {
    sharer: VueSharer,
  },
})
