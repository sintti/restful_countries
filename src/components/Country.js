import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'

import countryServices from '../services/countries'

const Country = () => {
  const [country, setCountry] = useState(null)
  const isoCode = useParams().id
  const history = useHistory()
  
  useEffect(() => {
    countryServices
      .getByIsoCode(isoCode)
      .then(response =>
        setCountry(response)
      )
      .catch(e => console.log('error happened: ', e.message))
  }, [isoCode])
  
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: 10,
    },
    cards: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    flag: {
      width: 300,
      height: 190,
      
    }
  })
  
  const backHome = () => {
    history.push('/')
  }
  
  const classes = useStyles()
  
  if (!country) {
    return (
      <p>loading country...</p>
    )
  }
  
  if (country) {
    return (
      <div>
        <h2>{country.name}</h2>
        <div>
          <img
            className={classes.flag}
            src={country.flag} 
            alt={`flag of ${country.name}`} 
          />
        </div>
        <p>Capital city: {country.capital}</p>
        <p>Population: {country.population}</p>
        <div>
          Languages: 
          {country.languages.map(language =>
            <ul key={language.name}> {language.name} </ul>
          )}
        </div>    
        <div>
          Currencies: 
          {country.currencies.map(currency =>
            <ul key={currency.name} > {currency.name} </ul>
          )}
        </div>
        <Button color='primary' onClick={() => backHome()}>Back</Button>
      </div>
    )
  }
}

export default Country