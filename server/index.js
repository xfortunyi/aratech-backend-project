const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
	console.log(` 🚀 Server up and running on http://localhost:${PORT} 🚀`);
});
