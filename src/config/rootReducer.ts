import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from 'components/Counter/Slices/counterSlice';

const rootReducer = combineReducers({ counter: counterReducer })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
