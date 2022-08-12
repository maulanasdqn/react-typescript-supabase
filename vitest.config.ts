/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
});
