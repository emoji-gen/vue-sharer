var expect = require('chai').expect
var assign = require('object-assign')

var template = '<button type="button" data-sharer="twitter">button</button>'

function makeV1() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = template
  return assign({ el: wrapper.querySelector('button') }, require('./index'))
}

function makeV2() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = template
  return {
    component: assign(window, require('./index')),
    el: wrapper.querySelector('button'),
  }
}

describe('index', function () {
  var sandbox
  var spy

  beforeEach(function () {
    sandbox = sinon.createSandbox()
    spy     = sandbox.spy(window, 'open')
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('bind (v1)', function (cb) {
    var sharer = makeV1()
    sharer.bind()
    sharer.el.click()

    setTimeout(function () {
      expect(spy.calledOnce).to.be.ok
      cb()
    }, 100)
  })

  it('bind (v2)', function (cb) {
    var sharer = makeV2()
    sharer.component.bind(sharer.el)
    sharer.el.click()

    setTimeout(function () {
      expect(spy.calledOnce).to.be.ok
      cb()
    }, 100)
  })

  it('unbind (v1)', function (cb) {
    var sharer = makeV1()
    sharer.bind()
    sharer.unbind()
    sharer.el.click()

    setTimeout(function () {
      expect(spy.called).to.not.be.ok
      cb()
    }, 100)
  })

  it('unbind (v2)', function (cb) {
    var sharer = makeV2()
    sharer.component.bind(sharer.el)
    sharer.component.unbind(sharer.el)
    sharer.el.click()

    setTimeout(function () {
      expect(spy.called).to.not.be.ok
      cb()
    }, 100)
  })
})
