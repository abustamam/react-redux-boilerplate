import { List, Map } from 'immutable'

const initialTodos = List([
  Map({ id: 0, text: 'Get food', completed: false })
])

const todo = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return Map({
      id: action.id,
      text: action.text,
      completed: false
    })
  default:
    return state
  }
}

const todos = (state = initialTodos, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return state.push(todo(null, action))
  case 'TOGGLE_TODO':
    console.log(state)
    return state.map(t => {
      if (t.get('id') === action.id) {
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
