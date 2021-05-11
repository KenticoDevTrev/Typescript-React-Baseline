const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "/typescript/samplehelper/src/index.ts",
    mode: "development",
    output: {
        filename: "index.min.js",
        path: path.resolve(__dirname, "dist")
    },
    // Enable sourcemaps for debugging webpack's output. 
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions. 
        extensions: [".ts", ".tsx", ".js"]
    },
     module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'. 
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    optimization: {
        minimize: true, // Toggle me to minimize or not
        minimizer: [
            new TerserPlugin(),
          ],
    }
} 