const request = require('supertest');
const assert = require('assert');
const app = require('../index');
const Drone = require('../lib/processProtocols');
const {
	prioritizeAllies,
	compareMech,
	convertProtocolToFunction,
} = require('../lib/helper_functions/functions');

describe('POST /radar', () => {
	it('Retorna las coordenadas x:5, y:70 en formato JSON con un status 200', function (done) {
		request(app)
			.post('/radar')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.send({
				protocols: ['furthest-enemies'],
				scan: [
					{
						enemies: { number: 10, type: 'soldier' },
						coordinates: { y: 35, x: 5 },
					},
					{
						enemies: { number: 10, type: 'soldier' },
						coordinates: { y: 70, x: 5 },
					},
					{
						enemies: { number: 20, type: 'soldier' },
						coordinates: { y: 30, x: 10 },
					},
				],
			})
			.expect({ y: 70, x: 5 })
			.expect(200)
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
});

describe('Test drone', () => {
	it('método closest-enemies', () => {
		let instructions = {
			protocols: ['closest-enemies'],
			scan: [
				{
					enemies: { number: 10, type: 'soldier' },
					coordinates: { y: 70, x: 5 },
				},
				{
					enemies: { number: 20, type: 'soldier' },
					coordinates: { y: 30, x: 10 },
				},
			],
		};
		let drone = new Drone(instructions);
		assert.equal(
			drone.closestEnemies(instructions),
			(instructions = {
				protocols: ['closest-enemies'],
				scan: [
					{
						enemies: { number: 20, type: 'soldier' },
						coordinates: { y: 30, x: 10 },
					},
					{
						enemies: { number: 10, type: 'soldier' },
						coordinates: { y: 70, x: 5 },
					},
				],
			})
		);
	});
});

describe('Test helper_functions', () => {
	it('función compareMech', () => {
		assert.equal(
			compareMech(
				(a = { enemies: { type: 'soldier' } }),
				(b = { enemies: { type: 'mech' } })
			),
			1
		);
	});
	it('función prioritizeAllies', () => {
		assert.equal(prioritizeAllies((a = { allies: 2 }), (b = { allies: 7 })), 5);
	});
	it('función convertProtocolToFunction', () => {
		assert.equal(
			convertProtocolToFunction('closest-enemies'),
			'closestEnemies'
		);
	});
});
