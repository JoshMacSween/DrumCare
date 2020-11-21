import React from 'react'
import { Card } from 'react-bootstrap'

export default function ServiceCard({ title, description }) {
  return (
    <>
      <Card className="rounded bg-primary text-white">
        <Card.Body>
          <Card.Title>
            <Card.Header className="text-center text-light">
              <h5 className="text-white">{title}</h5>
            </Card.Header>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
