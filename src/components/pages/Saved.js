import React from "react";
import ReactPlayer from "react-player";
import { useVideo } from "../../context/videoLibraryContext";
const Saved = () => {
  const { state, dispatch } = useVideo();
  return (
    <div>
      <h1 className="h1 mtb1-rem">Saved videos</h1>
      {state.savedVideos.map((data) => {
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
                <button className="btn btn-blue">Like</button>
                <button className="btn btn-red">Unlike</button>
              </span>
              <span>
                <button className="btn btn-green">Save video</button>
                <button className="btn btn-orange">Add to playlist</button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Saved;
