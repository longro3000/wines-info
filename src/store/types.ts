export const FETCH_WINES = 'FETCH_WINES'
export const FETCH_WINES_SUCCESS = 'FETCH_WINES_SUCCESS'
export const FETCH_WINE = 'FETCH_WINE'
export const HIDE_WINE = 'HIDE_WINE'

export interface FetchWinesAction {
  type: typeof FETCH_WINES
  payload: string
}

export interface FetchWinesSuccessAction {
  type: typeof FETCH_WINES_SUCCESS
  payload: WinesData
}

export interface FetchWineAction {
  type: typeof FETCH_WINE
  payload: string
}

export interface HideWineAction {
  type: typeof HIDE_WINE
}

export interface Comment {
  downvotes: number,
  text: string,
  upvotes: number
}

export interface Wine {
  country: string,
  year: number,
  score: number,
  comments: Comment[],
  grape: string,
  name: string
}

export interface Wines {
  [id: string]: Wine
}

export interface WinesData {
  items: Wines,
  last: string
  has_more: boolean 
}

export interface WineState {
  wines: Wines | null,
  activeWine: Wine | null,
  has_more: boolean,
  last: string
}

export type WineActions = FetchWineAction | FetchWinesAction | HideWineAction | FetchWinesSuccessAction
