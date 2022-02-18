const { relative } = require('path')
const { existsSync } = require('fs')

const _console = (() => {
  let obj = {}
  for (let key in console) obj[key] = console[key]
  return obj
})()

function getStyle(name, text) {
  const objColors = {
    green: [32, 39],
    magenta: [35, 39],
    gray: [90, 39]
  }
  const color = objColors[name]
  return `\u001B[${color[0]}m${text}\u001B[${color[1]}m`
}

function handler(opt) {
  opt.methods.forEach((methodName) => {
    console[methodName] = (firstArgument, ...otherArguments) => {
      Error.prepareStackTrace = (_, stack) => stack
      const stack = new Error().stack
      let callee = stack[1]

      const FileName = callee.getFileName()
      if (!existsSync(FileName)) callee = stack[3]

      const relativeFileName = relative(process.cwd(), callee.getFileName())
      let filePath = opt.isRelative ? relativeFileName : callee.getFileName()
      filePath = getStyle('magenta', filePath)

      const colon = getStyle('gray', ':')
      const LineNumber = getStyle('green', callee.getLineNumber())

      const text = `${opt.prefix} ${filePath}${colon}${LineNumber}`

      const isString = typeof firstArgument === 'string'
      if (isString) _console[methodName](text.toString())
      else _console[methodName](text)

      _console[methodName](firstArgument, ...otherArguments)
    }
  })
}

module.exports = (options) => {
  let arr = []
  for (const key in console) arr.push(key)
  const defaultOptions = {
    methods: arr,
    prefix: '🐞',
    isRelative: false
  }
  const opt = Object.assign(defaultOptions, options)
  handler(opt)
}
