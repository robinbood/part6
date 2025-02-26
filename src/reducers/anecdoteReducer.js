import { createSlice,current } from "@reduxjs/toolkit"

const AnecdoteSlice = createSlice({
  name:'anecdotes',
  initialState:[],
  reducers:{
    createAnecdotes(state,action) {
      const newAnec = action.payload
      state.push(newAnec)
    },
    toggleVote(state,action) {
      const id = action.payload
      const anecdoteToVote = state.find(n => n.id ===id)
      const changed = {...anecdoteToVote,votes:anecdoteToVote.votes + 1}
      console.log(current(state));
      return state.map(anecdote => anecdote.id === id ? changed : anecdote)
    },
    append(state,action) {
      state.push(action.payload)
    },
    set(state,action) {
      return action.payload
    }
  }
})

export const {toggleVote,createAnecdotes,append,set}= AnecdoteSlice.actions
export default AnecdoteSlice.reducer