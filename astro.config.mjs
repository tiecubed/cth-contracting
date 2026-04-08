// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://cthcontractingsolutions.com',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
