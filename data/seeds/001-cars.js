
exports.seed = function (knex) {
  return knex('cars')
    .truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: '123', make: 'Toyota', model: 'Camry', mileage: 10001 },
        { VIN: '383', make: 'Lexus', model: 'LS430', mileage: 10002 },
        { VIN: '555', make: 'Mercedes', model: 'G63', mileage: 10003 },
        { VIN: '444', make: 'Hyundai', model: 'Sonata', mileage: 10004 },
        { VIN: '111', make: 'BMW', model: 'M4', mileage: 10050 },
      ]);
    });
};