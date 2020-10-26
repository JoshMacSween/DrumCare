import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/HomeScreen'
import './bootstrap.min (lux).css'
import './index.css'
import Form from './screens/FormScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
