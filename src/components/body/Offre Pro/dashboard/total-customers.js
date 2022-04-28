import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import React from 'react'

export const TotalCustomers = (props) => (
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
            2 found items
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              backgroundColor: 'error.main',
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
