import axios from "axios";
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecs = () => {
    axios.get(baseUrl).then(res =>res.data)
}

export const createAnecs =(content) => {
    axios.post(baseUrl,content).then(res => res.data)
}

export const updateAnecs = (updated) => {
    axios.put(`${baseUrl}/${baseUrl.id}`, updated).then(res => res.data)
}
