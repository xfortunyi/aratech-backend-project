const Drone = require('../lib/processProtocols.js');
const {
	convertProtocolToFunction,
} = require('../lib/helper_functions/functions');

const radarInstructions = async function (req, res) {
	try {
		const drone = new Drone(req.body);
		const { protocols } = req.body;
		for (const protocol of protocols) {
			drone[convertProtocolToFunction(protocol)]();
		}
		res.status(200).send(drone.finally());
	} catch (error) {
		res.status(500).send('Can not read the protocol you send to me');
	}
};

module.exports = {
	radarInstructions,
};
