import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [nodePolyfills()],
})