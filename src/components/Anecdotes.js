import { useDispatch,useSelector } from "react-redux";
import { toggleVotes } from "../reducers/anecdoteReducer";

const Anecdote = ({anecdote,handleClick}) => {
    return (
        <li >
            {anecdote}
            <button onClick={handleClick}>vote</button>
        </li>
    )
}
const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        const filter = state.filter.toLowerCase()
        return filter === 'FILTER'
            ? state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter)) 
            : state.anecdotes
    })

    return (
        <ul>
            {anecdotes.map(
                anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => dispatch(toggleVotes(anecdote.id))}/>
            )}
        </ul>
    )

}
export default Anecdotes