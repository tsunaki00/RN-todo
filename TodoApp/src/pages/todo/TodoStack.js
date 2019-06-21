import { createStackNavigator } from 'react-navigation';
import TodoIndex from './index/TodoIndexContainer';
import TodoDetail from './detail/TodoDetailContainer';

export default TodoStack = createStackNavigator({
  Todo: { screen: TodoIndex },
  TodoDetail: { screen: TodoDetail },
}, {
  initialRouteName: 'Todo',
  headerMode: 'none'
});
