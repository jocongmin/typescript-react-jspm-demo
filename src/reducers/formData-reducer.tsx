import { createAction } from 'redux-actions';
import Immutable from 'seamless-immutable';
import API from '../../server/api.tsx';
// Action Types - LOAD, CREATE, UPDATE, REMOVE
const UP_FORM_DATA = 'FormData/UP_FORM_DATA';

// Action Creators
export const upFormData = createAction<string>(UP_FORM_DATA);

// Reducer
const initialState = Immutable({
  formData:{
    birth:"2008-02-12",
    high:0,
    sex:0,
    weight:0,
  }
});

export default function reducer(state = initialState, action: FluxStandardAction<any>) {
  if(action.type==UP_FORM_DATA){
    const formData=action.payload.formData;
    let isSuc=API.upBodyFormData(formData);
    return state.merge({
      formData:formData,
    });
  }else{
    return state;
  }
}
