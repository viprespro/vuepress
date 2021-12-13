const nav = require('./nav')
const sidebar = require('./sidebar')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  base: __DEV__ ? '' : './',
  title: '',
  description: 'Focusing on tech sharing.',
  themeConfig: {
    nav,
    sidebar,
  },
}
