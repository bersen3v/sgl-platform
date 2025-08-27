import getEventById from "@/entities/gameEvent/api/methods/search/getEventById";
import authUser from "./methods/authUser";
import getUserById from "./methods/getUserById";
import getUserEvents from "./methods/getUserEvents";
import sendProposalRequest from "./methods/sendProposalRequest";
import getAllUsers from "./methods/getAllUsers";
import createUser from "./methods/createUser";
import updateUser from "./methods/updateUser";
import removeUser from "./methods/removeUser";

export const userApiManager = {
  authUser,
  getUserById,
  getUserEvents,
  sendProposalRequest,
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
};
