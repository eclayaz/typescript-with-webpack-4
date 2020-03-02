# TypeScript with Webpack 4

## Step by step guide

Add webpack and webpack-cli:

`yarn add --dev webpack webpack-cli`

Add TypeScript:

`yarn add --dev typescript`

Add TypeScript loader:

`yarn add --dev ts-loader`

## Build the project

### With TypeScript

`./node_modules/.bin/webpack-cli --watch`

#### Without TypeScript (p - production, d - development):

`./node_modules/.bin/webpack-cli src/index.js --output=build/bundle.js -p`

## Run the build

`node build/bundle.js`
