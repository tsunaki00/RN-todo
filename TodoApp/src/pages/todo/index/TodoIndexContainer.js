import { connect } from 'react-redux';
import Todo from './TodoIndexComponent';
import * as Action from './TodoIndexAction';


function mapStateToProps(state) {
  return Object.assign({} ,state.TodoIndex);
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
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
