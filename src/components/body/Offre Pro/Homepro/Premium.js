import React from 'react';
import cx from 'clsx';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Column, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import { Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
const family = 'Rubik';
const styles = {
  marginBottom: 50,
};

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
      <Nav.Item eventKey="home" >
        Home
      </Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};

const useStyles = makeStyles(() => ({
  card: {
      display:'flex',
      alignItem:'center',
    position: 'absolute',
    borderRadius: 16,
    margin: "auto",
    backgroundColor: '#e5fcfb',
    maxWidth: 850,
  },
  learnMore: {
    backgroundColor: '#fff !important',
    color: '#008080',
    boxShadow: '0 2px 6px #d0efef',
    borderRadius: 12,
    minWidth: 120,
    minHeight: 42,
    fontFamily: family,
    textTransform: 'initial',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: 0,
  },
  img: {
    position: 'absolute',
    width: '30%',
    bottom: 0,
    right: 0,
    display: 'block',
  },
  shell: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: 'translate(70%, 50%)',
    borderRadius: '50%',
    backgroundColor: 'rgba(71, 167, 162, 0.12)',
    padding: '40%',
    '&:before': {
      position: 'absolute',
      borderRadius: '50%',
      content: '""',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: '-16%',
      backgroundColor: 'rgba(71, 167, 162, 0.08)',
    }
  },
}));

const useOfferInfoStyles = makeStyles(() => {
  return {
    title: {
      color: '#fb703c',
      fontFamily: family,
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    subtitle: {
      color: '#48bbb5',
      fontFamily: family,
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  };
});

export const OfferCardDemo = React.memo(function OfferCard() {

  const [active, setActive] = React.useState('home');
  const styles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
      </NoSsr>
      <br/>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Card className={cx(styles.card, shadowStyles.root)}>
        <Column gap={2} mr={2}>
          <Info position={'middle'} useStyles={useOfferInfoStyles}>
            <InfoTitle>50 Days of Premium!</InfoTitle>
            <InfoSubtitle>Get it before 01.01.2020</InfoSubtitle>
          </Info>
          <Item mt={2}>
            <Button className={styles.learnMore}>Learn more</Button>
          </Item>
        </Column>
        <img
          className={styles.img}
          alt={''}
          src={
            'https://pathwaychurch.life/wp-content/uploads/2018/09/bow-transparent-background-1.png'
          }
        />
        <div className={styles.shell} />
      </Card></div>
      <Nav>
      <Nav.Item>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
    </>
  );
});
export default OfferCardDemo;
