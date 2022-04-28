import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import React from 'react'
import Rating from '@mui/material/Rating';

export const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  

  return (
    <Card  {...props}>
      <CardHeader style={{textAlign:'center'}} title="User Reviews" />
      <Divider /><br/>
      <CardContent>
      <div>
      <Rating style={{display:'flex',justifyContent:'center'}} name="read-only" value={3} readOnly />
     </div> <br/>
      <Divider />
      <br/>
      <div>
      <h5 style={{textAlign:'center'}}>User Comments</h5>
      <br/>
      <h6 style={{color:'#cacaca',textAlign:'center'}}>The latest user reviews</h6>
      </div>
      </CardContent>
    </Card>
  );
};
