exports.seed = function(knex) {
 
    return knex('doggos').select().then(doggos => {
        return knex('applications').insert([
  
      { name: "Peggy Brown", email: "peggy33@gmail.com", phone: 79187877, doggo_id: doggos.find(doggo => doggo.doggo === 'Coco').id},
      { name: "Anna Wilczek", email: "anna.maria.wilczek@gmail.com", phone: 51393129, doggo_id: doggos.find(doggo => doggo.doggo === 'Tyson').id},
      { name: "Radek Pyzel", email: "ravsp33@gmail.com", phone: 12345678, doggo_id: doggos.find(doggo => doggo.doggo === 'Nicky').id}
    ]);
});

};