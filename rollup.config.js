import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import fileSize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**/',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    uglify(),
    fileSize()
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
  ]
};
