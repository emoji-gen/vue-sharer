var expect = require('chai').expect
var assign = require('object-assign')

function make() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<button type="button" data-sharer="twitter">button</button>'
  return assign({ el: wrapper.querySelector('button') }, require('./index'))
}

describe('index', function () {
  var sandbox
  var spy
  var sharer

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    spy     = sandbox.spy(window, 'open')
    sharer  = make()
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('bind', function (cb) {
    sharer.bind()
    sharer.el.click()

    setTimeout(function () {
      expect(spy.calledOnce).to.be.ok
      cb()
    }, 100)
  })

  it('unbind', function (cb) {
    sharer.bind()
    sharer.unbind()
    sharer.el.click()

    setTimeout(function () {
      expect(spy.called).to.not.be.ok
      cb()
    }, 100)
  })
})
