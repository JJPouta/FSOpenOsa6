import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {setVoteNotification,removeNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const vote = (id,content) => {
        dispatch(voteAnecdote(id))
        dispatch(setVoteNotification(content))
        setTimeout( () => dispatch( removeNotification() ), 5000 );
       
      }

    return(<div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
          </div>
        </div>
      )}
      </div>)
}

export default AnecdoteList

