# Web App Starting Point
This package is an initial setup of either a react app or just typescript.  Meant to help get things 'started' faster.

It includes the starting point of Typescript, React, and Webpack, with minification / mapping, sample files and a bundle.

## Startup
Make sure you have [https://www.npmjs.com/get-npm](npm installed) on your computer globally.  Doesn't hurt to also have react installed globally (run these from powershell)

`npm install --global typescript`
`npm install react`
`npm install react-dom`
`npm install ts-node`
`npm install --global webpack`
`npm install --global webpack-cli`
`npm install concurrently --save`

When you have your folder, open a powershell at the root of your folder and type `npm install` which will restore the `node_modules` folder.

## Build and Watch Commands
When you bring up this project, in a terminal, run:
`npm run webpack-dev` to watch all 3 webpack.config.js for changes (when you update a file, it rebuilds the dist).  This uses `concurrently` which allows multiple concurrent commands, since watch statements 'freeze' the terminal as it loops and watches.

`npm run webpack` to build all 3 webpack.config.js

You can also optionally run each one individually with the following commands, feel free to adjust, add, etc.
`npm run webpack-bundle` to build the bundle webpack
`npm run webpack-bundle-dev` to watch on the bundle
`npm run webpack-react` to build only the react app
`npm run webpack-react-dev` to watch only the react app
`npm run webpack-typescript` to build only the typescript sample
`npm run webpack-typescript-dev` to watch only on the typescript sample

## tsconfig.json
This configures the type script, you will want to update this to point to any new module folders so it compiles it.

## webpack.config.js files (3 included)
These are the 'compilers' of your react/typescript, this will take the ts file and bring it into a browser usable file.  You'll want to modify this for each new module.

It uses `source-map` for it's creation of source mapping, and `TerserPlugin` to minify.

The `webpack.config.js` at the root is a bundler which bundles them all together into a single bundle.min.js file.  Otherwise each application has it's own `webpack.config.js`
