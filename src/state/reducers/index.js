import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import vizReducer from './vizReducer';

export default combineReducers({
  vizReducer,
  dataReducer,
});
