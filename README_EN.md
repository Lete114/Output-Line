<div align="right">
  Language:
  English
  <a title="中文" href="/README.md">中文</a>
</div>

<h1 align="center"><a href="https://github.com/lete114/Output-Line" target="_blank">Output-Line</a></h1>
<p align="center">When executing a node program, the console outputs the console line number</p>

<p align="center">
    <a href="https://github.com/Lete114/Output-Line/releases/"><img src="https://img.shields.io/npm/v/output-line" alt="Version"></a>
    <a href="https://github.com/Lete114/Output-Line/tree/main"><img src="https://img.shields.io/github/package-json/v/Lete114/Output-Line/main?color=%231ab1ad&label=main" alt="dev"></a>
    <a href="https://github.com/Lete114/Output-Line/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Lete114/Output-Line?color=FF5531" alt="MIT License"></a>
</p>

## Installation

```bash
npm install output-line --save
```

## Getting Started

```js
/*
┌────────────┬────────────┬────────────┐
│  property  │  default   │    type    │
├────────────┼────────────┼────────────┤
│   methods  │  Console   │   Array    │
│   prefix   │   '🐞'     │   String   │
│ isRelative │   false    │   Boolean  │
└────────────┴────────────┴────────────┘
*/

// Use default parameters
// require('output-line')()

// Custom Parameters
const options = {
  methods: ['debug', 'log', 'warn', 'error'],
  prefix: '🐸',
  isRelative: true
}
require('output-line')(options)

console.log('%s %d', 'age', 18)

console.log({ f: 'foo', b: 'bar' })
```
