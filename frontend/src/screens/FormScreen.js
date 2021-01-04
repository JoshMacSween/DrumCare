import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// import NetlifyForm from "react-ssg-netlify-forms";
import { useHistory } from "react-router";

const FormScreen = () => {
  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
    >
      <Form.Control type="hidden" name="form-name" value="contact" />
      <Form.Control type="text" name="name" placeholder="Name" />
      <br />
      <Form.Control type="email" name="email" placeholder="Email" />
      <br />
      <Form.Control type="number" name="phone number" placeholder="Phone Number" />
      <br />
      <Form.Control type="date" name="date of service" placeholder="preffered date of service" />
      <Form.Control name="Service Package" as="select">
        <option>Tuning</option>
        <option>Bronze Maintenance Package</option>
        <option>Silver Maintenance Package</option>
        <option>Gold Maintenance Package</option>
        <option>Other</option>
      </Form.Control>
{/*
      <Form.Control type="number" name="phoneNumber" />
      <Form.Control required type="date" name="date" />
      <Form.Control type="number" name="kitSize" />
      <Form.Control required name="Service Package" as="select">
        <option>Tuning</option>
        <option>Bronze Maintenance Package</option>
        <option>Silver Maintenance Package</option>
        <option>Gold Maintenance Package</option>
        <option>Other</option>
      </Form.Control>
      {formValues.package === "Other" ? (
        <Form.Group>
          What would you like to tell us?
          <Form.Control as="textarea" rows={3} name="inquiryText" />
        </Form.Group>
      ) : null} */}

      <Form.Control as="textarea" name="message" />

      <button type="submit">Send</button>
    </Form>
  );
};

export default FormScreen;
