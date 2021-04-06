import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useVideo } from "../context/videoLibraryContext";

const NavBar = styled.div`
  display: flex;
  gap: 4rem;
  background-color: red;
  width: 100%;
  height: 70px;
  margin: 0rem 0 2rem 0;
`;

const Navbar = () => {

  const { state } = useVideo()
  return (
    <div className="navbar mtb2-rem">
      <NavBar>

        <Link to="/">Home</Link>
        <Link to="/saved">Saved ({state.savedVideos.length})</Link>
        <Link to="/liked">Liked ({state.likedVideos.length})</Link>
        <Link to="/unliked">Unliked ({state.unlikedVideos.length})</Link>
        <Link to="/history">History ({state.history.length})</Link>
    
      </NavBar>
    </div>
  );
};

export default Navbar;
