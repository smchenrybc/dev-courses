import buble from 'rollup-plugin-buble'

export default {
  input: 'src/main.js',
  output: {
    file: 'dest/bundle.js',
    format: 'cjs'
  },
  // enable transpilation
  plugins: [buble()]
}