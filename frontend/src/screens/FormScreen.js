import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// import NetlifyForm from "react-ssg-netlify-forms";
import { useHistory } from "react-router";

const FormScreen = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" placeholder="Name" />
      <br />
      <input type="email" name="email" placeholder="Email" />
      <br />

      <button type="submit">Send</button>
    </form>
  );
};

export default FormScreen;
