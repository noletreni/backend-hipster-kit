import {
  dbGetEvents,
  dbGetEvent,
  dbCreateEvent,
} from '../models/events';

export const getEvents = (request, reply) => dbGetEvents().then(reply);
export const getEvent = (request, reply) => dbGetEvent(request.params.id).then(reply);
export const createEvent = (request, reply) => (
  dbCreateEvent(request.pre.user.id, request.payload).then(reply)
);
