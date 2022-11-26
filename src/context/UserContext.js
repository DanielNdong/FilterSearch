import {createContext} from 'react'

const UserContext = createContext({
  name: 'daniel',
  age: 23
})

export default UserContext