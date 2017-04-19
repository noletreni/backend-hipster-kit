import {
  getRegistrations,
  createRegistration,
} from '../controllers/registrations';
import { getAuthWithScope } from '../utils/auth';

const registrations = [
  // Get a list of all registrations
  {
    method: 'GET',
    path: '/registrations',
    handler: getRegistrations,
  },

  // Create a new event
  {
    method: 'POST',
    path: '/registrations',
    config: getAuthWithScope('user'),
    handler: createRegistration,
  },
];

export default registrations;

// Here we register the routes
export const routes = server => server.route(registrations);
