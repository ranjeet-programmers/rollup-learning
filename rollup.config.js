import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/module.js",
      format: "es",
    },
    {
      file: "dist/bundle.min.js",
      format: "iife",
      name: "version",
      //   plugins: [terser()],
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      babelHelpers: "bundled",
    }),
  ],
  // indicate which modules should be treated as external
  external: ["lodash"],
};
