var test   = require('tape')
var assign = require('object-assign')

function make() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<button type="button" data-sharer="twitter">button</button>'
  return assign({ el: wrapper.querySelector('button') }, require('./index'))
}

test('bind', { timeout: 1000 }, function (t) {
  var sandbox = sinon.sandbox.create()
  var spy     = sandbox.spy(window, 'open')
  var sharer  = make()

  sharer.bind()
  sharer.el.click()

  setTimeout(function () {
    t.ok(spy.calledOnce)

    sandbox.restore()
    t.end()
  }, 100)
})

test('unbind', { timeout: 1000 }, function (t) {
  var sandbox = sinon.sandbox.create()
  var spy     = sandbox.spy(window, 'open')
  var sharer  = make()

  sharer.bind()
  sharer.unbind()
  sharer.el.click()

  setTimeout(function () {
    t.notOk(spy.called)

    sandbox.restore()
    t.end()
  }, 100)
})
