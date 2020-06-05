import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { mean, map, findKey, countBy, max, partial, isEqual, round } from 'lodash'

import { WineState } from 'store/types';
import { fetchWines } from 'store/actions'

export default () => {
  const [lastId, setLastId] = useState('');
  const dispatch = useDispatch();
  
  const { wines, last, has_more, activeWine, averageScore, frequentCountry, ratedWines } = useSelector((state: WineState) => {
    const { wines, last, has_more, activeWine } = state;
    const frequentCountry = findKey(countBy(wines, wine => wine.country), partial(isEqual, max(map(countBy(wines, wine => wine.country)))))!;
    const averageScore = round(mean(map(wines, wine => wine.score)));
    const ratedWines = map(wines).length;
    return {
      wines,
      last,
      has_more,
      activeWine,
      averageScore, 
      frequentCountry,
      ratedWines
    }
  });

  useEffect(() => {
    dispatch(fetchWines(lastId))
  }, [dispatch, lastId])

  return {
    wines,
    last,
    has_more,
    activeWine,
    averageScore, 
    frequentCountry,
    ratedWines,
    setLastId,
  }
}