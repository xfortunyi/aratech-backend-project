const {
	compareMech,
	prioritizeAllies,
} = require('./helper_functions/functions');

module.exports = class Drone {
	constructor(instructions) {
		this.protocols = instructions.protocols;
		this.scan = instructions.scan;
	}

	closestEnemies() {
		this.scan = this.scan.sort((a, b) => {
			return (
				Math.hypot(a.coordinates.x, a.coordinates.y) -
				Math.hypot(b.coordinates.x, b.coordinates.y)
			);
		});
		return this;
	}

	furthestEnemies() {
		this.scan = this.scan
			.sort((a, b) => {
				return (
					Math.hypot(a.coordinates.x, a.coordinates.y) -
					Math.hypot(b.coordinates.x, b.coordinates.y)
				);
			})
			.reverse();
		return this;
	}

	avoidMech() {
		this.scan = this.scan.filter(
			(position) => position.enemies.type !== 'mech'
		);
		return this;
	}

	prioritizeMech() {
		this.scan = this.scan.sort(compareMech);
		return this;
	}

	avoidCrossfire() {
		this.scan = this.scan.filter((position) => !position.allies);
	}

	assistAllies() {
		this.scan = this.scan.sort(prioritizeAllies);
		return this;
	}

	finally() {
		return this.scan.filter(
			(position) =>
				Math.hypot(position.coordinates.x, position.coordinates.y) <= 100
		)[0].coordinates;
	}
};
