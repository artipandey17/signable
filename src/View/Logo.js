import React from 'react'
import { Typography, Paper, Grid, Box, TextField, Select,Radio, RadioGroup,FormControlLabel, Button, Modal,makeStyles, } from "@material-ui/core";
import image from "../Assets/logo.png"
const useStyles = makeStyles((theme) => ({
    root: {
       height: '100vh',
      padding: "0px",
      maxWidth: '100vw',
      // overflowX: 'auto',
      // height: "auto",
    },
    image: {
      backgroundRepeat: 'no-repeat',
     
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%',
      resize: 'center'
    },
}));



export default function Logo() {
const classes = useStyles();



  return (
   <Grid container className={classes.root}>
    <Grid item xs={12} md={12} lg={12}>
    <div
            style={{
              width: "100%", height: "70%",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
             >
            <span
              style={{
                display: "inline-block",
                height: "100%",
                verticalAlign: "middle",
              }}
            ></span>
            <img
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                verticalAlign: "middle",
            }}
              src={image}
            />
          </div>
    </Grid>
   </Grid>
  )
}
