import { connect } from 'react-redux'
import Header from '../components/Header'
import { todosActionCreators } from '../reducers/todos'

export default connect(
  null,
  todosActionCreators
)(Header)
