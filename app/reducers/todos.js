import { List, Map } from 'immutable'

const initialTodos = List([])

const todo = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
      completed: false
    }
  default:
    return state
  }
}

const todos = (state = initialTodos, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return state.push(Map(todo(undefined, action)))
  case 'TOGGLE_TODO':
    return state.map(t => {
      if (t.get('id') !== action.id) {
        return t.update('completed', completed => !completed)
      } else {
        return t
      }
    })
  default:
    return state
  }
}

export default todos
