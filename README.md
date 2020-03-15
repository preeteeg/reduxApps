This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### npm install --save react-redux redux
### importing createStore method from redux
### initialise store by using createStore method
### createStore method take reducer function and defaultState as arguments
### set up defaulState i.e initial state
### create reducer function which takes 2 args, which is the defaultState and the action and return the state
### dispatch method - send actions to the store
### actions (objects) ->action{ type : WHAT KIND OF ACTION , payload : DATA }
### redux is uni directional flow and does not mutate state ..makes a copy 
### create actions 
### place reducer function (pure function) in a separate file and import actions
### import actions and reducer function in store file
### provider -  connect from react-redux
### Provider store props
### connect HOC 4 arguments
### first argument mapStateToProps (state) //return an object which represent the state 
### second argument mapDispatchToProps (dispatch,ownProps) // return an object with invoking
### install redux-devtools-extension https://github.com/zalmoxisus/redux-devtools-extension
### To use multiple reducer , use combineReducers from redux in createStore function
### combineReducers takes an object of different part of the state e.g combineReducers ({countState:countReducers,modalState:modalReducers,productsState:productsReducers})
### Each component will make use of it's part of the state in mapsStateToProps instead of the whole state
### set up actioncreators to return dispatch object
### redux does not asyn action, so we need to handle ajax using redux-thunk third party npm install --save redux-thunk