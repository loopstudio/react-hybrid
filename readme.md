# React hybrid Native/JS

The main idea is to have an application that can be easily built within RN an RJS. All components should be shared having a container, a react JS component, a React native component and its types.

For this we are following the pattern explained in ReactNative documentation in the [**platform specfic code section**](https://reactnative.dev/docs/platform-specific-code)

### Native-specific extensions (i.e. sharing code with NodeJS and Web)
You can also use the  `.native.js`  extension when a module needs to be shared between NodeJS/Web and React Native but it has no Android/iOS differences. This is especially useful for projects that have common code shared among React Native and ReactJS.

For example, say you have the following files in your project:


    Container.js # picked up by Webpack, Rollup or any other Web bundler
    
    Container.native.js # picked up by the React Native bundler for both Android and iOS (Metro)

You can still require it without the  `.native`  extension, as follows:

    import Container from  './Container';

**Pro tip:**  Configure your Web bundler to ignore  `.native.js`  extensions in order to avoid having unused code in your production bundle, thus reducing the final bundle size.


## Setting the environment

This has been tested and it works using:
* yarn 1.22.4
* node 12.18.3
* For setting the environment for ReactNative follow [this](https://reactnative.dev/docs/environment-setup) instructions

### Switching to web environment

In order to switch to web do the following 

    $ ./setEnv.sh web
    $ yarn start

### Switching to mobile environment

    $ ./setEnv.sh mobile
    $ yarn react-native start
    # After doing so you open a new terminal and build the APP
    # by doing:
    $ yarn react-native run-ios
    


## setEnv source

```
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
```

## Reactotron

Reactotron is a macOS, Windows, and Linux app for inspecting your React JS and React Native apps.

Install it from: https://github.com/infinitered/reactotron/releases/tag/v2.17.1

Note: If using an Android device or emulator run the following command to make sure it can connect to Reactotron:

```
adb reverse tcp:9090 tcp:9090
```