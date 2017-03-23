## After reading a bit found this combination of modules. The following file is  boilerplate for reference and to save time on terminal

**Dev-Dependencies** ( `npm i --save-dev` )

`npm i webpack webpack-dev-server babel-core babel-preset-es2015 babel-preset-react babel-loader style-loader css-loader --save-dev`

* `webpack`
    * The module bundler we will be using as a build tool
    ( `npm i webpack -g` )
* `webpack-dev-server`
    * A tool built for Webpack to allow live page reloads whenever a change is made.
    ( `npm i webpack-dev-server -g` )
* `babel-core`
    * The core of Babel's parser
* `babel-preset-es2015`
    * A Babel preset allowing us to compile ES2015 to ES5
* `babel-preset-react`
    * A Babel preset allowing us to parse JSX
* `babel-loader`
    * Babel's Webpack plugin
* `style-loader`
* `css-loader`
    * These allow Webpack to handle our CSS as well as our JS

**Standard Dependencies** ( `npm i --save` )

* `react`
    * The core React library
* `react-dom`
    * The entry point of working with the DOM in React

`npm i react react-dom --save`


