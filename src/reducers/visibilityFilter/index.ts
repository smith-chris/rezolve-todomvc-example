import { makeActionCreators, makeReducer } from '../../redux-solve'
import { VisibilityFilterState } from './resolvers'
import { SHOW_ALL } from '../../constants/TodoFilters'
import * as resolvers from './resolvers'

export const initialState: VisibilityFilterState = SHOW_ALL

export const visibilityFilterActions = makeActionCreators(
  resolvers,
  initialState
)
export const visibilityFilterReducer = makeReducer(resolvers, initialState)
