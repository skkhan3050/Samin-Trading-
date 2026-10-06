import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        strategies: resolve(__dirname, 'strategies.html'),
      },
    },
  },
  server: {
    // Enable rewriting /strategies to /strategies.html for dev server
  },
  plugins: [
    {
      name: 'rewrite-strategies',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/strategies' || req.url === '/strategies/') {
            req.url = '/strategies.html';
          }
          next();
        });
      }
    }
  ]
});
