import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const InfoBox = ({weatherInfo}) => {

  return (
    <>
        <h2><u>Weather Info For &quot;{weatherInfo.city_name}&quot;</u></h2>
      <Card style={{border:"2px solid blue",textAlign:"start"}} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 20 }}
          >
            <b>{weatherInfo.city_name} | {weatherInfo.country_name}</b>
          </Typography>
          <Typography style={{marginBottom:"10px"}} variant="h5" component="div">
            {weatherInfo.temperature}&deg; C
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Min_Temp: {weatherInfo.tempMin}&deg;
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Max_Temp: {weatherInfo.tempMax}&deg;
          </Typography>
          <Typography variant="body2">
            Feels Like: {weatherInfo.feelsLike}&deg;
          </Typography>
          <Typography variant="body2">
            Humidity: {weatherInfo.humidity}&deg;
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default InfoBox;
