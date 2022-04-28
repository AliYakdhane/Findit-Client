import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import proohome from "../../../../assets/proohome.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Premium from './Premium'
import Divider from '@mui/material/Divider';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 850,
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  media: {
    width: "100%",

    paddingBottom: "38%",
    borderRadius: spacing(2),

    position: "relative",
    [breakpoints.up("md")]: {
      width: "38%",
      height: "15%",
    },
    "&:after": {
      content: '" "',
      position: "relative",
      width: "30%",
      height: "40%",
      backgroundImage: "linear-gradient(147deg, #008080 0%, #5D8C8E 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.7,
    },
  },
  content: {
    padding: 0,
  },
  cta: {
    textTransform: "initial",
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <>
      <br />
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia className={styles.media} image={proohome} />
        <Divider color='black' orientation="vertical" flexItem />
        <br/>
        <br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h4 style={{color:'#008080',marginTop:'1rem'}}> WHY CHOOSING FIND IT?</h4>
          </div>
          <br />
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CheckCircleOutlineIcon sx={{ color: "green" }} />{" "}
            <h6 style={{ marginLeft: "5px" }}>IMPROVE CUSTOMER EXPERIENCE</h6>
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CheckCircleOutlineIcon sx={{ color: "green" }} />{" "}
            <h6 style={{ marginLeft: "5px" }}>REDUCE YOUR FOOTPRINT</h6>
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CheckCircleOutlineIcon sx={{ color: "green" }} />{" "}
            <h6 style={{ marginLeft: "5px" }}>VALUE THE WORK OF YOUR TEAM AND SAVE TIME</h6>
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CheckCircleOutlineIcon sx={{ color: "green" }} />
            <h6 style={{ marginLeft: "5px", textTransform:'uppercase'  }}>transform lost & found into a great customer experience and save time</h6>
          </div>
        </div>
      </Card>
      <Premium/> 
    </>
  );
});
export default BlogCardDemo;
