const protocols = require('../models/test_cases.json');

const readCases = () => {
	return JSON.stringify(protocols[1]);
};

module.exports = {
	readCases,
};
