const Protocol = require('../models/test_cases.txt');

const getProcotols = async function (req, res) {
	try {
		// const protocols = await Protocol.findAll();
		return await res.status(200).send('ok');
	} catch (error) {
		res.status(500).send('Cannot load protocols');
	}
};

module.exports = {
	getProcotols,
};
