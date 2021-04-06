import {
  ADD_TO_LIKED_VIDEOS,
  ADD_TO_SAVED_VIDEOS,
  ADD_TO_UNLIKED_VIDEOS,
  REMOVE_FROM_SAVED_VIDEOS,
  REMOVE_FROM_LIKED_VIDEOS,
} from "./actions";

export const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_SAVED_VIDEOS:
      return {
        ...state,
        savedVideos: [...state.savedVideos, payload],
      };
    case REMOVE_FROM_SAVED_VIDEOS:
      return {};
    case ADD_TO_LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: [...state.likedVideos, payload],
      };
      
    case ADD_TO_UNLIKED_VIDEOS:
        return {
          ...state,
          unlikedVideos: [...state.unlikedVideos, payload],
        };
    case REMOVE_FROM_LIKED_VIDEOS:
      return {};

    default:
      break;
  }
};
