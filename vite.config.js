// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        eslint({
            overrideConfigFile: path.resolve(__dirname, ".eslintrc.cjs"),
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});

