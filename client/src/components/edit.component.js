import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateContact } from '../actions/';
import axios from 'axios';

class Edit extends Component {
	constructor(props){
		super(props);
		this.state={
			newData:{
				person_name:"",
				contact_number:"",
				age:"",
				location:"",
				added_by:this.props.userId

			},
			loaded:false
		}

	}

	componentWillMount(){
		// if(!this.props.location.state || !this.props.location.state.id) {
		// 	return
		// }else{
			this.loadCurrentContact(this.props.location.state.id);

			console.log("mounting")
			this.setState({id:this.props.location.state.id})
		// }
	}

 loadCurrentContact =(id)=>{
	 axios.get('http://localhost:4000/contacts/loadAContact/'+id).then((res)=>{
		 console.log(res.data);
		 this.setState({contactData:res.data.contactData,newData:res.data.contactData,loaded:true})
	 }).catch((error)=>{
		this.setState({error:'Some error while loading',loaded:false})
	 })
 }
 
	onPersonNameChange(e){
		let newData =  this.state.newData;
		newData.person_name= e.target.value;
		this.setState({newData})
	}

	onContactNumberChange(e){
		let newData = { ...this.state.newData }
		newData.contact_number= e.target.value;
		this.setState({newData})
	}

	onAgeChange(e){
		let newData = { ...this.state.newData }
		newData.age= e.target.value;
		this.setState({newData})
	}

	onLocationChange(e){
		let newData = { ...this.state.newData }
		newData.location= e.target.value;
		this.setState({newData})

	}


	onSubmit(e){
		const data = {
	    	person_name:this.state.newData.person_name,
	    	contact_number:this.state.newData.contact_number,
	    	age:this.state.newData.age,
	    	location:this.state.newData.location,
	    	added_by:this.props.userId
	    }

		this.props.updateContact(this.state.id,data);

		e.preventDefault();
	}

	renderForm = () => {
		return (
            <div>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <div className="form-group">
                        <label>Person Name: </label>
                        <input type="text" className="form-control" value={ this.state.newData.person_name } placeholder={this.state.contactData.person_name} onChange={(e)=>this.onPersonNameChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Contact Number: </label>
                        <input type="text" className="form-control" value={ this.state.newData.contact_number } placeholder={ this.state.contactData.contact_number} onChange={(e)=>this.onContactNumberChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text" className="form-control" value={ this.state.newData.age } placeholder={ this.state.contactData.age} onChange={(e)=>this.onAgeChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" className="form-control" value={ this.state.newData.location } placeholder={ this.state.contactData.location} onChange={(e)=>this.onLocationChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
	}
    render() {
    	const { location } = this.props;
			console.log(this.state.loaded);
    	// console.log(this.props.contactData)
    	// console.log(this.state.newData)
    	if(!location.state || !location.state.id){
    		return <h3>Invalid Request!</h3>
    	}
    	if(!this.state.loaded){
    		return <p>Loading....!!!</p>
    	}
			if(this.state.loaded){
    		return (
    			<div>
    				{this.renderForm()}
    			</div>
    		)
    	}

    }
}

const mapStateToProps = (state) => {
	return {
		userId: state.homeReducer.userId,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateContact: (id,data) => dispatch(updateContact(id,data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Edit));
