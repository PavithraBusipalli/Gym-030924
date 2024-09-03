import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import myimag from '../assets/images/Krish.jpg'

export default function MyCard({person}) {
  return (
    <Card sx={{maxWidth: 600, display:'flex', flexWrap:'wrap', gap: '0px', justifyContent:'center', borderRadius:'16px'}}>
        <CardMedia
            component="img"
            image={myimag}
            height={200}
            alt='image'
            title='Krish'
        />
        <CardContent>
          <Typography 
            variant='h6'
          >
              {person.name}
          </Typography>
          <Typography 
          marginBottom={3}
          fontSize={15}
          >
            {person.role}
          </Typography>
          <Typography 
            variant='body2'
          >
            {person.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ width: '100%', margin:'15px', marginTop:'0px'}}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#9EF300",
              color: "#000000",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#9EF300" },
              textTransform: "none",
              borderRadius:"6px"
            }}
          >Book Workout</Button>
        </CardActions>
    </Card>
  );
}
