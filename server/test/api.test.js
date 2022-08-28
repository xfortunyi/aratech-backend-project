const request = require('supertest');
const assert = require('assert');
const should = require('chai').should();
const app = require('../index');
const {
	prioritizeAllies,
	compareMech,
	convertProtocolToFunction,
} = require('../lib/helper_functions/functions');
const { scan1, scan8 } = require('./mocks.js').scans;
const { scan1Result } = require('./mocks').scanResults;

describe('POST /radar', () => {
	it('Retorna las coordenadas válidas con un status 200', function (done) {
		request(app)
			.post('/radar')
			.send(scan1)
			.expect(scan1Result)
			.expect(200)
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
});

describe('Test helper_functions', () => {
	it('función compareMech', () => {
		scan8.scan.sort(compareMech).should.eql([
			{ coordinates: { x: 0, y: 1 }, enemies: { type: 'mech', number: 1 } },
			{ coordinates: { x: 0, y: 99 }, enemies: { type: 'mech', number: 1 } },
			{
				coordinates: { x: 0, y: 10 },
				enemies: { type: 'soldier', number: 10 },
			},
		]);
	});
	it('función prioritizeAllies', () => {
		scan1.scan.sort(prioritizeAllies).should.eql([
			{
				coordinates: { x: 0, y: 80 },
				allies: 5,
				enemies: { type: 'mech', number: 1 },
			},
			{
				coordinates: { x: 0, y: 40 },
				enemies: { type: 'soldier', number: 10 },
			},
		]);
	});
	it('función convertProtocolToFunction', () => {
		assert.equal(
			convertProtocolToFunction('closest-enemies'),
			'closestEnemies'
		);
		assert.equal(
			convertProtocolToFunction('furthest-enemies'),
			'furthestEnemies'
		);
		assert.equal(convertProtocolToFunction('assist-allies'), 'assistAllies');
		assert.equal(
			convertProtocolToFunction('avoid-crossfire'),
			'avoidCrossfire'
		);
		assert.equal(convertProtocolToFunction('avoid-mech'), 'avoidMech');
		assert.equal(
			convertProtocolToFunction('prioritize-mech'),
			'prioritizeMech'
		);
	});
});
