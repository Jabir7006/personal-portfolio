import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: '0.0.0.0',
    },
  };
});
