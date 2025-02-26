import { createAnecs } from "../requests"
import { useMutation, useQueryClient,useQuery } from "@tanstack/react-query"
const AnecdoteForm = () => {
  const QueryClient = useQueryClient()
  const newAnecsMutation = useMutation({
    mutationFn:createAnecs,
    onSuccess: (content) => {
      const anecdotes = QueryClient.getQueryData({queryKey:['anecdotes']})
      QueryClient.setQueryData({queryKey:['anecdotes']}, anecdotes.concat(content))
    }
  
  
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecsMutation.mutate({content,votes:0})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
