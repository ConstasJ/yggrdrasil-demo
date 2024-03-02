import { defineConfig } from "rollup";
import ts from 'rollup-plugin-ts';

export default defineConfig([
    {
        input: "src/index.ts",
        output: {
            format: 'cjs',
            file: 'lib/index.js'
        },
        plugins: [
            ts()
        ]
    },
    {
        input: "src/index.ts",
        output: {
            format: 'esm',
            file: 'lib/index.mjs'
        },
        plugins: [
            ts({
                tsconfig: resolvedConfig => ({...resolvedConfig, declaration: false})
            })
        ]
    },
    {
        input: "src/cmdline.ts",
        output: {
            format: 'cjs',
            file: 'lib/cli.js'
        },
        plugins: [
            ts({
                tsconfig: resolvedConfig => ({...resolvedConfig, declaration: false})
            })
        ]
    }
]);