// webpack.config.js
const path = require('path');

module.exports = {
    // entry: ['./src/index.js', './src/savedInput.js'],
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'docs/assets/js'),
        filename: '[name].js'
    },
    mode: 'development',
    watch: true
}