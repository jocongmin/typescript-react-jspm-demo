import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import formDataReducer from './formData-reducer';
import stepNumberReducer from './stepNumber-reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  formData:formDataReducer,
  stepNumber:stepNumberReducer,
});
