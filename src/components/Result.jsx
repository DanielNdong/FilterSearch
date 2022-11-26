import React, {useState,useMemo, useContext} from 'react'
import MarkItem from './MarkItems'
import useUser from '../hooks/useUser'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../style.css';



export default function Result({data, query}){
  const SET_DATA = useUser()
  const [result, setResult] = useState([])
  
  //Guardamos el resultado de cada 'filterItems' con el hook useMemo y se lo asignamos a filterElements
  const filterdElements = useMemo(() => filterItems(data,query), [data,query])

  //Filtramos los elementos que coincidan con el 'query'
  function filterItems(items, query){
    let filtered = items.filter((i)=> {
      let phrase = i.title
      //buscamos un si el valor en el 'query' se encuentra en cada 'i.title'
       return phrase.toLowerCase().indexOf(query.toLowerCase()) >= 0 && query.length > 0 && query !== ' '
    })

    //cambiamos el estado del hook a filtered
    setResult(filtered)

    //actualizamos el numero de matches con useContext que le pasamos desde Searchbar
    SET_DATA(filtered.length)

    //Como pretendemos guardar los datos filtrados en una variable entonces debemos devolver esos datos con el return
    return filtered
  }

  return(
   <div className="Result">
     {
       query !== '' ? <div className="items--wrapper"> {filterdElements.map((elem) => (
         <MarkItem key={elem.id} elem={elem} query={query}/>
       ))}</div> : <div className="items--wrapper">  {
        data.map((element) =>     
            <Card sx={{ maxWidth: 345 }} key={element.id}>
            <CardMedia
              component="img"
              height="132"
              image={element.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {element.title}
              </Typography>
              <Typography variant="body2" color="text.secondary"
              >
              {element.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">BUY</Button>
            </CardActions>
          </Card>
          )
          }
        </div>
     }
   </div>
   )
}

