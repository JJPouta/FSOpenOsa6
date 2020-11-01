import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createNew = async (e) => {
        e.preventDefault()
        
        const newAnecdote = {
          content: e.target.anecdoteInput.value,
          votes: 0
        }
        e.target.anecdoteInput.value = ""
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification(`New anecdote added: ${newAnecdote.content}`, 10))
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