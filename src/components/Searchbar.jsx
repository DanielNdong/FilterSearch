import React, {useState, createContext} from 'react'
import Result from './Result'
import UserContext from '../context/UserContext'
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';


function SearchBar({data}){
  const [query, setQuery] = useState('')
  const [numData, setNumData] = useState(0)

  //Cada valor capturado en el input actualizará el estado el hook 'query'
  function handleChangeQuery(e){
    const VALUE = e.target.value
    setQuery(VALUE)
    console.log(query)
  }

 
  return (
    
    <UserContext.Provider value={setNumData}>
    <div className="container">
     <div className="inner--searchbar">
      <p>{numData} Resultados encontrados</p>
    
      <TextField size="small" id="outlined-search" label="Search field" type="search" autoComplete='false' onChange={handleChangeQuery} value={query} placeholder='Filtra según tu interés'/>
     </div>
     <Divider className="Divider" orientation="vertical" flexItem/>
      <Result className="Result" data={data} query={query}/>
    </div>
    </UserContext.Provider>
  )
}

export default SearchBar
