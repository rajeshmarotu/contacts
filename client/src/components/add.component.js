import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { addContact } from '../actions/';

class Add extends Component {
	constructor(props){
		super(props);
		this.state={
			person_name:"",
			contact_number:"",
			age:"",
			location:""
		}

	}

	onPersonNameChange(e){
		this.setState({person_name:e.target.value})
	}

	onContactNumberChange(e){
		this.setState({contact_number:e.target.value})
	}

	onAgeChange(e){
		this.setState({age:e.target.value})
	}

	onLocationChange(e){
		this.setState({location:e.target.value})
	}

	onSubmit (e){

	    const data = {
	    	person_name:this.state.person_name,
	    	contact_number:this.state.contact_number,
	    	age:this.state.age,
	    	location:this.state.location,
	    	added_by:this.props.user
	    }

		this.props.addContact(data)	    

	    this.setState({
	      	person_name:"",
			contact_number:"",
			age:"",
			location:""
	    });
	    e.preventDefault();
  	}

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Contact</h3>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input type="text" className="form-control" value={this.state.person_name} onChange={(e)=>this.onPersonNameChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Contact Number: </label>
                        <input type="text" className="form-control" value={this.state.contact_number} onChange={(e)=>this.onContactNumberChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text" className="form-control" value={this.state.age} onChange={(e)=>this.onAgeChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" className="form-control" value={this.state.location} onChange={(e)=>this.onLocationChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		user:state.homeReducer.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addContact: (data) => dispatch(addContact(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);