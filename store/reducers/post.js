import { POSTS, POSTDETAILS } from "../../data/dummy-data";
import { CREATE_FAVPOST } from "../constants/action-types";

const initialState = {
  posts: POSTS,
  filteredPosts: POSTS,
  postsDetails: POSTDETAILS,
  favoritePosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FAVPOST:
      const existingIndex = state.favoritePosts.findIndex(
        (post) => post.id === action.postId
      );
      if (existingIndex > -1) {
        const updatedfavPosts = [...state.favoritePosts];
        updatedfavPosts.splice(existingIndex, 1);
        return { ...state, favoritePosts: updatedfavPosts };
      } else {
        const meal = state.posts.find((post) => post.id === action.postId);

        return {
          ...state,
          favoritePosts: state.favoritePosts.concat(meal),
        };
      }
    default:
      return state;
  }
};

export default postsReducer;
