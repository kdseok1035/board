const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../vue-backboard/src/main/resources/static")
   
   //   assetsDir: "./"
   //   asset 파일 위치 설정 
}