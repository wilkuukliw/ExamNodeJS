exports.seed = function(knex) {
  
    return knex('applications').del()
      .then(() => {
        return knex('doggos').del();
      });
  };