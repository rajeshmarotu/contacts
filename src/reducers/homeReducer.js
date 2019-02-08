  import * as actionTypes from '../actions/actionTypes.js';
const initial_state={
  data:[
    {
      name:"Section 1",
      value: 20,
    },
    {
      name:"Section 2",
      value: 50,
    },
    {
      name:"Section 3",
      value: 30
    },
    {
      name:"Section 4",
      value: 50,
    },
    {
      name:"Section 5",
      value: 30
    },
  ],
  currentName:'',
  currentValue:'',
  currentPercentage:0
}
export default function homeReducer(state=initial_state,action){

  switch(action.type){
    case actionTypes.UPDATE_CURRENT_ELEMENT_DETAILS:
      return {
        ...state,
        currentName:action.payload.currentName,
        currentValue:action.payload.currentValue,
        currentPercentage:action.payload.currentPercentage
      }

    default:
      return state;
  }
}
