import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import { loadContacts, deleteContact, editContact } from '../actions/';
import { connect } from 'react-redux';

class Index extends Component {
	constructor(props){
		super(props);
		this.state={
			edit:false
		}
	}
	componentWillMount(){
		this.props.loadContacts()
	}

	editContact = (id) => {
		this.props.history.push({
             pathname:"/edit/",
             state:{
                 id:id
              }
            });	
	}

    render() {
        return (
            <div>
                <p>Welcome to Index Component!!</p>
                <table className="table">
				    <thead>
				      <tr>
				      	<th>S.No</th>
				        <th>Name</th>
				        <th>Contact No</th>
				        <th>Age</th>
				        <th>Location</th>
				        <th></th>
				      </tr>
				    </thead>
				    <tbody>    
						{
		                	this.props.contacts && this.props.contacts.length>0 && this.props.contacts.map((item,i)=>{
		                		return(
		                		  <tr key={i}>
		                		  	<td>{i+1}</td>
							        <td>
							        	{!this.state.edit && (
							        		<p>{item.person_name}</p>
							        	)}
							        	{this.state.edit&&(
							        		<input type="text" placeholder="{item.person_name}"/>
							        	)}
							        </td>
							        <td>{item.contact_number}</td>
							        <td>{item.age}</td>
							        <td>{item.location}</td>
							        <td>
							        	{
							        		item.added_by != this.props.userId && (
							        			<div>
							        				<button onClick={()=>this.editContact(`${item._id}`)}>Edit</button>
							        				<button  onClick={()=>this.props.deleteContact(`${item._id}`)}>Delete</button>
							        			</div>

							        		)
							        	}
							        </td>
							      </tr> 
		                		)
		                		
		                	})
		                }
				    </tbody>
				  </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		contacts : state.homeReducer.contacts,
		userId: state.homeReducer.userId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadContacts : () => dispatch(loadContacts()),
		deleteContact : (id) => dispatch(deleteContact(id)),
		editContact : (id,person_name,contact_number,age,location,added_by) => dispatch(editContact())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);