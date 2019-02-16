import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadAContact, updateContact } from '../actions/edit.actions';

class Edit extends Component {
	constructor(props){
		super(props);
		this.state={
			newData:{
				person_name:"",
				contact_number:"",
				age:"",
				location:""
			},
		}

	}

	componentWillMount(){
		// if(!this.props.location.state || !this.props.location.state.id) {
		// 	return
		// }else{
			this.props.loadAContact(this.props.location.state.id);
			console.log("mounting")
			this.setState({{newData: this.props.contactData,id:this.props.location.state.id,newData:this.props.contactData})
		// }		
	}

	// componentDidMount(){
	// 	console.log("Mounted!")
	// 	console.log(this.props.contactData)
	// 	// this.setState({newData:this.props.contactData})
	// }

	// componentWillReceiveProps(nextProps){
	//   if(nextProps.isLoaded!==this.props.isLoaded){
	//   	console.log(this.props.contactData)
	//     this.setState({newData: this.props.contactData });
	//   }
	// }

	componentWillUnmount(){
		// this.setState({
		// 	oldData:{
		// 		person_name:"",
		// 		contact_number:"",
		// 		age:"",
		// 		location:""
		// 	},
		// 	id:'',
		// 	isLoaded:false
		// })
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
	    	added_by:this.props.user
	    }
	    // console.log(this.state.newData)
	    // console.log(data)

		this.props.updateContact(this.state.id,data);

		e.preventDefault();
	}

	renderForm = () => {
		console.log(this.props.contactData)
		return (
            <div>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <div className="form-group">
                        <label>Person Name: </label>
                        <input type="text" className="form-control" value={this.state.newData.person_name} placeholder={this.props.contactData.person_name} onChange={(e)=>this.onPersonNameChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Contact Number: </label>
                        <input type="text" className="form-control" value={this.state.newData.contact_number} placeholder={this.props.contactData.contact_number} onChange={(e)=>this.onContactNumberChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text" className="form-control" value={this.state.newData.age} placeholder={this.props.contactData.age} onChange={(e)=>this.onAgeChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" className="form-control" value={this.state.newData.location} placeholder={this.props.contactData.location} onChange={(e)=>this.onLocationChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
	}
    render() {
    	const { location, contactData } = this.props;
    	// console.log(this.props.contactData)
    	// console.log(this.state.newData)
    	console.log(this.props.isLoaded)
    	if(!location.state || !location.state.id){
    		return <h3>Invalid Request!</h3>
    	}
    	if(!this.props.isLoaded){
    		return <p>Loading....!!!</p>
    	}else{
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
		user: state.homeReducer.user,
		contactData : state.homeReducer.editContactData,
		message: state.homeReducer.message,
		isLoaded: state.homeReducer.isLoaded
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadAContact: (id) => dispatch(loadAContact(id)),
		updateContact: (id,data) => dispatch(updateContact(id,data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Edit));