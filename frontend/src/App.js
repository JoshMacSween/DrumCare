import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/HomeScreen'
import './bootstrap.min (lux).css'
import './index.css'
import Form from './screens/FormScreen'
import About from './screens/AboutScreen'
import Sent from './screens/SentScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
          <Route path="/sent" component={Sent} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
