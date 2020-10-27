import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const ContactScreen = () => {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    kitSize: '',
    package: 'Bronze',
    message: '',
  })

  const [result, setResult] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/form', { ...inquiry })
      .then((response) => {
        setResult(response.data)
        setInquiry({
          name: '',
          email: '',
          phoneNumber: '',
          kitSize: '',
          package: '',
          message: '',
        })
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Message send failure',
        })
      })
  }

  const handleChangeName = (event) => {
    const currentData = event.target.value
    setInquiry({ ...inquiry, name: currentData })
  }
  const handleChangeEmail = (event) => {
    const currentData = event.target.value
    setInquiry({ ...inquiry, email: currentData })
  }
  const handleChangeNumber = (event) => {
    const currentData = event.target.value
    setInquiry({ ...inquiry, phoneNumber: currentData })
  }
  const handleChangeKit = (event) => {
    const currentData = event.target.value
    setInquiry({ ...inquiry, kitSize: currentData })
  }
  const handleChangePackage = (event) => {
    const currentData = event.target.value
    setInquiry({ ...inquiry, package: currentData })
  }
  // const handleChangeInquiryText = (event) => {
  //   const currentData = event.target.value
  //   setInquiry({ ...inquiry, inquiryText: currentData })
  // }

  return (
    <>
      <Form onSubmit={handleSubmit} className="py-3">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={inquiry.name}
            onChange={handleChangeName}
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            value={inquiry.email}
            onChange={handleChangeEmail}
          />
          <br />
          <Form.Label>Telephone Number</Form.Label>
          <Form.Control
            required
            type="number"
            value={inquiry.phoneNumber}
            onChange={handleChangeNumber}
          />
        </Form.Group>
        <Form.Group controlId="kitsize">
          <Form.Label>How many pieces is your kit?</Form.Label>
          <Form.Control
            required
            type="number"
            value={inquiry.kitSize}
            onChange={handleChangeKit}
          />
        </Form.Group>
        <Form.Group controlId="package">
          <Form.Label>What Package Would You Like</Form.Label>
          <Form.Control defaultValue={inquiry.package} required as="select" onChange={handleChangePackage}>
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </Form.Control>
        </Form.Group>

        {/* <Form.Group controlId="inquiryText">
          <Form.Label>Anything else you'd like us to know?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="inquiryText"
            value={inquiry.inquiryText}
            onChange={handleChangeInquiryText}
          /> */}
        {/* </Form.Group> */}
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ContactScreen
