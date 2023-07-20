import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //Requests that start with '/api' will be redirected to 'http://localhost:5080' :
  server: {
    proxy: {
      "/api": "http://localhost:5080",
    },
  },
});
