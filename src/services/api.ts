import axios from 'axios'

import { WinesData } from 'store/types';

export default {
  async fetchWines(last: string): Promise<WinesData> {
    return await axios
      .get(`https://api-staging.vello.fi/front-challenge-2020/wine?limit=5&last=${last}`)
      .then(res => res.data)
      .catch(error => error.response)
  },
}