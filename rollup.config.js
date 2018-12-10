import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import rimraf from 'rimraf'

// remove's dist folder each time we build
rimraf.sync('dist')

const pkg = require('./package.json')
const version = pkg.version

export default [
  {
    input: 'src/scripts/main.js',
    output: {
      file: 'dist/scripts/main.min.js',
      format: 'iife'
    },
    plugins: [
      replace({
        delimiters: ['{{', '}}'],
        version
      }),
      terser()
    ]
  }
]
