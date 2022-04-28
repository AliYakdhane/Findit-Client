import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CCard, CCardBody, CCardFooter, CCardHeader } from '@coreui/react'
import devices0 from '../../../assets/devices0.jpg'
import {Card}  from '@mui/material';
import {
  makeStyles
} from "@material-ui/core";
const steps = ['Item registred', 'Match found', 'Authentication in progress', 'Verified authentification', 'Returned Item'];
function Homecontent() {
  const styles = theme => ({
    root: {
      width: "90%"
    },
    button: {
      marginRight: theme.spacing.unit
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    stepIcon: {
      color: "pink"
    }
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const [classes, setClasses]= React.useState({});

  return (
    <div>
   
      <div>
      <h4 className="text-gray-600">Home</h4>
    </div>
        <br/>
        <Card style={{height:'83ch', borderRadius:'15px'}}>
      <br/>
      
      <div style={{display:'flex',justifyContent:'center',marginTop:'3rem'}}>
      <CCard style={{width:'90ch',height:'43ch',borderRadius:'15px'}}>
      <CCardHeader style={{borderRadius:'15px 15px 0 0',height:'3.5rem'}}> <h5 style={{textAlign:'center'}}> My last Item added</h5></CCardHeader>
      <CCardBody>
      <div className="row">
      <div className="col-7 m-2">
      <br/>
      <div >
      <h5 style={{display:'flex',flexDirection:'row'}}>Category:
      <h5  style={{marginLeft:'1rem'}}>Smartphone</h5> </h5></div>
      <br/>
      <div >
      <h5 style={{display:'flex',flexDirection:'row'}}>State:
      <h5  style={{marginLeft:'1rem'}}>Lost</h5> </h5></div>
      <br/>
      <div >
      <h5 style={{display:'flex',flexDirection:'row'}}>Adress:
      <h5  style={{marginLeft:'1rem'}}>Mrezga, Hammamet Nord</h5> </h5></div>

      <br/>
      <div >
      <h5 style={{display:'flex',flexDirection:'row'}}>Date:
      <h5  style={{marginLeft:'1rem'}}>22-04-2022</h5> </h5></div>
            
      <div className='flex flex-row items-center justify-start  space-x-4 mt-4' >
      <button
      style={{backgroundColor:'#fff',border:'2px solid #5D8C8E'}}   
         className='w-1/2 color-dark max-w-xs text-black font-bold shadow-sm  rounded-lg py-3   flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline '
    >
      
      <span className=' items-center text-color-black'>Preview</span>
    </button>
      
       
     
        <button
        style={{backgroundColor:'#fff',border:'2px solid #5D8C8E'}}
         
          className='w-1/2 max-w-xs  font-bold shadow-sm  rounded-lg py-3 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline '
        >
          
          <span className=' items-center'>Edit</span>
        </button>
      
    
    </div>
      </div>
      <div className="col-4">
      <img style={{display:'flex',justifyContent:'center',height:'18rem',borderRadius:'12px'}} src={devices0} alt='logo'/>

      </div>
      </div>
      </CCardBody>
    </CCard></div>
    <br/>
    <br/>
    <br/>
    <Box sx={{ width: '120ch', display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'2rem' }}>
    <Stepper  nonLinear activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step 
        sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: 'black', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'black', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#008080', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }}
        key={label} completed={completed[index]}>
          <StepButton  classes= {{ root: classes.stepIcon }}  onClick={handleStep(index)}>
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
    <div>
      
        <React.Fragment >
       
          
        </React.Fragment>
  <br/>
  <br/>
        <div style={{display:'flex',justifyContent:'center'}}>
          
          <button style={{backgroundColor:'#5D8C8E',borderRadius:'10px',height:'4rem',width:'16rem'}}>
           
            
           
                <h6 style={{color:'#fff'}}>
                  Step {activeStep + 1} already completed
                </h6>
             
          </button>
        </div>
      
    </div>
  </Box>
        </Card>
       
        
        </div>
  )
}

export default Homecontent