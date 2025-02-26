import { useDispatch } from "react-redux";
import { createAnecs } from "../reducers/anecdoteReducer";
const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecs(content))

    }

    return (
        <form onSubmit = { addAnecdote } >
            <input name="anecdote" />
            <button type="submit" >add</button>
        </form> 
    )
}

export default NewAnecdote