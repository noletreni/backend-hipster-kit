const fixtureFactory = require('fixture-factory');

// 'foobar'
const dummyPassword = '$2a$10$jqtfUwulMw6xqGUA.IsjkuAooNkAjPT3FJ9rRiUoSTsUpNTD8McxC';

fixtureFactory.register('user', {
  email: 'internet.email',
  name: 'internet.userName',
  password: dummyPassword,
  description: 'lorem.sentences',
  scope: 'user',
});

fixtureFactory.register('event', {
  name: 'lorem.words',
  ownerId: 1,
  startDate: 'date.future',
  description: 'lorem.sentences',
});

// Generate one test admin user
const testUser = Object.assign({}, fixtureFactory.generateOne('user'), {
  email: 'foo@bar.com',
  scope: 'admin',
});

exports.seed = knex => (
  knex('users')
    .insert(testUser)
    .then(() => (
      knex.batchInsert('users', fixtureFactory.generate('user', 10))
    ))
    .then(() => (
      knex.batchInsert('events', fixtureFactory.generate('event', 10))
    ))
);
