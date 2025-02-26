import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"
import Filter from "./components/Filter"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { initialAnecs} from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(initialAnecs())},[dispatch])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <Anecdotes/>
      
      <h2>create new</h2>
      <NewAnecdote/>
    </div>
  )
}

export default App