module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    }, // this tells webpack that it should output to /dist/bundle.js and that public assets go at the root of /dist
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }, // this tells webpack to run anything matching the value of "test" thru babel-loader.
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }, //this allows you to do "import File from '/path/to/file' and leave off the extension of file.
    devServer: {
        contentBase: './dist',   // this tells webpack-dev-server to serve its content from here.
        host: '0.0.0.0'          // this defaults to localhost - using 0.0.0.0 makes it accessible to lan
    }
};
