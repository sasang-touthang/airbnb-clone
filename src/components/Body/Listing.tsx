//@ts-nocheck
import React from "react";
import { locations } from "../../data/location";
import { Grid } from "@mui/material";
import Carousel from "./Carousel";
import { AiFillStar } from "react-icons/ai";
import "./styles.css";

const Listing = (): JSX.Element => {
  return (
    <Grid
      mt="0.1rem"
      mb="2rem"
      maxWidth={"false"}
      container
      rowSpacing={5}
      columnSpacing={3}
      className="listing_container section_padding"
    >
      {locations.map((hotel, id) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            xl={2.4}
            key={id}
            className="hotel_container"
          >
            <Carousel location={hotel} />
            <div style={{ marginTop: "1rem" }}>
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {hotel.location}
              </p>
              <div style={{ color: "gray", marginBottom: "10px" }}>
                <p>{hotel.days}</p>
                <p>{hotel.price}</p>
              </div>

              <p style={{ display: "flex", alignItems: "center" }}>
                <AiFillStar />
                {hotel.rating}
              </p>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Listing;
