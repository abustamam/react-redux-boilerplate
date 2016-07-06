import React, { PropTypes } from 'react'

const Todo = todo => (
  <li
    onClick={todo.get('onClick')}
    style={{
      textDecoration: todo.get('completed') ? 'line-through' : 'none'
    }}
  >
    {todo.get('text')}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired
  // completed: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired
}

export default Todo
