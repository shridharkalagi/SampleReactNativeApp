import { connect } from 'react-redux';
import Todo from '../component/Todo';
const mapStateToProps = (state) => {
 return {
     todos: state.todoReducer.todos
 }
};

export default connect(mapStateToProps)(Todo)
