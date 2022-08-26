const express = require('express');
const router = require('./router');

const app = express();
const PORT = 8888;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
	console.log(` 🚀 Server up and running on http://localhost:${PORT} 🚀`);
});

module.exports = app;
