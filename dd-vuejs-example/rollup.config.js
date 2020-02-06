import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js'
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.BUILD)
    }),
    vue()
  ]
}
