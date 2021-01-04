import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// import NetlifyForm from "react-ssg-netlify-forms";
import { useHistory } from "react-router";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FormScreen = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({});

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValues }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => setFormValues({ [e.target.name]: e.target.value });

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit} data-netlify="true">
        <Form.Label>Your Name: </Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />

        <Form.Label>Your Email: </Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <Form.Label>Your Number: </Form.Label>
        <Form.Control
          type="number"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
        />
        <Form.Label>Preffered Date of Service</Form.Label>
        <Form.Control
          required
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
        />
        <Form.Label>Kit Size: </Form.Label>
        <Form.Control
          type="number"
          name="kitSize"
          value={formValues.kitSize}
          onChange={handleChange}
        />

        <Form.Label>What Service Would You Like</Form.Label>
        <Form.Control
          defaultValue={formValues.package}
          required
          name="Service Package"
          as="select"
          onChange={handleChange}
        >
          <option>Tuning</option>
          <option>Bronze Maintenance Package</option>
          <option>Silver Maintenance Package</option>
          <option>Gold Maintenance Package</option>
          <option>Other</option>
        </Form.Control>
        {formValues.package === "Other" ? (
          <Form.Group>
            <Form.Label className="mt-3">
              What would you like to tell us?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="inquiryText"
              value={formValues.inquiryText}
              onChange={handleChange}
            />
          </Form.Group>
        ) : null}

        <Form.Label>Message: </Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />

        <Button type="submit" block>Send</Button>
      </Form>
    </Container>
  );
};

export default FormScreen;
