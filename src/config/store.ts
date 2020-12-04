import {configureStore} from '@reduxjs/toolkit';
import rootReducer from 'config/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./rootReducer', () => {
//       const newRootReducer = require('./rootReducer').default
//       store.replaceReducer(newRootReducer)
//     })
// }

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
