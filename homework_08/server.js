let express = require('express');
let app = express();
let router = require('./routes');

const port = process.env.PORT || 3000;

app.use('/', router);
process.stdout.write('What are you waiting for? \n');
app.listen(port, function () {
	console.log(`Listening to port ${port}`)
})
