const { avoidMech } = require('../helper_functions/functions');
const { prioritizeMech } = require('../helper_functions/functions');
const { assistAllies } = require('../helper_functions/functions');
const { avoidCrossfire } = require('../helper_functions/functions');
const { furthestEnemies } = require('../helper_functions/functions');
const { closestEnemies } = require('../helper_functions/functions');

const postProtocol = async function (req, res) {
	try {
		let protocol = req.body;

		switch (req.body.protocols[0]) {
			case 'avoid-mech':
				return await res.status(200).send(avoidMech(protocol));
			case 'prioritize-mech':
				return await res.status(200).send(prioritizeMech(protocol));
			case 'assist-allies':
				return await res.status(200).send(assistAllies(protocol));
			case 'avoid-crossfire':
				return await res.status(200).send(avoidCrossfire(protocol));
			case 'closest-enemies':
				return await res.status(200).send(closestEnemies(protocol));
			case 'furthest-enemies':
				return await res.status(200).send(furthestEnemies(protocol));
		}
	} catch (error) {
		res.status(500).send('Can not read the protocol you send to me');
	}
};

module.exports = {
	postProtocol,
};
