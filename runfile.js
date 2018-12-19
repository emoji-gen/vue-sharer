'use strict'

const { run } = require('runjs')

function example() {
  // 1.x
  run('npm install', { cwd: 'example/vue1' })
  run('npm run build', { cwd: 'example/vue1' })

  // 2.x
  run('npm install', { cwd: 'example/vue2' })
  run('npm run build', { cwd: 'example/vue2' })
}

module.exports = { example }
