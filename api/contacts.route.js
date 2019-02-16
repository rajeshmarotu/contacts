var express = require('express');
const router = express.Router();

const Contacts = require('../models/contact.model');

router.get('/',async (req,res,next) => {
	try {
		Contacts.find(function(err, contacts){
		    if(err){
		      console.log(err);
		    }
		    else {
		      res.json(contacts);
		    }
		});
	} catch(err) {
	    res.status(400).send({ error: err });
	}
})

router.post('/addContact',(req,res,next)=>{
	try{
		let contact = new Contacts(req.body);
		contact.save().then((contacts)=>{
			res.status(200).json({"message":"Successfully added!","status":true,contacts:contacts});
		});
	}catch(err){
		console.log("error is"+error);
	}
})

router.post('/deleteContact/:id',(req,res,next)=>{
	try{
		Contacts.deleteOne({_id:req.params.id},function(err,obj){
			if (err) throw err;
    		res.status(200).json({"status":true});
		});
	} catch(err){
		res.status(400).send({ error: err });
	}
})

router.post('/loadAContact/:id',(req,res,next)=>{
	try{
		const id=req.params.id;
		Contacts.findById(id,function(err,contact){
			if(err) throw err;
			res.status(200).json({contactData:contact,status:true})

		})
	} catch(err){
		console.log(err)
		res.status(400).send({ error: err });
	}
})


router.post('/updateAContact/:id',(req,res,next)=>{
	try{
		const id = req.params.id;
		const data = req.query.data;
		Contacts.findByIdAndUpdate(id, data, {new: true}, function(err,contact){
			if(err) throw err;
			console.log(contact);
			res.status(200).json({contactData:contact,status:true})

		})
	} catch(err){
		console.log(err)
		res.status(400).send({ error: err });
	}
})


module.exports = router;