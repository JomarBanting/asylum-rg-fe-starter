import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import vizReducer from './vizReducer';
import authReducer from './authReducer';

export default combineReducers({
  vizReducer,
  dataReducer,
  authReducer,
});
