const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../vue-backboard/src/main/resources/static'),
    indexPath: path.resolve(__dirname, '../vue-backboard/src/main/resources/templates/index.html'),
    devServer: {
        proxy: {
            port: 8081,
            '/board': {
                target: 'http://localhost:8082',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/board': '' }  // 경로 리라이트 설정
            }
        },
        historyApiFallback: true // Vue Router의 HTML5 History 모드를 사용하기 위한 설정
    }
};
