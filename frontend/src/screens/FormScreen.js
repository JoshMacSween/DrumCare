import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const ContactScreen = () => {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
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
        console.log(inquiry)
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
  const handleChangeDate = (event) => {
    const currentData = event.target.value
    setInquiry({ ...inquiry, date: currentData })
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
        <Form.Group>
          <Form.Label>Preffered Date of Service</Form.Label>
          <Form.Control
            required
            type="date"
            value={inquiry.date}
            onChange={handleChangeDate}
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
        <Form.Group controlId="packackage">
          <Form.Label>What Service Would You Like</Form.Label>
          <Form.Control
            defaultValue={inquiry.package}
            required
            as="select"
            onChange={handleChangePackage}
          >
            <option>Tuning</option>
            <option>Bronze Maintenance Package</option>
            <option>Silver Maintenance Package</option>
            <option>Gold Maintenance Package</option>
            <option>Other</option>
            {inquiry.package === 'Other' ? alert('Inquiry Sent!') : 'null'}
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
          <Button variant="primary" type="submit" href="/sent">
            Submit
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ContactScreen
