#!/usr/bin/env bash

echo "Removing base environment files..."
rm package.json
rm tsconfig.json
rm .eslintrc.js
rm -R node_modules
echo "Setting environment for Mobile..."
cp package.mobile.json package.json
cp tsconfig.mobile.json tsconfig.json
cp .eslintrc.mobile.js .eslintrc.js
yarn