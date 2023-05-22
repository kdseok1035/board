const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../vue-backboard/src/main/resources/static'),
    indexPath: path.resolve(__dirname, '../vue-backboard/src/main/resources/templates/index.html'),
    devServer: {
            port: 8080,
        proxy: 'http://125.133.65.171:8080'
        ,
        historyApiFallback: true // Vue Router의 HTML5 History 모드를 사용하기 위한 설정
    }
};
