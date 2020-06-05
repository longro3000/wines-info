import { 
  FETCH_WINES, 
  FETCH_WINE, 
  HIDE_WINE,
  FETCH_WINES_SUCCESS, 
  WineActions, 
  WinesData
} from './types';

export const fetchWines = (last: string): WineActions => {
  return {
    type: FETCH_WINES,
    payload: last
  }
}

export const fetchWinesSuccess = (wines: WinesData): WineActions => {
  return {
    type: FETCH_WINES_SUCCESS,
    payload: wines
  }
}

export const fetchWine = (id: string): WineActions => {
  return {
    type: FETCH_WINE,
    payload: id
  }
}

export const hideWine = (): WineActions => {
  return {
    type: HIDE_WINE
  }
}