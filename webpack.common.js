const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;

const fs = require("fs");

const pages = fs.readdirSync(path.resolve(__dirname, "./src/templates/"), {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name.replace(".html", ""));

module.exports = {
    entry: pages.reduce((config, page) => {
        if (fs.existsSync(path.resolve(`./src/${page}.ts`)))
            config[page] = `./src/${page}.ts`;
        return config;
    }, {}),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]', // Output directory and file naming
                },
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle[name].[hash].js",
        path: path.resolve(__dirname, "build"),
        publicPath: ""
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, "./public")},
            ],
        }),
        ...pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    inject: true,
                    template: path.resolve(__dirname, `./src/templates/${page}.html`),
                    // favicon: path.resolve(__dirname, "./public/favicon/favicon.ico"),
                    filename: `${page}.html`,
                    chunks: [page],
                    title: "WMC",
                    scriptLoading: "defer",
                    publicPath: "/",
                })
        ),
        new MiniCssExtractPlugin({filename: "styles.[contenthash].css"}),
        new SitemapPlugin({
            base: "https://wmc.tinkerhub.org",
            paths: pages.map((p) => `/${p.replace("index", "")}`)
        })
    ]
};
