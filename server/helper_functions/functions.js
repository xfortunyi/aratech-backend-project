//per optimitzar-ho haig d'eliminar l'ultim return
// i fer un return en el cases = {...cases, scan: whatever}

const avoidMech = (cases) => {
	if (cases.protocols.includes('avoid-mech')) {
		const filteredScan = cases.scan.filter((scan) => {
			return scan.enemies.type !== 'mech';
		});
		cases = { ...cases, scan: filteredScan };
	}
	return cases.scan[0].coordinates;
};

const prioritizeMech = (cases) => {
	if (cases.protocols.includes('prioritize-mech')) {
		const filteredScan = cases.scan.filter((scan) => {
			return scan.enemies.type === 'mech';
		});
		cases = { ...cases, scan: filteredScan };
	}
	return cases.scan[0].coordinates;
};

const closestEnemies = (cases) => {
	if (cases.protocols.includes('closest-enemies')) {
		const sortedScan = cases.scan.sort((a, b) => {
			return (
				Math.hypot(a.coordinates.x, a.coordinates.y) -
				Math.hypot(b.coordinates.x, b.coordinates.y)
			);
		});
		cases = { ...cases, scan: sortedScan };
	}
	return cases.scan[0].coordinates;
};

const furthestEnemies = (cases) => {
	if (cases.protocols.includes('furthest-enemies')) {
		const sortedScan = cases.scan.sort((b, a) => {
			return (
				Math.hypot(a.coordinates.x, a.coordinates.y) -
				Math.hypot(b.coordinates.x, b.coordinates.y)
			);
		});
		cases = { ...cases, scan: sortedScan };
	}
	return cases.scan[0].coordinates;
};

const assistAllies = (cases) => {
	if (cases.protocols.includes('assist-allies')) {
		const filteredScan = cases.scan.filter((scan) => {
			return scan.hasOwnProperty('allies');
		});
		cases = { ...cases, scan: filteredScan };
	}
	return cases.scan[0].coordinates;
};

const avoidCrossfire = (cases) => {
	if (cases.protocols.includes('avoid-crossfire')) {
		const filteredScan = cases.scan.filter((scan) => {
			return !scan.hasOwnProperty('allies');
		});
		cases = { ...cases, scan: filteredScan };
	}
	return cases.scan[0].coordinates;
};

module.exports = {
	avoidMech,
	prioritizeMech,
	closestEnemies,
	avoidCrossfire,
	assistAllies,
	furthestEnemies,
};
