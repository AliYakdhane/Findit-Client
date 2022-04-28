import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import React from 'react'

export const TasksProgress = (props) => (
  <Card  {...props}>
  <CardContent>
    <Grid
      container
      spacing={1}
      sx={{ justifyContent: 'space-between' }}
    >
      <Grid item>
      
        <Typography
          color="textPrimary"
          variant="h5"
        >
          3 matchs in progress
        </Typography>
      </Grid>
      <Grid item>
        <Box
          sx={{
            backgroundColor: 'success.main',
            height: 30,
            width: 30,
            borderRadius:'50%'
          }}
        >
          
        </Box>
      </Grid>
    </Grid>
   
  </CardContent>
</Card>
);
