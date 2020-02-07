import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve'

const isWatch = process.env.WATCH === `true`

var config = {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js'
  },
  plugins: [
    resolve(),
    vue(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.BUILD)
    })
  ]
}

if (isWatch) {
  config.plugins.push(serve({
    open: true,
    host: 'localhost',
    port: 10001,
    openPage: '/index.html',
    contentBase: ['dist']
  }))
}

export default config 
