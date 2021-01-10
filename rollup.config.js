// for minify
import { terser as pluginTerser } from 'rollup-plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';

import pkg from './package.json';


// Remove scope
const moduleName = pkg.name.replace(/^\@.*\//, '');

// license banner
const banner = `
  /**
   * @license
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} License.
   */
`;

export default [
  {
    input: 'src/daft.ts',
    output: [
      // uncompressed
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner
      },
      // minified
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        plugins: [
          pluginTerser(),
        ],
      }
    ],
    plugins: [
      pluginTypescript()
    ],
  }
];
