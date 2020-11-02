import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

const AnecdoteList = (props) => {


  const vote = (id,existingVotes,existingContent) => {
      
      const updatedAnecdote = {
        content: existingContent,
        votes: existingVotes + 1
      }
      props.voteAnecdote(id,updatedAnecdote)
      props.setNotification(`You have voted: ${existingContent}`, 5)
      
      
      
     
       
      }

    return(<div>
        {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  voteAnecdote,setNotification
}

const ConnectedAnecdotes = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdotes

