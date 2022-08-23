// const helper_functions = require('../helper_functions/functions');
const { readCases } = require('../helper_functions/functions');
const { sum } = require('../helper_functions/functions');

const getProcotols = async function (req, res) {
	try {
		return await res.status(200).send(readCases());
	} catch (error) {
		res.status(500).send('Cannot load protocols');
	}
};

module.exports = {
	getProcotols,
};
