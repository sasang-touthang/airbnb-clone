//@ts-nocheck
import React from "react";
import { Divider } from "@mui/material";
import { LiaCopyright } from "react-icons/lia";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import "./styles.css";

const Footer = (): JSX.Element => {
  return (
    <div className="footer_container">
      <div className="footer_section section_padding">
        <div className="support_container footer_padding">
          <p className="bold">Support</p>
          <p>Help Centre</p>
          <p>AirCover</p>
          <p>Combating discrimination</p>
          <p>Supporting people with disabilities</p>
          <p>Cancellation options</p>
          <p>Report neighbourhood concern</p>
        </div>
        <div className="hosting_container footer_padding">
          <p className="bold">Hosting</p>
          <p>Airbnb your home</p>
          <p>AirCover for Hosts</p>
          <p>Hosting resources</p>
          <p>Community forum</p>
          <p>Hosting responsibly</p>
        </div>
        <div className="airbnb_container footer_padding">
          <p className="bold">Airbnb</p>
          <p>Newsroom</p>
          <p>New features</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Airbnb.org disaster relief</p>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="legal_container section_padding">
        <div className="legal_section">
          <p>
            <LiaCopyright /> 2023 Airbnb, inc.
          </p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Company Details</p>
        </div>
        <div className="legal_section">
          <FiGlobe />
          <p>English(IN)</p>
          <p>INR</p>
          <AiFillFacebook />
          <AiFillTwitterSquare />
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
