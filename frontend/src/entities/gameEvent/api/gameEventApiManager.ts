import createEvent from "./methods/create/createEvent";
import editEvent from "./methods/edit/editEvent";
import removeEvent from "./methods/remove/removeEvent";
import getAllEvents from "./methods/search/getAllEvents";
import getEventById from "./methods/search/getEventById";
import searchEvents from "./methods/search/searchEvents";

export const gameEventApiManager = {
  searchEvents,
  getEventById,
  getAllEvents,
  createEvent,
  editEvent,
  removeEvent,
};
