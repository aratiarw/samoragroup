/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");
const { i18n } = require("./next-i18next.config");

const nextConfig = {
    reactStrictMode: true,
    i18n,
};

module.exports = withFonts({
    webpack(config, options) {
        config.node = {
            fs: "empty",
        };
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        };
        config.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "url-loader?limit=100000",
                },
                {
                    loader: "file-loader",
                },
            ],
        });
        return config;
    },
});

module.exports = nextConfig;
