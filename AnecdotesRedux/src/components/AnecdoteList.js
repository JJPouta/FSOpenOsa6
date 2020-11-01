import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const vote = (id,existingVotes,existingContent) => {
      
      const updatedAnecdote = {
        content: existingContent,
        votes: existingVotes + 1
      }
      
      dispatch(voteAnecdote(id,updatedAnecdote))
        dispatch(setNotification(`You have voted: ${existingContent}`, 10))
       
      }

    return(<div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id,anecdote.votes,anecdote.content)}>vote</button>
          </div>
        </div>
      )}
      </div>)
}

export default AnecdoteList

