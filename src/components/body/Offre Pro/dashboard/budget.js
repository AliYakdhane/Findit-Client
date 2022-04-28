import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import React from 'react'


export const Budget = (props) => (
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
          4 loss items
        </Typography>
      </Grid>
      <Grid item>
        <Box
          sx={{
            backgroundColor: 'primary.main',
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
