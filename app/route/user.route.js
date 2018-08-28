module.exports = function(app) {
 
    const users = require('../controller/register.controller.js');
    const authenticates = require('../controller/authenticate-controller.js');
    const dashboard = require('../controller/dashboard.controller.js');
 
    // Create a new Customer
    app.post('/api/register', users.create);

    // Create a new Customer
    app.post('/api/authenticate', authenticates.authenticate);
 
    // Create a new Customer
    app.post('/secure-api/home', dashboard.home);
 

    // // Retrieve all Customer
    // app.get('/api/customers', customers.findAll);
 
    // // Retrieve a single Customer by Id
    // app.get('/api/customers/:customerId', customers.findById);
 
    // // Update a Customer with Id
    // app.put('/api/customers/:customerId', customers.update);
 
    // // Delete a Customer with Id
    // app.delete('/api/customers/:customerId', customers.delete);
}