import {
  dbGetRegistrations,
  dbCreateRegistration,
} from '../models/registrations';

export const getRegistrations = (request, reply) => dbGetRegistrations().then(reply);
export const createRegistration = (request, reply) => (
  dbCreateRegistration(request.pre.user.id, request.payload).then(reply)
);
