const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Start the server.
app.listen(port, () =>{
    console.log("Server up and running");
});