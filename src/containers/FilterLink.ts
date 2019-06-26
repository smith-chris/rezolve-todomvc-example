import { connect } from 'react-redux'
import Link from '../components/Link'
import { visibilityFilterActions } from '../reducers/visibilityFilter'
import { State } from '../reducers'
import { Dispatch } from 'redux'

type Props = {
  filter: string
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => ({
  setFilter: () => {
    dispatch(visibilityFilterActions.SET_VISIBILITY_FILTER(ownProps.filter))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
