module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'angular-lte.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel"
        }]
    }
}