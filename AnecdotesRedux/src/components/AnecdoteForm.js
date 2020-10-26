import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createNew = (e) => {
        e.preventDefault()
        const randomID = (100000 * Math.random()).toFixed(0)
        const newAnecdote = {
          content: e.target.anecdoteInput.value,
          id: randomID,
          votes: 0
        }
        e.target.anecdoteInput.value = ""
        dispatch(createAnecdote(newAnecdote))
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