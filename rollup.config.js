import { defineConfig } from "rollup";
import ts from 'rollup-plugin-ts';

export default defineConfig([
    {
        input: "src/index.ts",
        output: {
            format: 'cjs',
            file: 'lib/index.js'
        },
        external:['koa','koa-router'],
        plugins: [
            ts()
        ]
    },
    {
        input: "src/cmdline.ts",
        output: {
            format: 'cjs',
            file: 'lib/cli.js'
        },
        external:['koa','koa-router'],
        plugins: [
            ts({
                tsconfig: resolvedConfig => ({...resolvedConfig, declaration: false})
            })
        ]
    }
]);