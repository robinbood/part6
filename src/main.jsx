import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import Anecreducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/FilterReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer:{
    anecdotes:Anecreducer,
    filter:filterReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)