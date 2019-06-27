import { makeActionCreators, makeReducer } from 'redux-solve'
import { TodosState } from './resolvers'
import * as todosResolvers from './resolvers'

export const initialState: TodosState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
]

export const todosActionCreators = makeActionCreators(
  todosResolvers,
  initialState
)
export const todosReducer = makeReducer(todosResolvers, initialState)
