import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import' 
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),createStyleImportPlugin({
    libs: [ // 按需加载
      {
        libraryName: 'zarm',
        esModule: true,
        resolveStyle: name => `zarm/es/${name}/style/css`
      }
    ]
  })],
  css: { // css预处理器
    // css模块化
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      // 项目的物理路径__dirname
      '@': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname,'src/utils'),
    }
  },
  server: {
    proxy: { // 配置代理 解决跨域问题
      '/api': {
        target:'http://localhost:7001/', // 千万不要再带一个api了
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/,''),// 正则修改
      }
    }
  }
})
