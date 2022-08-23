const { avoidMech } = require('../helper_functions/functions');
const { furthestEnemies } = require('../helper_functions/functions');
const { assistAllies } = require('../helper_functions/functions');
const { avoidCrossfire } = require('../helper_functions/functions');
const { closestEnemies } = require('../helper_functions/functions');
const { prioritizeMech } = require('../helper_functions/functions');

const postProtocol = async function (req, res) {
	let protocol = req.body.protocols;
	try {
		if (protocol[0] === 'avoid-mech') {
			res.status(200);
			return await res.send(avoidMech(req.body));
		} else {
			console.log('nothing');
		}
	} catch (error) {
		res.status(500).send('Can not read the protocol you send to me');
	}
};

module.exports = {
	postProtocol,
};
