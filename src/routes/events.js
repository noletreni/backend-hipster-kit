import {
  getEvents,
  getEvent,
  createEvent,
} from '../controllers/events';
import { getAuthWithScope } from '../utils/auth';

const events = [
  // Get a list of all events
  {
    method: 'GET',
    path: '/events',
    handler: getEvents,
  },

  // Get information about a specific event
  {
    method: 'GET',
    path: '/events/{id}',
    handler: getEvent,
  },

  // Create a new event
  {
    method: 'POST',
    path: '/events',
    config: getAuthWithScope('user'),
    handler: createEvent,
  },
];

export default events;

// Here we register the routes
export const routes = server => server.route(events);
