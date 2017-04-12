import knex from '../utils/db';

const eventSummaryFields = ['id', 'name', 'startDate', 'description'];

export const dbGetEvents = () => (
  knex('events')
    .select(eventSummaryFields)
);

export const dbGetEvent = id => (
  knex('events')
    .first('events.*', 'users.name AS ownerName')
    .where({ 'events.id': id })
    .leftJoin('users', 'ownerId', 'users.id')
);

export const dbCreateEvent = (ownerId, fields) => (
  knex('events')
    .insert({ ...fields, ownerId })
    .returning('*')
    .then(results => results[0])
);
