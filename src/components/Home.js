import React from "react";
import ReactPlayer from "react-player";
import { useVideo } from "../context/videoLibraryContext";
import { videoData } from "../data/Data";
import {
  ADD_TO_SAVED_VIDEOS,
  isVideoInSaved,
  isVideoInLiked,
  isVideoInUnliked,
  ADD_TO_LIKED_VIDEOS,
  ADD_TO_UNLIKED_VIDEOS,
  REMOVE_FROM_UNLIKED_VIDEOS,
  REMOVE_FROM_LIKED_VIDEOS,
  REMOVE_FROM_SAVED_VIDEOS,
  REMOVE_FROM_HISTORY,
  ADD_TO_HISTORY,
  isWatched,
} from "../reducer/actions";

const Home = () => {
  const { state, dispatch } = useVideo();

  // ADDING TO SAVED

  const addToSaved = (state, data) => {
    if (isVideoInSaved(state, data) === false) {
      dispatch({ type: ADD_TO_SAVED_VIDEOS, payload: data });
    } else {
      dispatch({ type: REMOVE_FROM_SAVED_VIDEOS, payload: data });
    }
  };

  // ADDING TO LIKED VIDEOS / REMOVING FROM UNLIKED

  const addToLiked = (state, data) => {
    if (isVideoInLiked(state, data) === false) {
      dispatch({ type: ADD_TO_LIKED_VIDEOS, payload: data });
      dispatch({ type: REMOVE_FROM_UNLIKED_VIDEOS, payload: data });
    } else {
      dispatch({ type: REMOVE_FROM_LIKED_VIDEOS, payload: data });
    }
  };

  // ADDING TO UNLIKED VIDEOS / REMOVING FROM LIKED VIDEOS

  const addToUnliked = (state, data) => {
    if (isVideoInUnliked(state, data) === false) {
      dispatch({ type: ADD_TO_UNLIKED_VIDEOS, payload: data });
      dispatch({ type: REMOVE_FROM_LIKED_VIDEOS, payload: data });
    } else {
      dispatch({ type: REMOVE_FROM_UNLIKED_VIDEOS, payload: data });
    }
  };

  // add to history

  const addToHistory = (state, data) => {
    dispatch({ type: REMOVE_FROM_HISTORY, payload: data });
    dispatch({ type: ADD_TO_HISTORY, payload: data });
  };

  return (
    <div className="home-feed mtb2-rem">
      {videoData.map((data) => {
        return (
          <div className="video-card" key={data.id}>
            <ReactPlayer width="300px" height="auto" url={data.url} />
            <span className="flex gap-4">
              <p>{data.name}</p>
              <p>{data.date}</p>
            </span>
            <span />
            <span className="flex gap-4">
              <p>{data.duration}</p>
              <p>{data.timeAgo}</p>
            </span>
            <div className="flex gap-4">
              <span>
                <button
                  className="btn btn-blue"
                  onClick={() => addToLiked(state, data)}
                >
                  {" "}
                  {state.likedVideos.filter((video) => video.id === data.id)
                    .length === 0
                    ? "Like"
                    : "Liked"}
                </button>
                <button
                  className="btn btn-red"
                  onClick={() => addToUnliked(state, data)}
                >
                  {" "}
                  {state.unlikedVideos.filter((video) => video.id === data.id)
                    .length === 0
                    ? "Unlike"
                    : "Unliked"}
                </button>
              </span>
              <span>
                <button
                  className="btn btn-green"
                  onClick={() => addToSaved(state, data)}
                >
                  {state.savedVideos.filter((video) => video.id === data.id)
                    .length === 0
                    ? "Save video"
                    : "Saved video"}
                </button>
                <button className="btn btn-orange">Add to playlist</button>
                <button
                  className="btn btn-green"
                  onClick={() => addToHistory(state, data)}
                >
                  Watch now
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
