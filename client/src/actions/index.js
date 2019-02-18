
import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const addContact = ( data ) => {

  return (dispatch) => {
    axios.post('http://localhost:4000/contacts/addContact',data).then(
      (res)=>{
        console.log(res.data.message);
        dispatch({
          type:actionTypes.ADD_CONTACT,
          payload:{
            message:res.data.message,
            data:res.data.contacts
          }
        })
      }).catch((error)=>{
        console.log(error);
        dispatch({
          type:'ERROR'
        })
      })
  }

}

export const loadContacts = () => {
  return (dispatch) => {
    axios.get('http://localhost:4000/contacts/').then((res)=>{
      dispatch({
        type: actionTypes.LOAD_CONTACTS,
        payload:{
          data:res.data
        }
      })
    })
  }
}

export const deleteContact = (id) => {
  return (dispatch) => {
    axios.post('http://localhost:4000/contacts/deleteContact/'+id).then((res)=>{
      console.log(res.status)
      dispatch({
        type:actionTypes.DELETE_CONTACT,
        payload:{
          id:id
        }
      })
    })
  }
}

export const updateContact = ( id,data ) =>{
  console.log("action");
  console.log(id,data);
	return (dispatch) => {
		    axios.post('http://localhost:4000/contacts/updateAContact/'+id,{data:data}).then((res)=>{
		      dispatch({
		        type:actionTypes.UPDATE_A_CONTACT,
		        payload:{
		          data: res.data.contactData,
              message:"Successfully edited!"
		        }
		      })
		    }).catch((error)=>{
          console.log(error);
		    	dispatch({
		    		type:actionTypes.UPDATE_A_CONTACT_ERROR,
		    		payload:{
		    			message:"Problem uploading contact details!"
		    		}
		    	})
		    })

	}
}
