import { CREATE_FAVPOST } from "../constants/action-types";

export const createFavPost = (id) => {
  return { type: CREATE_FAVPOST, postId: id };
};
