var Sharer = require('sharer.npm.js')

function share(e) {
  var sharer = new Sharer(e.target)
  sharer.share()
}

module.exports = {
  bind: function () {
    this.el.addEventListener('click', share, false)
  },

  unbind: function () {
    this.el.removeEventListener('click', share, false)
  },
}
