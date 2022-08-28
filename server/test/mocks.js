const scan1 = {
	protocols: ['avoid-mech'],
	scan: [
		{ coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
		{
			coordinates: { x: 0, y: 80 },
			allies: 5,
			enemies: { type: 'mech', number: 1 },
		},
	],
};
const scan1Result = { x: 0, y: 40 };
const scan2 = {
	protocols: ['prioritize-mech'],
	scan: [
		{ coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
		{
			coordinates: { x: 0, y: 80 },
			allies: 5,
			enemies: { type: 'mech', number: 1 },
		},
	],
};
const scan2Result = { x: 0, y: 80 };
const scan3 = {
	protocols: ['closest-enemies'],
	scan: [
		{ enemies: { number: 10, type: 'soldier' }, coordinates: { y: 35, x: 5 } },
		{ enemies: { number: 20, type: 'soldier' }, coordinates: { y: 30, x: 10 } },
	],
};
const scan3Result = { x: 10, y: 30 };
const scan4 = {
	protocols: ['furthest-enemies'],
	scan: [
		{ enemies: { number: 10, type: 'soldier' }, coordinates: { y: 35, x: 5 } },
		{ enemies: { number: 20, type: 'soldier' }, coordinates: { y: 30, x: 10 } },
	],
};
const scan4Result = { x: 5, y: 35 };
const scan5 = {
	protocols: ['assist-allies'],
	scan: [
		{
			enemies: { number: 10, type: 'soldier' },
			allies: 3,
			coordinates: { y: 35, x: 5 },
		},
		{ enemies: { number: 20, type: 'soldier' }, coordinates: { y: 5, x: 35 } },
	],
};
const scan5Result = { x: 5, y: 35 };
const scan6 = {
	protocols: ['avoid-crossfire'],
	scan: [
		{
			enemies: { number: 10, type: 'soldier' },
			allies: 3,
			coordinates: { y: 35, x: 5 },
		},
		{ enemies: { number: 20, type: 'soldier' }, coordinates: { y: 5, x: 35 } },
	],
};
const scan6Result = { x: 35, y: 5 };
const scan7 = {
	protocols: ['furthest-enemies'],
	scan: [
		{ enemies: { number: 10, type: 'soldier' }, coordinates: { y: 35, x: 5 } },
		{ enemies: { number: 20, type: 'soldier' }, coordinates: { y: 30, x: 10 } },
	],
};
const scan7Result = { x: 5, y: 35 };
const scan8 = {
	protocols: ['closest-enemies', 'avoid-mech'],
	scan: [
		{ coordinates: { x: 0, y: 1 }, enemies: { type: 'mech', number: 1 } },
		{ coordinates: { x: 0, y: 10 }, enemies: { type: 'soldier', number: 10 } },
		{ coordinates: { x: 0, y: 99 }, enemies: { type: 'mech', number: 1 } },
	],
};
const scan8Result = { x: 0, y: 10 };

module.exports = {
	scans: {
		scan1,
		scan2,
		scan3,
		scan4,
		scan5,
		scan6,
		scan7,
		scan8,
	},

	scanResults: {
		scan1Result,
		scan2Result,
		scan3Result,
		scan4Result,
		scan5Result,
		scan6Result,
		scan7Result,
		scan8Result,
	},
};
