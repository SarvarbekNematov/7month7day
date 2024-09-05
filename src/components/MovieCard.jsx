import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { IMG_URL } from '../hooks/useEnv';

export default function MovieCard({item}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
        className='!h-[300px]'
          component="img"
          height="140"
          image={`${IMG_URL}/${item.poster_path}`}
          alt={`${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.original_title}
          </Typography>
          <Typography className='line-clamp-3' variant="body2" sx={{ color: 'text.secondary' }}>
            {item.overview}
          </Typography>
          <Typography className='pt-3 ' variant="body2" sx={{ color: 'text.secondary' }}>
            {item.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='outlined' size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
  );
}
