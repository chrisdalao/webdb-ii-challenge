exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('car-dealer')
    .truncate()//resets the primary back to 1
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { make: 'Toyota', model: 'Camry', price: 20000.00, type: 'sedan', color: 'white' },
        { make: 'Lexus', model: 'LS430', price: 30000.00, type: 'sedan', color: 'gold' },
        { make: 'Mercedes', model: 'G63', price: 120000.00, type: 'suv', color: 'black' },
        { make: 'Hyundai', model: 'Sonata', price: 30000.00, type: 'sedan', color: 'silver' },
        { make: 'BMW', model: 'M4', price: 80000.00, type: 'coupe', color: 'blue' },
      ]);
    });
};
