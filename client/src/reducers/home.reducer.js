  import * as actionTypes from '../actions/actionTypes.js';
const initial_state={
  userId:'125354',
  contacts:[],
  message:"",
  isLoaded:false

}
export default function homeReducer(state=initial_state,action){

  switch(action.type){
    case actionTypes.ADD_CONTACT:
      // const newData = state.contacts.push(action.payload.contacts)
      return {
        ...state,

      }

    case actionTypes.LOAD_CONTACTS:
      const contacts = action.payload.data;
      return {
        ...state,
        contacts:contacts
      }

    case actionTypes.DELETE_CONTACT:
      const id = action.payload.id;
      var newData = state.contacts.filter((item,i)=>{
        return item._id != id;
      })
      return {
        ...state,
        contacts:newData
      }

    case actionTypes.UPDATE_A_CONTACT:
      console.log('Update!')
      const data = action.payload.data;
      var newData = state.contacts.map(contact=>{
        console.log(contact._id);
        console.log(data._id);
        return contact._id == data._id ? {data} : {contact}
      })
      console.log(newData);
      return {...state,contacts:newData}

    case actionTypes.UPDATE_A_CONTACT_ERROR:
      return {...state,message:action.payload.message}

    case 'ERROR':
      return state;

    default:
      return state;
  }
}
