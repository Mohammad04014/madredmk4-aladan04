
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { initializeApp } from 'firebase/app';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import moment from 'moment';
import Gridcard from './Gridcard';

import './App.css';
import { useState,useEffect } from 'react';
import { useForkRef } from '@mui/material';
import "moment/dist/locale/ar-kw";

moment().format('llll');

export default  function MainContant() {

  const [nextPrayerIndex ,setNextPrayerIndex] = useState (4);
  const [timings, setTimings] = useState({
    Asr:"15:37",
    Dhuhr :"12:21",
    Fajr : "05:17",
   
    Isha
    : 
    "19:25",
  
    Maghrib
    : 
    "18:08",
  
  });


  const [reminingTime, setReminingTime] = useState("");

  const [citysel, setCitysel] = useState({
    displayName: "",
    ipaName: "daraa"
  });



 

const [today, setToday] = useState("");



  const avCity = [
    {
      displayName: "دمشق",
    ipaName: "Damascus"
    },
    {
      displayName: "اللاذقية",
      ipaName: "Latakia"
    },
    {
      displayName: "درعا",
      ipaName: "daraa"
    }
  ];
  const prayerArray = [
{ key : "Fajr" ,displayName : "الفجر" },
{ key : "Fajr" ,displayName : "الظهر" },
{ key : "Fajr" ,displayName : "العصر" },
{ key : "Fajr" ,displayName : "المغرب" },
{ key : "Fajr" ,displayName : "العشاء" },



  ];
const Get = async () => {

  const data = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=Sy&city=${citysel.ipaName}`);
  setTimings(data.data.data.timings);
}


  useEffect(() => {
    Get();




  },[citysel]);


  useEffect(() => {
    let interval  = setInterval(() => {
     setupCountdownTimer();
      
    }, 1000);

    const tod = moment();
setToday(tod.format('MMMM Do YYYY, h:mm:ss a'));

    return () =>{
      clearInterval(interval);
    };
  },[timings]);

  const setupCountdownTimer = () => {
const momentNow = moment();

let PrayerIndex = 2 ;

if
(momentNow.isAfter(moment(timings["Fajr"] , "hh:mm")) && momentNow.isBefore(moment(timings["Dhuhr"] , "hh:mm")) ){
  PrayerIndex = 1
}else if (momentNow.isAfter(moment(timings["Dhuhr"] , "hh:mm")) && momentNow.isBefore(moment(timings["Asr"] , "hh:mm")) ){
  PrayerIndex = 2
}else if (momentNow.isAfter(moment(timings["Asr"] , "hh:mm")) && momentNow.isBefore(moment(timings["Maghrib"] , "hh:mm")) ){
  PrayerIndex = 3
}else if (momentNow.isAfter(moment(timings["Maghrib"] , "hh:mm")) && momentNow.isBefore(moment(timings["Isha"] , "hh:mm")) ){
  PrayerIndex = 4
}else{
  PrayerIndex = 0
};

setNextPrayerIndex(PrayerIndex);

const nextPrayerObject = prayerArray[PrayerIndex];
const nextPrayerTime = timings[nextPrayerObject.key];

const nextPrayerTimeMoment = moment(nextPrayerTime , " hh:mm:ss ");

let remainingTime = moment(nextPrayerTime, "hh:mm:ss").diff(momentNow);



if (remainingTime < 0 ){
  const midnightDiff = moment("23:59:59" ,"hh :mm :ss  ");
  const fajrToMidnightDiff = nextPrayerTimeMoment.diff(moment("00:00:00" ,"hh :mm :ss  "));
  const total = midnightDiff + fajrToMidnightDiff;


  remainingTime =total;
};
const durationRemainingTime = moment.duration(remainingTime);

setReminingTime(`  ${durationRemainingTime.seconds()}: ${durationRemainingTime.minutes()} :${durationRemainingTime.hours()}`);



console.log(durationRemainingTime.hours());

const Isha = timings["Isha"];
const IshaMoment = moment(Isha , "hh : mm");

  };

  const handleCityChange = (event) =>{
    const CityOb= avCity.find((city) =>{
      return city.ipaName == event.target.value
    })
console.log(event.target.value);
setCitysel(CityOb);

  };
  //setTimings(data.data.timings)




 // const data = await axios.get("https://api.aladhan.com/v1/timingsByCity?country=Sa&city=Riyadh");
 
  
   
  
  return (
    <>

    <grid containar >

        <grid sx={6}  style={{display:"flex" ,  justifyContent: "space-evenly"}}>
<div>
   <h2>{today}</h2> 

   <h2>{citysel.displayName}</h2>
</div>
<div>
    <h2>متبقي على صلاة {prayerArray[nextPrayerIndex].displayName} </h2>
    <h2>{reminingTime}</h2>
    
</div>

        </grid>
    </grid>
    

    <Divider/>

    <Stack  direction="row" justifyContent={"space-around"}  style={{marginTop:"50px"}} >


<FormControl style={{width:"450px" , backgroundColor:"#435e9382"}}>

    <InputLabel id="demo-simple-select-label">المدينة</InputLabel>

    <Select style={{fontSize:"25px"}}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
    //  value={age}
     // label="Age"
     onChange={handleCityChange}
    >
      {avCity.map((city) =>{

        return(
<MenuItem value={city.ipaName}  style={{fontSize:"30px"}}>{city.displayName}</MenuItem>
        );
      })}
      
     
    </Select>
  </FormControl>
</Stack>

    <Grid container  size={{ xs: 12, sm: 6, md: 2}} spacing={{ xs: 3, sm: 2, md: 1}} justifyContent={"space-around"} alignContent={"center"}  style={{marginTop:"50px"}} >
   <Gridcard    name= "الفجر" time={timings.Fajr} image="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-khana-kaba-and-masjid-nabawi-png-image_11539291.png"/>
   <Gridcard  name="الظهر" time={timings.Dhuhr} image="https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-islamic-ottoman-minaret-png-image_13300425.png" />
   <Gridcard  name="العصر" time={timings.Asr} image="https://img.freepik.com/premium-vector/masjid-al-nabawi-medina-illustration-sticker-white-background_565759-542.jpg"/>
   <Gridcard   name="المغرب" time={timings.Maghrib} image="https://png.pngtree.com/png-vector/20240611/ourlarge/pngtree-d-illustration-of-beautifull-nabawi-mosque-with-half-goldmoon-islamic-pilgrimage-png-image_12654628.png"/>
   <Gridcard   name="العشاء" time={timings.Isha} image="https://png.pngtree.com/png-vector/20240321/ourlarge/pngtree-ramadan-moon-with-mosque-without-background-png-image_11965866.png"/>

</Grid>



   


  


    </>
  )
}
