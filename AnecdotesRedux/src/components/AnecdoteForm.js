import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {setCreateNotification,removeNotification} from '../reducers/notificationReducer'
import anecdoteservice from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createNew = async (e) => {
        e.preventDefault()
        
        const newAnecdote = {
          content: e.target.anecdoteInput.value,
          votes: 0
        }
        e.target.anecdoteInput.value = ""
        const createdAnecdote = await anecdoteservice.postNew(newAnecdote)
        dispatch(createAnecdote(createdAnecdote))
        dispatch(setCreateNotification(createdAnecdote))
        setTimeout( () => dispatch( removeNotification() ), 5000 );
      }

    return(
    <>
    <h2>create new</h2>
        <form onSubmit={createNew}>
          <div><input name="anecdoteInput"/></div>
          <button type='submit'>create</button>
        </form>
    </>)
}

export default AnecdoteForm