const db = require('../config/db.config.js');
const User = db.users;

const bcrypt = require('bcrypt');

// Post a Customer
exports.create = (req, res) => {	

	console.log("----", req.body);

	bcrypt.hash(req.body.password, 10, function(error, hash) {
		// Store hash in database
		// Save to MySQL database
		User.create({  
			name: req.body.name,
			email: req.body.email,
			password: hash
		}).then(user => {		
			// Send created customer to client
				if (error) {
						res.json({
								status:false,
								message:'there are some error with query'
						})
				}else{
						res.json({
								status:true,
								data:user,
								message:'user registered sucessfully'
						})
				}

		});

	});

};



// // FETCH all Customers
// exports.findAll = (req, res) => {
// 	Customer.findAll().then(customers => {
// 	  // Send all customers to Client
// 	  res.send(customers);
// 	});
// };
 
// // Find a Customer by Id
// exports.findById = (req, res) => {	
// 	Customer.findById(req.params.customerId).then(customer => {
// 		res.send(customer);
// 	})
// };
 
// // Update a Customer
// exports.update = (req, res) => {
// 	const id = req.params.customerId;
// 	Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
// 					 { where: {id: req.params.customerId} }
// 				   ).then(() => {
// 					 res.status(200).send("updated successfully a customer with id = " + id);
// 				   });
// };
 
// // Delete a Customer by Id
// exports.delete = (req, res) => {
// 	const id = req.params.customerId;
// 	Customer.destroy({
// 	  where: { id: id }
// 	}).then(() => {
// 	  res.status(200).send('deleted successfully a customer with id = ' + id);
// 	});
// };