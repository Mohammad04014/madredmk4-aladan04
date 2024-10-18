import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './App.css';
export default function MediaCard({name , time , image }){

    return(
        
       
        
        
        
        
    <Grid   style={{ backgroundColor:" #282c34",   borderRadius: "50px"}}
     size={{ xs: 12, sm: 6, md: 2 }} justifyContent={"space-around"} alignContent={"center"} >
        
    <CardMedia
            sx={{ height: 300 }}
            image={image}
            title="green iguana"
          >
       
          </CardMedia>
          <CardContent>
    
            <h2 style={{ color: '#fff', textAlign:"center" }} >
        {name}
            </h2>
    
            <h2 style={{ color: '#fff', textAlign:"center" }}>
             {time}
            </h2>
    
          </CardContent>
  </Grid>
 
    
        
 
    );
}