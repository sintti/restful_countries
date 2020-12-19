import axios from 'axios'
import { allCountriesUri, searchByCodeUri } from '../constants'

const getAll = async () => {
  const response = await axios.get(allCountriesUri)
  return response.data
}

const getByIsoCode = async (isoCode) => {
  const response = await axios.get(`${searchByCodeUri}/${isoCode}`)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getByIsoCode }