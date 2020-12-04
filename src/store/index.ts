/*

// For more info: https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md#configuring
// If we'll use saga check this link: https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md
// This should be added when setup Redux

import { createStore } from 'redux';
import Reactotron from './ReactotronConfig';

// Without middleware, uncomment next line
// const store = createStore(rootReducer, Reactotron.createEnhancer());

// With middleware, uncomment next line
// const store = createStore(rootReducer, compose(middleware, Reactotron.createEnhancer()))

*/

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from 'config/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

