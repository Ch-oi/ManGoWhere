import { CREATE_FAVPOST, CREATE_POST } from "../constants/action-types";

export const createFavPost = (id) => {
  return { type: CREATE_FAVPOST, postId: id };
};

export const createNewPost = (postObject) => {
  return { type: CREATE_POST, post: postObject };
};
