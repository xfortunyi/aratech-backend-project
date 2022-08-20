const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
	console.log(` 🚀 Server up and running on http://localhost:${PORT} 🚀`);
});
