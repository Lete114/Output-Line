<div align="right">
  语言:
  中文
  <a title="English" href="/README_EN.md">English</a>
</div>

<h1 align="center"><a href="https://github.com/lete114/Output-Line" target="_blank">Output-Line</a></h1>
<p align="center">执行node程序时，控制台中输出console行号</p>

<p align="center">
    <a href="https://github.com/Lete114/Output-Line/releases/"><img src="https://img.shields.io/npm/v/output-line" alt="Version"></a>
    <a href="https://github.com/Lete114/Output-Line/tree/main"><img src="https://img.shields.io/github/package-json/v/Lete114/Output-Line/main?color=%231ab1ad&label=main" alt="dev"></a>
    <a href="https://github.com/Lete114/Output-Line/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Lete114/Output-Line?color=FF5531" alt="MIT License"></a>
</p>

## 安装

```bash
npm install output-line --save
```

## 快速开始

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

// 使用默认参数
// require('output-line')()

// 自定义参数
const options = {
  methods: ['debug', 'log', 'warn', 'error'],
  prefix: '🐸',
  isRelative: true
}
require('output-line')(options)

console.log('%s %d', 'age', 18)

console.log({ f: 'foo', b: 'bar' })
```
