import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  treeshake: true,
  perf: true,
  input: {
    index: "src/index.ts",
    "create-release": "src/create-release.ts",
    "upload-release-assets": "src/upload-release-assets.ts"
  },
  output: {
    dir: "dist",
    format: "cjs",
    entryFileNames: "[name].js",
    exports: "named",
  },
  plugins: [typescript()],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    "path",
  ],
  watch: {
    chokidar: true,
    include: "src/**",
    exclude: "node_modules/**",
  },
};