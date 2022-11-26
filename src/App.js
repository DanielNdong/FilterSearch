  import React, {useState} from "react";
import {computer, phone, television} from './datas/data';
import SearchBar from './components/Searchbar'
import "./style.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function App() {
  const [data, setData] = useState([...television, ...phone, ...computer])
  const [selection, setSelection] = useState('selccionado contexto')
  const [currentOption, setcurrentOption] = useState('all')

  const handleClick = (e) => {
    const op = e.target.name

    //Segun el boton clikado se cambiará el estado del hook 'data' dandole nuevos valores al arreglo
    switch(op){
      case 'all':
      setData([...television, ...phone, ...computer])
      setcurrentOption('all')
      break;
      case 'computer':
      setData([...computer])
      setcurrentOption('computer')
      break;
      case 'phone':
      setData([...phone])
      setcurrentOption('phone')
      break;
      case 'television':
      setData([...television])
      setcurrentOption('television')
      break;
    }
  }


  return (
    <main>
      <h1>Black Friday $$$</h1>
      <div>
        <Stack className="Stack" spacing={0} direction="row">
          <Button 
            size="small"
            variant="outlined" 
            onClick={handleClick} 
            name="all">All</Button>
          <Button 
            size="small"
            variant="outlined" 
            onClick={handleClick} 
            name="computer">Computer</Button>
          <Button 
            size="small"
            variant="outlined" 
            onClick={handleClick} 
            name="phone">Phone</Button>
          <Button 
            size="small"
            variant="outlined" 
            onClick={handleClick} 
            name="television">Television</Button>
        </Stack>
      </div>
      <SearchBar data={data}/>
    </main>
  ); 
}
