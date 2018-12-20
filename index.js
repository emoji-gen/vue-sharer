'use strict'

var Sharer = require('sharer.npm.js')

function share(e) {
  var sharer = new Sharer(e.target)
  sharer.share()
}

module.exports = {
  bind: function (el) {
    el = el || this.el
    el.addEventListener('click', share, false)
  },

  unbind: function (el) {
    el = el || this.el
    el.removeEventListener('click', share, false)
  },
}
