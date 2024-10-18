import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
export default function MediaCard({name , time , image }) {
  return (
    <div>
    <Card sx={{ Width: 1000 }}  style={{width:"200px"}} >


      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      >
   
      </CardMedia>
      <CardContent>

        <h2 style={{ color: 'text.secondary', textAlign:"center" }} >
    {name}
        </h2>

        <h2 style={{ color: 'text.secondary', textAlign:"center" }}>
         {time}
        </h2>

      </CardContent>
      
    </Card>
    
    
    
   
    </div>
  );
 // { <Stack direction="row"    justifyContent={"space-around"}  style={{marginTop:"50px"}}>
  //<Card name= "الفجر" time={timings.Fajr} image="https://png.pngtree.com/background/20230613/original/pngtree-the-great-mosque-of-abu-dhabi-is-an-aerial-render-picture-image_3431430.jpg" />
  //<Card  name="الظهر" time={timings.Dhuhr} image="https://img.pikbest.com/origin/09/35/68/98HpIkbEsTrtN.jpg!w700wp" />
  //<Card name="العصر" time={timings.Asr} image="https://img.pikbest.com/origin/09/35/68/90fpIkbEsTuxs.jpg!w700wp"/>
  //<Card name="المغرب" time={timings.Maghrib} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzYb8x-79jGuIHmYTSRrtxmHVVzK0S5NENXnHLXei6xZ-iPx-XiMw1TC4_bjE3Kkki5o&usqp=CAU"/>
 // <Card name="العشاء" time={timings.Isha} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6aObalmioEMzYorihhkYUymYqTCvbEkKejQMVm85fDb9TE6DXZmh78MqyqxxmQOlEqY&usqp=CAU"/>
  //    </Stack>}
}
