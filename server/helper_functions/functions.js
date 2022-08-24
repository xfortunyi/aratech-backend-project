const avoidMech = (cases) => {
	for (let i = 0; i <= cases.protocols.length; i++) {
		if (cases.protocols[i] === 'avoid-mech') {
			for (let j = 0; j <= cases.scan.length; j++) {
				if (cases.scan[j].enemies.type !== 'mech') {
					for (let k = 0; k <= cases.scan.length; k++) {
						return cases.scan[k].coordinates;
					}
				}
			}
		}
	}
};

const prioritizeMech = (cases) => {
	for (let i = 0; i <= cases.protocols.length; i++) {
		if (cases.protocols[i] === 'prioritize-mech') {
			for (let j = 0; j <= cases.scan.length; j++) {
				if (cases.scan[j].enemies.type === 'mech') {
					for (let k = 0; k <= cases.scan.length; k++) {
						return cases.scan[k].coordinates;
					}
				}
			}
		}
	}
};

const closestEnemies = (cases) => {
	for (let i = 0; i <= cases.protocols.length; i++) {
		if (cases.protocols[i] === 'closest-enemies') {
			for (let j = 0; j <= cases.scan.length; j++) {}
		}
	}
};

const furthestEnemies = (cases) => {
	for (let i = 0; i <= cases.protocols.length; i++) {
		if (cases.protocols[i] === 'furthest-enemies') {
			for (let j = 0; j <= cases.scan.length; j++) {
				Math.hypot(cases.scan[j].coordinates.x, cases.scan[j].coordinates.y);
				console.log(
					Math.hypot(cases.scan[j].coordinates.x, cases.scan[j].coordinates.y)
				);
				if (
					Math.hypot(cases.scan[j].coordinates.x, cases.scan[j].coordinates.y) >
					Math.hypot(
						cases.scan[j + 1].coordinates.x,
						cases.scan[j + 1].coordinates.y
					)
				) {
					return cases.scan[j].coordinates;
				} else {
					return cases.scan[j + 1].coordinates;
				}
			}
		}
	}
};

const assistAllies = (cases) => {
	for (let i = 0; i <= cases.protocols.length; i++) {
		if (cases.protocols[i] === 'assist-allies') {
			for (let j = 0; j <= cases.scan.length; j++) {
				if (cases.scan[j].allies) {
					return cases.scan[j].coordinates;
				}
			}
		}
	}
};

const avoidCrossfire = (cases) => {
	for (let i = 0; i <= cases.protocols.length; i++) {
		if (cases.protocols[i] === 'avoid-crossfire') {
			for (let j = 0; j <= cases.scan.length; j++) {
				if (!cases.scan[j].allies) {
					return cases.scan[j].coordinates;
				}
			}
		}
	}
};

module.exports = {
	avoidMech,
	prioritizeMech,
	closestEnemies,
	avoidCrossfire,
	assistAllies,
	furthestEnemies,
};
