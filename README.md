# Установка React для Алексеев

1) Для начала нужно установить Node.js на твою машину, заходишь на сайт "https://nodejs.org/ru/", выбираешь LTS версию.

2) В редакторе кода открываешь консоль, создаешь или открываешь проект и инициализируешь его командой `npm init`, это создаст 'package.json' файл. В нем, имеются 2 раздела, 'dependencies' и 'devDependencies'. В первый раздел записываются необходимые для работы проекта зависимые компоненты, во второй, необходимые для его сборки (при устанвки используй флаги `--save-dev` или `-D`).

3) Устанавка 'Webpack', вводишь команду `npm install -D webpack` или `npm i -D webpack`.

<- В '.gitignore' добавь директорию 'node_modules' ->

4) Далее необходимо установить 'Webpack-cli' введя команду `npm install -D webpack-cli@3.3.12` (для работы webpack-dev-server).

5) В корне проекта создай директорию 'src' можешь использовать команду `mkdir src`. В нем создай файл `touch index.js`, в котором можно записать произвольную команду, например 'Hello React'.

6) В файле 'package.json', в разделе 'scripts' добавь новый раздел, например 'start: webpack --mode=development', это говорит ноду что нужно запускать сборку 'webpack'.

7) В консоли введи `npm start` и увидишь что все получилось, молодец!

8) Далее настраиваем конфиг 'webpack', в корне проект нужно создать файл 'webpack.config.js', в него нужно положить шаблон настроек "https://webpack.js.org/concepts/#entry", пример ниже.

<------------------------------------------>
'const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};'
<------------------------------------------->

В нем можешь поменять путь входного файла ('entry') на свой, например './src/index.js', путь выхода ('output') и его название.

                    <-в 'entry' можно доиспользовать объекты, и передвигаться по ключу->

                    <-'/build' добавь в '.gitignore'->

9) В директории 'src' создай файл 'index.html'.

10) Далее необходимо установить 'html webpack plugin', вводишь команду `npm install --save-dev html-webpack-plugin`, после чего, в 'webpack.config.js' добавляешь 'plugins: [new HtmlWebpackPlugin()]' и 'const HtmlWebpackPlugin = require('html-webpack-plugin');', подробнее узнаешь по ссылке "https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin". Также, нужно добавить '{template: "./src/index.html"}'.

11) Устанавливаем 'React' и 'React-dom', введя команду `npm install react react-dom`.

12) В основной файл 'index.js' добавляешь 'import React from "react"' и 'import ReactDOM from "react-dom"'.

13) Копируешь с сайта "https://ru.reactjs.org/" первый пример в фомате 'JSX' и добавляешь его в 'index.js'.

14) Далее потребуется установить транспилятор, например 'Babel'. На сайте "https://webpack.js.org/loaders/babel-loader/#root" подробно указано, нужно просто ввести команду `npm install -D babel-loader @babel/core @babel/preset-env webpack`. В 'webpack.config.js' необходимо добавить следующее.

<------------------------------------------>
module: {
  rules: [
    {
      test: /\.js(x)?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
},
<------------------------------------------>

Далее необходимо ввести команду `npm install --save-dev @babel/preset-react` и добавить 'webpack.config.js' в 'presets' добавить "@babel/preset-react".

ОБЯЗАТЕЛЬНО!!! Используй версии ноды 12 и выше

15) В файл 'index.html' необходимо добавить '<div id="hello-example"></div>.

16) Устанавливаешь 'dev-server' "https://webpack.js.org/guides/development/#using-webpack-dev-server" и вводишь команду `npm install --save-dev webpack-dev-server`. В конфиг файл вставляешь 
    'module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};'

17) Далее можно поменять разрешение .js на .jsx и доавить разрешение в конфиге!