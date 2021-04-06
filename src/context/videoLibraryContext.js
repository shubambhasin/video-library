import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "../reducer/reducerFunction";

export const videoLibraryContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    savedVideos: [],
    likedVideos: [],
    unlikedVideos: [],
    history: [],
    myPlaylist: [],
  });
  return (
    <div>
      <videoLibraryContext.Provider value={{ state, dispatch }}>
        {children}
      </videoLibraryContext.Provider>
    </div>
  );
};

export const useVideo = () => useContext(videoLibraryContext);
