import React from 'react'
import ReactDOM from 'react-dom'
import MainContent from './MainContent'
import { Container } from 'react-bootstrap'
// import ServiceCard from './ServiceCard'

test('Renders a Heading', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainContent />, div)
  expect(div.querySelector('h4')).toBeTruthy()
})

test('Renders Horizontal Rule', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainContent />, div)
  expect(div.querySelector('hr')).toBeTruthy()
})
