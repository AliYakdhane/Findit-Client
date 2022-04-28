import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallMade from '@material-ui/icons/CallMade';
import idea from '../assets/idea.png'
import { Row, Column, Item } from '@mui-treasury/components/flex';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.2rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#495869',
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: '#495869',
  },
}));



const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: '1.25rem',
    color: '#122740',
  },
  subheader: {
    fontSize: '0.875rem',
    color: '#495869',
  },
}));

const CardHeader = props => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={'middle'}>
      <Box
      component="img"
      sx={{
        height: 200,
        display: 'block',
        maxWidth: 800,
        overflow: 'hidden',
        width: '100%',
      }}
      src={idea}
      alt='idée'
    />
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
      backgroundColor:'#fff',
    border: '1px solid',
    borderColor: '#CACACA',
    borderRadius: 15,
    transition: '0.4s',
 
    '&:hover': {
      borderColor: '#008080',
    },
  },
}));

export const ShowcaseCardDemo = React.memo(function ShowcaseCard() {
  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }
  return (
    <Grid container spacing={4} justify={'center'}>

      <Grid item xs={12} sm={8} lg={7}>
        <Row className={styles.card} p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap}>
          <Item>
            <CardHeader />
          </Item>
          <Item grow>
          <Box minHeight={200} maxWidth={600} bgcolor={'#E8F1F2'} borderRadius={8} >
          <br/>
          <h3 style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
          You should know
         </h3>
         <br/>
         <h5 style={{textAlign:'center',display:'flex',justifyContent:'center',fontFamily:'bold'}}> If you add a photo to your report, you increase by more than 50% your chances of finding your lost item.</h5>
          
          </Box>
          </Item>
        </Row>
      </Grid>
    </Grid>
  );
});
export default ShowcaseCardDemo