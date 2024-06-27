/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({ info }) {

    const INIT_URL = "https://media.istockphoto.com/id/140469297/photo/sandstorm-driving.jpg?s=612x612&w=0&k=20&c=To7A8Q17ilSCz8olW80oAOKAMk8UDENCWFjhgbEdCo4=";

    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA=";
    const COLD_URL = "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=612x612&w=0&k=20&c=LKgdYGIdh94AZ9Q5F9IE5TSHY1zz4oP4uauG79KIN8w=";
    const RAIN_URL = "https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.jpg?s=612x612&w=0&k=20&c=_PQT1n74nDGrZJqvivJqSIsFY1LWH1sN8cHzbvskKx8=";

  return (
    <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL 
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {info.city} 
          {/* {
          info.humidity > 80 
          ? ThunderstormIcon
          : info.temp > 15 
          ? WbSunnyIcon 
          : SevereColdIcon
        } */}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} >
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The Weather can be deescribed as {info.weather} & feels like = {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default InfoBox