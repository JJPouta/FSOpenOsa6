import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

const AnecdoteForm = (props) => {

    const createNew = async (e) => {
        e.preventDefault()
        
        const newAnecdote = {
          content: e.target.anecdoteInput.value,
          votes: 0
        }
        e.target.anecdoteInput.value = ""
        props.createAnecdote(newAnecdote)
        props.setNotification(`New anecdote added: ${newAnecdote.content}`, 5)
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


const mapDispatchToProps = {
  createAnecdote,setNotification
}

const ConnectedAnecdoteForm = connect(null,mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm