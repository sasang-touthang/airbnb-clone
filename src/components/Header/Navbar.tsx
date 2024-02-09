//@ts-nocheck
import * as React from "react";
import airbnb from "./airbnb-icon.svg";
import { FiGlobe, FiSearch } from "react-icons/fi";
import Profile from "./Profile";
import "./styles.css";

function Navbar(): JSX.Element {
  return (
    <div className="navbar_container section_padding">
      <div className="img_container navbar_element">
        <img
          style={{ width: "6.8rem", height: "3.5rem", cursor: "pointer" }}
          src={airbnb}
          alt="hello"
        />
      </div>
      <div className="search_bar_container navbar_element">
        <div className="search_bar">
          <p style={{ padding: "0 1rem 0 0.7rem" }}>Anywhere</p>
          <p
            style={{
              borderLeft: "1px solid rgb(214, 188, 188)",
              padding: "0 1rem",
            }}
          >
            Any week
          </p>
          <p
            style={{
              borderLeft: "1px solid rgb(214, 188, 188)",
              padding: "0 0.7rem 0 1rem",
              color: "gray",
            }}
          >
            Add guests
          </p>
          <div className="search_icon">
            <FiSearch />
          </div>
        </div>
      </div>
      <div className="profile_container navbar_element">
        <p className="profile_text">Airbnb your home</p>
        <FiGlobe className="profile_globe" size={33} />
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
