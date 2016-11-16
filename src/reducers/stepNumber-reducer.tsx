import { createAction } from 'redux-actions';
import Immutable from 'seamless-immutable';
import API from '../../server/api.tsx';


// Action Types - LOAD, CREATE, UPDATE, REMOVE
const UPDATE_BASE_CURRENCY = 'StepNumber/UPDATE_BASE_CURRENCY';
const UP_WEIGHT_DATA = 'StepNumber/UP_WEIGHT_DATA';
const BIND_EQUIMENT= 'StepNumber/BIND_EQUIMENT';
const ADD_EQUIMENT= 'StepNumber/ADD_EQUIMENT';

// Action Creators
export const updateBaseCurrency = createAction<string>(UPDATE_BASE_CURRENCY);
export const upWeightData = createAction<string>(UP_WEIGHT_DATA);
export const bindEquiment = createAction<string>(BIND_EQUIMENT);
export const addEquiment = createAction<string>(ADD_EQUIMENT);

// Reducer
const initialState = Immutable({
  dayStep: 0,
  distance:0,
  hot:0,
  weightNewData:0,
  bindEquiment:'',
  addEquiment:''
});
export default function reducer(state = initialState, action: FluxStandardAction<any>) {
  if(action.type==UPDATE_BASE_CURRENCY){
    let s=action.payload.mouthDay;
    const stepData=API.getStep(s.mouth,s.day);
    return state.merge({
      dayStep: stepData.dayStep,
      distance:stepData.distance,
      hot:stepData.hot
    });
  }else if(action.type==UP_WEIGHT_DATA){
    API.upWeight(action.payload.weightNewData)
    return state.merge({
      weightNewData: action.payload.weightNewData,
    });
  }else if(action.type==BIND_EQUIMENT){
    API.bindEquiment();
    return state.merge({
      bindEquiment: action.type,
    });
  }else if(action.type==ADD_EQUIMENT){
    API.addEquiment();
    return state.merge({
      addEquiment: action.type,
    });
  }else{
    return state;
  }
}
