import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../Actions/ActionCreator';
import HomePage from '../Components/Home/HomePage'
import Grid from '../Components/Grid/Grid'
import Homes from '../Components/Grid/Homes/Homes'


function mapStateToProps(state) {
  return{
    posts: state.posts,
    comments: state.comments,
    test: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const StoreApp = connect(mapStateToProps, mapDispatchToProps)(Grid);
export const HomesStore = connect(mapStateToProps, mapDispatchToProps)(Homes)

export default StoreApp;
