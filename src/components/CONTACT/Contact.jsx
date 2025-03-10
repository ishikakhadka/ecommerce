import React from "react";
import { Box } from "@mui/material";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <h3 class="abus text-center">REACH OUT TO US:</h3>
      <div class="maincontact">
        <div class="contact">
          <h3>
            📧E-mail:
            <br /> info@thriftandthreads.com
          </h3>
        </div>
        <div class="contact">
          <h3>
            📍 Address:
            <br /> Kathmandu, Nepal
          </h3>
        </div>
        <div class="contact">
          <h3>
            📞 Phone:
            <br /> +977-9876543210
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
