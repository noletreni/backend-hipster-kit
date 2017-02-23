import knex from '../utils/db';

const eventSummaryFields = ['id', 'name', 'startDate', 'description'];

export const dbGetEvents = () => (
  knex('events')
    .select(eventSummaryFields)
);

export const dbGetEvent = id => (
  knex('events')
    .first('*')
    .where({ id })
);

export const dbCreateEvent = (ownerId, fields) => (
  knex('events')
    .insert({ ...fields, ownerId })
    .returning('*')
    .then(results => results[0])
);
