import { createSlice,current } from "@reduxjs/toolkit"
import service from '../services/anecdotes'

const AnecdoteSlice = createSlice({
  name:'anecdotes',
  initialState:[],
  reducers:{
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

export const initialAnecs =  () => {
  return async dispatch => {
    const anecdotes = await service.getAll()
    dispatch(set(anecdotes))
  }
}

export const createAnecs = content => {
  return async dispatch => {
    const anecdote = await service.createNew(content)
    dispatch(append(anecdote))
  }
}
export const {toggleVote,append,set}= AnecdoteSlice.actions
export default AnecdoteSlice.reducer