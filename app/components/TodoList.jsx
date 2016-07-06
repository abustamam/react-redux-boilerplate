import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = todos => {
  console.log(todos)
  return (<ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => todo.onTodoClick(todo.id)}
      />
    )}
  </ul>)
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default TodoList
