rm package.json
rm tsconfig.json
rm .eslintrc.js
rm -R node_modules
if [ $1 = "mobile" ]
then
echo "Setting environment for Mobile..."
cp package.mobile.json package.json
cp tsconfig.mobile.json tsconfig.json
cp .eslintrc.mobile.js .eslintrc.js
else 
echo "Setting environment for Web..."
cp package.web.json package.json
cp tsconfig.web.json tsconfig.json
fi
yarn