// To run type the following into the console.

var express = require('express');
var app = express();
app.use("/", express.static("./"));

// Start the server
var server = app.listen(8000, function() {
 console.log('Listening on port %d', server.address().port);
});
