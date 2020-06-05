import { 
  FETCH_WINE, 
  HIDE_WINE,
  FETCH_WINES_SUCCESS, 
  WineState,
  WineActions, 
} from './types'

const initialState: WineState = {
  wines: null,
  activeWine: null,
  has_more: true,
  last: ''
}

export default (
  state: WineState = initialState, 
  action: WineActions
) => {
  switch (action.type) {
    case FETCH_WINES_SUCCESS:
      const { items, has_more, last } = action.payload;
      return {
        ...state,
        wines: {...state.wines, ...items},
        has_more,
        last
      };
    
    case FETCH_WINE:
      return {
        ...state,
        activeWine: state.wines![action.payload]
      };
    
    case HIDE_WINE:
      return {
        ...state,
        activeWine: null
      };
    
    default:
      return state;
  }
}