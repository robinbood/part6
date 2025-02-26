import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"
import Filter from "./components/Filter"
import service from "./services/anecdotes"
import { useEffect } from "react"
import { set } from "./reducers/anecdoteReducer"
import { useDispatch} from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    service.getAll().then(data => dispatch(set(data)))
  })
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