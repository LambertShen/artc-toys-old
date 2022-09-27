const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rootPath = path.join(__dirname, "../");

module.exports = {
    entry: path.join(rootPath, "./src/react/index.jsx"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|scripts)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", "*.js", "*.jsx"],
    },
    output: {
        path: path.join(rootPath, "./dist"),
        filename: "[contenthash].bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Artc Toys",
            template: path.join(rootPath, "./public/index.html"),
        }),
    ],
};
