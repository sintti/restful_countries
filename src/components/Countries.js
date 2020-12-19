import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardActions, CardContent, 
        CardMedia, Button, CardHeader, makeStyles, Typography } from '@material-ui/core'

import FilterForm from './FilterForm'

const Countries = ({ countries }) => {
  const [nameFilter, setNameFilter] = useState('')
  const [regionFilter, setRegionFilter] = useState('')
  const [showAll] = useState()
  const history = useHistory()
  
  const filterCountries = showAll
    ? countries
    : countries.filter(c => 
      c.name.toLowerCase().includes(nameFilter) &&
      c.subregion.toLowerCase().includes(regionFilter))
  
  const nameFilterListener = (event) => {
    setNameFilter(event.target.value.toLowerCase())
  }
  
  const regionFilterListener = (event) => {
    setRegionFilter(event.target.value.toLowerCase())
  }
  
  const showCountry = (c) => {
    history.push(`/country/${c.alpha3Code}`)
  }
  
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: 10,
      display: 'block'
    },
    cards: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }
  })
  
  const classes = useStyles()

  if (filterCountries.length > 20) {
    return (
      <div>
        <FilterForm
          nameFilter={nameFilter}
          regionFilter={regionFilter}
          nameFilterListener={nameFilterListener}
          regionFilterListener={regionFilterListener}
        />
      </div>
    )
  }
  
    return (
      <div>
        <FilterForm
          nameFilter={nameFilter}
          regionFilter={regionFilter}
          nameFilterListener={nameFilterListener}
          regionFilterListener={regionFilterListener}
        />
        <div className={classes.cards}>
        {filterCountries.map(c =>
            <Card key={c.numericCode} className={classes.root}>
              <CardMedia
                component='img'
                image={c.flag}
                height='200'
                alt={`flag of ${c.name}`}
                title={c.name}
              />
              <CardContent>
                <CardHeader 
                  title={c.name}
                  subheader={c.subregion}
                />
                <Typography>
                  Population: {c.population}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size='small'
                  color='primary'
                  onClick={() => showCountry(c)}
                >
                  Learn more
                </Button>
                <Button 
                  size='small' 
                  color='primary'
                >
                  Hide country
                </Button>
              </CardActions>
            </Card>
        )}
        </div>
      </div>
    )
}

export default Countries