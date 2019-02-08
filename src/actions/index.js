
import * as actionTypes from './actionTypes.js';

export  const updateCurrentElementDetails = (data,datasetIndex,index)=>{
  return (dispatch) => {
    var name = data[index]['name'],
        value = data[index]['value'];

    var percentage=0,
        totalValue=0;

    for(var i in data){
      totalValue+=data[i]['value']
    }
    
    percentage = Math.round((value/totalValue)*100);
    dispatch({
      type:actionTypes.UPDATE_CURRENT_ELEMENT_DETAILS,
      payload:{
        currentName:name,
        currentValue:value,
        currentPercentage:percentage
      }
    })
  }
}
