import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        cssCodeSplit: false,
        lib: {
            entry: 'index.ts',
            formats: ['es', 'cjs'],
            fileName: (format) => format === 'es' ? 'textora-editor.js' : 'textora-editor.cjs',
            cssFileName: 'styles',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
            output: {
                banner: "'use client';",
                exports: 'named',
            },
        },
    },
})
