import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }
  
const postNew = async (newAnecdote) => {

  const response = await axios.post(baseUrl,newAnecdote)
  return response.data
}

const  updateVotes = async (id,voteCount) => {

  const uString = `${baseUrl}/${id}`
  const response = await axios.put(uString,voteCount)
  return response.data
}

export default {getAll,postNew,updateVotes}


