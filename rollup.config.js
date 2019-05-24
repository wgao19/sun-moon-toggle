import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    }),
    postcss({
      modules: true,
      plugins: []
    })
  ],
  // indicate which modules should be treated as external
  external: ["react"]
};
