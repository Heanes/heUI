const dirVars = require('./dirVars.config.js');

/**
 * @doc module定义
 * @author Heanes
 * @time 2018-11-05 17:04:40 周一
 */
module.exports = {
    rules: [
        // 图片等资源文件
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            include: dirVars.srcRootDir,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 4,
                        name: 'img/[name].[ext]',
                    },
                }
            ],
            /*include: dirVars.srcRootDir,
            exclude: /node_modules|vendor/*/
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            include: dirVars.srcRootDir,
            loader: 'url-loader',
            options: {
                limit: 4,
                //useRelativePath: true,
                name: 'media/[name].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            include: dirVars.srcRootDir,
            loader: 'url-loader',
            options: {
                limit: 4,
                //useRelativePath: true,
                name: 'fonts/[name].[ext]'
            }
        },

        // font-awesome
        {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            exclude: dirVars.srcRootDir,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        limit: 4,
                        publicPath: '../',
                        name: 'fonts/[name].[ext]',
                    },
                }
            ],
            /*include: dirVars.srcRootDir,
             exclude: /node_modules|vendor/*/
        },
    ],
};
