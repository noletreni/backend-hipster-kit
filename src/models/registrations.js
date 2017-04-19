import knex from '../utils/db';

const registrationSummaryFields = ['id', 'eventId', 'userId', 'extraAnswers'];

export const dbGetRegistrations = () => (
  knex('registrations')
    .select(registrationSummaryFields)
);

export const dbCreateRegistration = (userId, fields) => (
  knex('registrations')
    .insert({ ...fields, userId })
    .returning('*')
    .then(results => results[0])
);
