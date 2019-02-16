import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadAContact = (id) =>{
	console.log("loading")
  return (dispatch) => {
    axios.post('http://localhost:4000/contacts/loadAContact/'+id).then((res)=>{
      dispatch({
        type:actionTypes.LOAD_A_CONTACT,
        payload:{
          data: res.data.contactData
        }
      })
    }).catch((error)=>{
    	dispatch({
    		type:actionTypes.LOAD_A_CONTACT_ERROR,
    		payload:{
    			message:"Problem loading contact details!"
    		}
    	})
    })
  }
}


export const updateContact = ( id,data ) =>{
	return (dispatch) => {
		    axios.post('http://localhost:4000/contacts/updateAContact/'+id,{data:data}).then((res)=>{
		      dispatch({
		        type:actionTypes.UPDATE_A_CONTACT,
		        payload:{
		          data: res.data.contactData
		        }
		      })
		    }).catch((error)=>{
		    	dispatch({
		    		type:actionTypes.UPDATE_A_CONTACT_ERROR,
		    		payload:{
		    			message:"Problem uploading contact details!"
		    		}
		    	})
		    })

	}
}