const request = require('supertest');
const app = require('../index');

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
