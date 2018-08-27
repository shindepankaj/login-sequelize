var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});
 
require('./app/route/user.route.js')(app);

// Create a Server
var server = app.listen(8082, function () {
  console.log("App listening at http://%s:%s", 'localhost', 8082)
})
