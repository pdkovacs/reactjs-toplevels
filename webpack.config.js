const path = require('path');
require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// const DEVELOPMENT = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';
const PRODUCTION = process.env.NODE_ENV === 'production';

var nodeExternals = require('webpack-node-externals');

const entry = TEST
    ? [ './test/specRoot.js' ]
    : [ // PRODUCTION || DEVELOPMENT
        './src/index.tsx'
    ];

const plugins = PRODUCTION
    ? [
            new HTMLWebpackPlugin({
				template: 'index-prod-template.html'
			})
    ]
    : TEST
    ? []
    : [ // DEVELOPMENT
            new HTMLWebpackPlugin({
				template: 'index-dev-template.html'
			})
    ]

const cssIdentifier = '[path][name]---[local]';

const cssLoader = ['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

const externals = TEST ? [
    nodeExternals({
        whitelist: ['normalize.css', 'whatwg-fetch']
    })
] : {
    'react': 'React',
    'react-dom': 'ReactDOM'
};

const typeScriptConfigFileName = TEST
    ? path.resolve(__dirname, 'tsconfig-test.json')
    : path.resolve(__dirname, 'tsconfig.json');

module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        },
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: typeScriptConfigFileName
                }
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /normalize\.css$/,
                loaders: cssLoader
            },
            {
                test: /\.css$/,
                loaders: cssLoader,
                exclude: /node_modules/
            }
        ]
    },
    externals: externals,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    }
};
