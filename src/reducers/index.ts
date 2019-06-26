import { combineReducers } from 'redux'
import { TodosState } from './todos/resolvers'
import { todosReducer } from './todos'
import { visibilityFilterReducer } from './visibilityFilter'
import { VisibilityFilterState } from './visibilityFilter/resolvers'

export type State = {
  todos: TodosState
  visibilityFilter: VisibilityFilterState
}

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
})

export default rootReducer
