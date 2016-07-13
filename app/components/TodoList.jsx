import React, { PropTypes } from 'react'
import Todo from './Todo'


const TodoList = ({ todos, onTodoClick }) => {
  // console.log(todos)
  return (<ul>
    {todos.map(todo => <Todo
        key={todo.get('id')}
        completed={todo.get('completed')}
        text={todo.get('text')}
        onClick={() => onTodoClick(todo.get('id'))}
      />
    )}
  </ul>)
}

TodoList.propTypes = {
  // todos: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired
  // }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
