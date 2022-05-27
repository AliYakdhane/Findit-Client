import React, { useState,useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import axios from 'axios'

import {useSelector, useDispatch} from 'react-redux'

import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'

import {isLength, isMatch} from '../../utils/validation/Validation'
import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'
const states = [
  {
    value: 'Tunisia',
    label: 'Tunisia'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = (props) => {
 
const initialState = {
  name: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}


  return (
      <div>
    <form
    
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card style={{minHeight:'53ch', borderRadius:'12px'}}>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                
                required
               
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <br/>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1
          }}
        >
        <Button 
        type='submit'
        style={{backgroundColor:'#008080'}} sx={{display: "flex", justifyContent: "center",backgroundColor:'#008080',width:'19rem',height:'2.5rem'}} variant="contained">
        <i className='fas fa-check fa 1x w-6  -ml-2' />
                <span className='ml-3'>Update</span>
                </Button>  
        </Box>
      </Card>
    </form></div>
  );
};
