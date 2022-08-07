const path = require('path')
const Dotenv = require('dotenv-webpack')
const enviroment = process.env.NODE_ENV || 'dev'

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/react'] },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // port: 3000 || process.env.PORT,
    // port: process.env.PORT,
    port: 8282 || process.env.PORT ? process.env.PORT : 3000,
    // open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  target: 'web',
  plugins: [
    new Dotenv({
      // path: path.resolve(__dirname, `.env.${enviroment}`),
      path: enviroment === process.env.NODE_ENV ? './.env.dev' : './.env',
    }),
  ],
}

/**
@INuild時に環境に応じた.env を読み込ませたい](https://chaika.hattry/2020/10/03/160000)

dotラグインを使えば .env ファイルを webpack を通じてプログラムに渡すこなので、 ビルドのモードに応じて読み込ませる .env ファイルを変更すれば OK

web
  crequire('dotenv-webpack');
  ct = process.env.NODE_ENV || 'dev';

  module.exports = {
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, `.env.${enviroment}`),
      }),
    ],
  }

npm-script
  "scripts": {
    "build": "NODE_ENV=prod webpack --config ./webpack/config.js",
    "build:dev": "NODE_ENV=dev webpack --config ./webpack.config.js",
  }
dotenv-webpack プラグインで渡される .env ファイルはプログラム内では process.env からアクセスすることができます。
npm run build の場合は .env が
npm run build:dev の場合は .env.dev が、
それぞれ読み込まれてビルドできるようになりました ✨
*/
