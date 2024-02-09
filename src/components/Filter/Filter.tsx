//@ts-nocheck
import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { locationsTab } from "../../data/filterImages";
import "./styles.css";

export {};

function Filter(): JSX.Element {
  const [value, setValue] = React.useState(0);
  const [y, sety] = React.useState(0);

  function handleChange(e: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  window.onscroll = () => {
    sety(window.scrollY);
  };

  return (
    <Container
      sx={{
        position: "sticky",
        top: "5rem",
        bgcolor: "#fff",
        boxShadow:
          y >= 7 && window.innerWidth > 750
            ? "0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)"
            : "none",
        transition: "all 0.1s linear",
        zIndex: "2",
      }}
      className="filter_container section_padding"
      disableGutters
      maxWidth={false}
    >
      <Box className="tabs_container" mt="7px">
        <Tabs
          variant="scrollable"
          scrollButtons
          value={value}
          onChange={handleChange}
          sx={{
            maxWidth: "100%",
            "& button": {
              margin: "0 2rem 0 0",
              padding: "0.5rem 0 0",
              minWidth: "3rem",
            },
            "& button.Mui-selected": {
              color: "black",
            },
            "& button:hover": {
              borderBottom: "2px solid #DDDDDD",
            },
            "& .MuiTabs-indicator": {
              bgcolor: "black",
            },
            "& .MuiTabScrollButton-root": {
              width: "auto",
              padding: "0 0.1rem",
              background: "white",
              opacity: "1",
              boxShadow: "3px 10px 20px 20px white",
              zIndex: "2",
            },
            "& .MuiSvgIcon-root": {
              outline: "1px solid #DDDDDD",
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
            "& .MuiTabs-scroller": {
              // lg: { margin: "0   -25px" },
              // md: { margin: "0 -25px" },
              sm: { margin: "0 -25px" },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return (
              <Tab
                disableRipple
                sx={{
                  fontSize: "0.6rem",
                  fontWeight: "bold",
                  margin: "0 0.8rem",
                }}
                key={tab.id}
                icon={tab.icon}
                label={tab.label}
              />
            );
          })}
        </Tabs>
      </Box>
    </Container>
  );
}

export default Filter;
