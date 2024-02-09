//@ts-nocheck
import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import "./styles.css";

const NavBar = (): JSX.Element => {
  return (
    <div className="mobile_navbar_container section_padding">
      <div className="mobile_search_bar">
        <div className="mobile_navbar_left_side">
          <div className="mobile_search_icon">
            <FiSearch size={17} />
          </div>
          <div className="mobile_navbar_placeholder">
            <p
              style={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px" }}
            >
              Anywhere
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                color: "#717171",
                fontSize: "12px",
                lineHeight: "!6px",
              }}
            >
              <p>Any week</p>
              <p>|</p>
              <p>Add guests</p>
            </div>
          </div>
        </div>
        <div>
          <FiFilter />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
