import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  console.log(todos, filter)
  switch (filter) {
  case 'SHOW_ALL':
    return todos
  case 'SHOW_COMPLETED':
    return todos.filter(t => t.completed)
  case 'SHOW_ACTIVE':
    return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    todos: getVisibleTodos(state.get('todos'), state.get('visibilityFilter'))
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
