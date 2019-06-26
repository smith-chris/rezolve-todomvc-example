import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors'
import { State } from '../reducers'
import { todosActionCreators } from '../reducers/todos'

const mapStateToProps = (state: State) => ({
  filteredTodos: getVisibleTodos(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(todosActionCreators, dispatch),
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
