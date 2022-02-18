const { relative } = require('path')

// backups
const arr = []
const _console = (() => {
  let obj = {}
  for (let key in console) {
    obj[key] = console[key]
    arr.push(key)
  }
  return obj
})()

// Set output style
function getStyle(name, text) {
  const obj = {
    green: [32, 39],
    magenta: [35, 39],
    gray: [90, 39]
  }
  const color = obj[name]
  return `\u001B[${color[0]}m${text}\u001B[${color[1]}m`
}

// Processing (core code)
function handler(opt) {
  opt.methods.forEach((methodName) => {
    console[methodName] = (firstArgument, ...otherArguments) => {
      try {
        const error = new Error().stack.match(/at Object.<anonymous>(.*?)+/g)[0]
        const fullPath = error.match(/\(([^)]*)\)/)[1].replace(/:\d$/, '')
        const text = fullPath.replace(/(.*?):(\d+)/, function ($0, $1, $2) {
          // File path
          const relativeFileName = relative(process.cwd(), $1)
          let filePath = opt.isRelative ? relativeFileName : $1
          filePath = getStyle('magenta', filePath)

          const colon = getStyle('gray', ':')
          const LineNumber = getStyle('green', $2)

          return `${opt.prefix} ${filePath}${colon}${LineNumber}`
        })

        const isString = typeof firstArgument === 'string'
        if (isString) _console[methodName](text.toString())
        else _console[methodName](text)
        _console[methodName](firstArgument, ...otherArguments)
      } catch (error) {
        return
      }
    }
  })
}

module.exports = (options) => {
  const defaultOptions = {
    methods: arr,
    prefix: '🐞',
    isRelative: false
  }
  const opt = Object.assign(defaultOptions, options)
  handler(opt)
}

