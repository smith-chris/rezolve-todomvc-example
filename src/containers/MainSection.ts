import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import MainSection from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'
import { todosActionCreators } from '../reducers/todos'
import { State } from '../reducers'

const mapStateToProps = (state: State) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(todosActionCreators, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)
