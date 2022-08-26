const compareMech = function compare(a, b) {
	if (a.enemies.type === 'mech' && b.enemies.type !== 'mech') {
		return -1;
	} else if (a.enemies.type !== 'mech' && b.enemies.type === 'mech') {
		return 1;
	} else {
		return 0;
	}
};

const prioritizeAllies = function compare(a, b) {
	if (a.allies && b.allies) {
		return b.allies - a.allies;
	} else if (a.allies && !b.allies) {
		return -1;
	} else if (!a.allies && b.allies) {
		return 1;
	} else {
		return 0;
	}
};

const convertProtocolToFunction = function (protocol) {
	protocol =
		protocol.split('-')[0] +
		protocol.split('-')[1].charAt(0).toUpperCase() +
		protocol.split('-')[1].slice(1);
	return protocol;
};

module.exports = {
	compareMech,
	prioritizeAllies,
	convertProtocolToFunction,
};
