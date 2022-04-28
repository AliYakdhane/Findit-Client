import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react'

export const TotalProfit = (props) => (
  <Card   {...props}>
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
          7 archived matchs
        </Typography>
      </Grid>
      <Grid item>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
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
