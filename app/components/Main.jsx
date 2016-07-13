import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterLinks from './FilterLinks'

const Main = () => (
  <div className="main">
    <AddTodo />
    <VisibleTodoList />
    <FilterLinks />
  </div>
)

export default Main
