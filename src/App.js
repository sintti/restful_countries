import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import countryServices from './services/countries'
import Countries from './components/Countries'
import Country from './components/Country'
import Footer from './components/Footer'

const App = () => {
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    countryServices
      .getAll()
      .then(response =>{
        setCountries(response)
      })
      .catch(e => console.log('error happened: ', e.message))
  }, [])
  
  return (
    <Container>
      <Router>
        <h1>RESTful countries by Erkka</h1>
          <Switch>
            <Route path='/country/:id'>
              <Country />
            </Route>
            <Route path='/'>
              <Countries countries={countries} />
            </Route> 
          </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
