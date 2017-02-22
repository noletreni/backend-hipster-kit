exports.up = knex => (
  knex.schema
    .createTableIfNotExists('users', (table) => {
      table.increments('id').primary();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.enu('scope', ['admin', 'user', 'participant']);
      table.text('name').notNullable();
      table.text('email').notNullable().unique();
      table.text('password').notNullable();
      table.text('description');
      table.binary('image');
    })
    .createTableIfNotExists('events', (table) => {
      table.increments('id').primary();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.text('name').notNullable();
      table.integer('ownerId').references('id').inTable('users').onDelete('SET NULL');
      table.timestamp('startDate').notNullable();
      table.timestamp('endDate');
      table.text('description');
      table.integer('participantLimit');
      table.json('extraFields');
    })
    .createTableIfNotExists('registrations', (table) => {
      table.increments('id').primary();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.integer('eventId').references('id').inTable('events').notNullable().onDelete('CASCADE');
      table.integer('userId').references('id').inTable('users').notNullable().onDelete('CASCADE');
      table.json('extraAnswers');
    })
);

exports.down = knex => (
  knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('events')
    .dropTableIfExists('registrations')
);
