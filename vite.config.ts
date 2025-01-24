import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      '/apis': {
        target: 'https://dev-api.pocaalbum.com', // 프록시 요청을 보낼 서버 주소
        changeOrigin: true, // 호스트 헤더 변경
        rewrite: (path) => path.replace(/^\/apis/, '/apis'), // 경로 재작성
        secure: true, // https 인증서가 필요한 경우 true
      },
    },
  },
});
