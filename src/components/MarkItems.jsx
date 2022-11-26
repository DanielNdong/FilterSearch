import React, { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MarkItem({ elem, query }) {
  const { left, center, right } = useMemo(
    () => getPosition(elem, query),
    [elem, query]
  );

  function getPosition(elem, query) {
    let phrase = elem.title;
    let index = phrase.toLowerCase().indexOf(query.toLowerCase());

    //Hay un problema cuando se quiere buscar una 'palabra con espacios'
      let left = phrase.slice(0, index);
      let center = phrase.slice(index, index + query.length);
      let right = phrase.slice(index + query.length);
      
      return {
        left,
        center,
        right,
      };
  }

  return (
    <div >
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="135"
        image={element.picture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {elem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {left}
      <span
        style={{
          backgroundColor: 'yellow',
          fontWeight: 'bold',
        }}
      >
        {center}
      </span>
      {right}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY</Button>
      </CardActions>
    </Card>
    </div>
  );
}
