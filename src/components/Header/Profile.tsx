//@ts-nocheck
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="profile_button"
        sx={{
          color: "#000",
          border: "1px solid rgb(239, 239, 239)",
          borderRadius: "2rem",
          width: "4.5rem",
          padding: "0.2rem 0.2em",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <GiHamburgerMenu style={{ width: "50%" }} size={17} />
        <CgProfile style={{ width: "50%" }} size={27} />
      </Button>
      <Menu
        sx={{ marginTop: "1rem" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            width: "23ch",
            borderRadius: "0.8rem",
          },
        }}
      >
        <MenuItem
          sx={{ fontSize: "0.9rem", padding: "0.8rem", fontWeight: "bold" }}
          onClick={handleClose}
        >
          Sign Up
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "0.9rem", padding: "0.8rem" }}
          onClick={handleClose}
        >
          Log In
        </MenuItem>
        <hr />
        <MenuItem
          sx={{ fontSize: "0.9rem", padding: "0.8rem" }}
          onClick={handleClose}
        >
          Airbnb your home
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "0.9rem", padding: "0.8rem" }}
          onClick={handleClose}
        >
          Help Center
        </MenuItem>
      </Menu>
    </div>
  );
}
