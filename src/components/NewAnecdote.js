import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import service from "../services/anecdotes"
const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnec = await service.createNew(content)
        dispatch(createAnecdote(newAnec))

    }

    return (
        <form onSubmit = { addAnecdote } >
            <input name="anecdote" />
            <button type="submit" >add</button>
        </form> 
    )
}

export default NewAnecdote