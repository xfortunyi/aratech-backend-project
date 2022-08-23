const { readCases } = require('../helper_functions/functions');
const { sendProtocol } = require('../helper_functions/functions');

const getProcotols = async function (req, res) {
	try {
		return await res.status(200).send(readCases());
	} catch (error) {
		res.status(500).send('Cannot load protocols');
	}
};

const postProtocol = async function (req, res) {
	try {
		let body = req.body;
		return await res.status(200).send('hello');
	} catch (error) {
		res.status(500).send('Can not read the protocol you send me');
	}
};

module.exports = {
	getProcotols,
	postProtocol,
};
