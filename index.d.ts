/**
 * @Version 1.0.0
 * @Author Lete乐特
 * @Github https://github.com/Lete114/Output-Line
 */

class OutputLine {
  /**
   * Methods that require the display of file paths and line numbers
   * @default Console All methods of interface Console
   * example: ['debug', 'log', 'warn', 'error']
   */
  methods: Array

  /**
   * A front to make it look better
   * @default 🐞
   */
  prefix: String

  /**
   * The default is the absolute path. If `true`Relative path to `process.cwd()`
   * @default false
   */
  isRelative: Boolean
}

export declare function outputLine(options?: OutputLine): void
