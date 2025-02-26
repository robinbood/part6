import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAnecs, updateAnecs } from './requests'

const App = () => {
  const QueryClient=useQueryClient()
  const updateMutation = useMutation({
    mutationFn:updateAnecs,
    onSuccess: () => {
      QueryClient.invalidateQueries({queryKey:['anecdotes']})
    }
  })

  const handleVote = (anecdote) => {
    updateMutation.mutate({...anecdote,votes:anecdote.votes +1})
  }

  const result = useQuery({
    queryKey:['anecdotes'],
    queryFn:getAnecs,
    retry:false,
    refetchOnWindowFocus:false
  })
  if (result.isError) {
    return <div><h2>Anecdote services not available due to problems in server ;)</h2></div>
  }

  const anecdotes = result.data
  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
