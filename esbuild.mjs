import { build } from "esbuild";

await build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  outdir: "dist",
  minify: true,
  format: "cjs",
});

await build({
  entryPoints: ["./src/bin.ts"],
  outfile: "./dist/bin",
  target: "node8",
  format: "cjs",
});
