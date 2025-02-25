import { createSlice,current } from "@reduxjs/toolkit"
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
    id: getId()
  }
}

const initialState = anecdotesAtStart.map(asObject)

const AnecdoteSlice = createSlice({
  name:'anecdotes',
  initialState,
  reducers:{
    createAnecdotes(state,action) {
      const content = action.payload
      state.push({
        content,
        votes:0,
        id:getId
      })
    },
    toggleVote(state,action) {
      const id = action.payload
      const anecdoteToVote = state.find(n => n.id ===id)
      const changed = {...anecdoteToVote,votes:anecdoteToVote.votes + 1}
      console.log(current(state));
      return state.map(anecdote => anecdote.id === id ? changed : anecdote)
    }
  }
})

export const createAnecdote = (content) => {
  return {
    type: 'NEW',
    payload: {
      content,
      votes: 0,
      id: getId()
    }
  }
}

export const toggleVotes = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}
export const {toggleVote,createAnecdotes}= AnecdoteSlice.actions
export default AnecdoteSlice.reducer