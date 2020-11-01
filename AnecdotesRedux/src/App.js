import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import {initAnecdotes} from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService
      .getAll().then(anecdoteList => dispatch(initAnecdotes(anecdoteList)))
  }, [dispatch])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteForm/>
      <AnecdoteList/>
    </div>
  )
}

export default App