import { connect } from 'react-redux';
import Component from './TodoDetailComponent';
import * as Action from './TodoDetailAction';


function mapStateToProps(state) {
  return Object.assign({} ,state.TodoDetail);
}

function mapDispatchToProps(dispatch) {
  let actions = {};
  let keys = Object.keys(Action);
  for (let key of keys) {
    if(typeof Action[key] == 'function') {
      actions[key] = (...args) => dispatch(Action[key](...args))
    }
  }
  return actions;
}
export default connect(mapStateToProps, mapDispatchToProps)(Component);
