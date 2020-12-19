import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'

const FilterForm = ({ nameFilter, regionFilter, nameFilterListener, regionFilterListener }) => {
  
  const useStyles = makeStyles({
    text: {
      marginTop: 10
    }
  })
  
  const classes = useStyles()
  
  return (
    <form>
      <div>
        <TextField
          label='filter by name'
          value={nameFilter}
          onChange={(e) => nameFilterListener(e)}
        />
      </div>
      <div>
        <TextField
          label='filter by subregion'
          value={regionFilter}
          onChange={(e) => regionFilterListener(e)}
        />
      </div>
      <div className={classes.text}>
        Filter countries by their name or subregion ie. "eastern europe".
        Click flags for more information about the country.
      </div>
    </form>
  )
}

export default FilterForm