const Vue       = require('vue')
const VueSharer = require('../../index.js')

new Vue({
  el: '#app',
  render: function (h) {
    return h('button', {
      attrs: {
        'data-sharer': 'twitter',
        'data-title': 'text',
      },
      directives: [
        { name: 'sharer' },
      ]
    }, 'Share on Twitter')
  },
  directives: {
    sharer: VueSharer,
  },
})
