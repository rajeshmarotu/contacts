const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
	person_name: {
		type:String,
		required: true,
		minlength:2,
		maxlength:15,
		trim:true
	},
	contact_number:{
		type:Number,
		required: true,
		minlength:6,
		maxlength:12,
		trim:true	
	},
	age:{
		type:Number,
		min: 1,
		max: 120
	},
	location:{
		type:String,
		minlength:3,
		trim:true
	},
	added_by:{
		type:String
	}
},{
	collection:'contacts'
}
)

module.exports = mongoose.model('contacts',contactSchema)