import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from './dashboard/budget';
import { TasksProgress } from './dashboard/tasks-progress';
import { TotalCustomers } from './dashboard/total-customers';
import { TotalProfit } from './dashboard/total-profit';
import { TrafficByDevice } from './dashboard/traffic-by-device';
import { Statistique } from './dashboard/statistique';
import { DashboardLayout } from './dashboard/dashboard-layout';
import React from 'react'

const Dashboard = () => (
  <>
  
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
    
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
          style={{borderRadius:'15px'}}
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit  />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Statistique />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
