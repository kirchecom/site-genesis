const resolve = require('path').resolve;

module.exports = (env = {}) => {
    return {
        entry: ['./Resources/Private/JavaScript/index.js', './Resources/Private/Styles/index.scss'],
        output: {
            path: resolve('./'),
            filename: './Resources/Public/JavaScript/app.js',
        },
        module: {
            rules: [
                {
                    test: /.scss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].css',
                                outputPath: './Resources/Public/Styles/'
                            }
                        },
                        {
                            loader: 'extract-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                  return [
                                    require('autoprefixer')
                                  ];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        }
    }
};
