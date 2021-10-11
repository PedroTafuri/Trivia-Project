import { combineReducers } from 'redux';
import ReducerLogin from './ReducerLogin';
import ReducerGame from './ReducerGame'

const rootReducer = combineReducers({
  ReducerLogin,
  ReducerGame,
});

export default rootReducer;