const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9090;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/getMessage', (req, res) => {
	res.send('hi there hello');
});

app.listen(port, () => {
	console.log('server listening at '+port);
});