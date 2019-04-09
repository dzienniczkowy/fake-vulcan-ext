const path = require("path");

module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: {
        background: "./src/background.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "addon"),
        filename: "dist/[name].js"
    }
};
