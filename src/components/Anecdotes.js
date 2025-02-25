import { useDispatch,useSelector } from "react-redux";
import { toggleVotes } from "../reducers/anecdoteReducer";

const Anecdote = ({anecdote,handleClick}) => {
    return (
        <li onClick={handleClick}>
            {anecdote.content}
        </li>
    )
}
const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        return state.filter === 'FILTER' 
        ? state.anecdotes.includes(state.content.includes(filter)) : state.anecdotes
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