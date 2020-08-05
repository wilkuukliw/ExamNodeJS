// DDL = DEFINE = CREATE, DROP (this is below migrations file)
// DML = MANIPULATE = SELECT, UPDATE, DELETE (seeds)  --> planting seeds (populate data in database)

exports.up = function(knex) {

    return knex.schema
        .createTable('doggos', (table) => {
            table.increments('id').notNullable();
            table.string('doggo').unique().notNullable();
            table.integer('age').notNullable();
            table.string('breed').notNullable();
            table.string('picture1').notNullable();
            table.string('description').notNullable();
            table.string('picture2').notNullable();
            table.string('picture3').notNullable();
        })
        .createTable('applications', (table) => {
            table.increments('id').notNullable();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.integer('phone').notNullable();
            table.integer('doggo_id').unsigned().notNullable();
            table.foreign('doggo_id').references('doggos.id');
            table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
            table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        })
        .createTable('users', (table) => {
            table.increments('id').notNullable();
            table.string('username').unique().notNullable();
            table.string('password').notNullable();
            table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
            table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('applications')
        .dropTableIfExists('doggos')
        .dropTableIfExists('users');
};

//If exports.up created a table, then exports.down will drop that table. If exports.up added a column, then exports.down will remove that column. The reason to include exports.down is so that you can quickly undo a migration should you need to.