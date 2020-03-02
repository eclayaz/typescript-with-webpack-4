# TypeScript with Webpack 4

## Step by step guide

add webpack and webpack-cli:

`yarn add --dev webpack webpack-cli`

Add TypeScript
`yarn add --dev typescript`

Add TypeScript loader
`yarn add --dev ts-loader`

## Build the project

### Without TypeScript Production:

`./node_modules/.bin/webpack-cli src/index.js --output=build/bundle.js -p`

### Without TypeScript Development:

`./node_modules/.bin/webpack-cli src/index.js --output=build/bundle.js -d`

### With TypeScript

`./node_modules/.bin/webpack-cli --watch`

## Run the build

`node build/bundle.js`
