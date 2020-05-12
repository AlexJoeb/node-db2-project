
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '1FTRF12W29KC89395', make: 'Ford', model: 'Focus', mileage: 12395, title_status: "clean" },
        { vin: '5XXGN4A74EG306546', make: 'Honda', model: 'Pilot', mileage: 14991 },
      ]);
    });
};
