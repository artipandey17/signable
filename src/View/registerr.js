import React from 'react'
 import { Typography, Paper, Grid, Box, TextField, Select,Radio, RadioGroup,FormControlLabel, Button, Modal,makeStyles, } from "@material-ui/core";
import { styled,alpha } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {KeyboardDatePicker}   from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Input from '../Components/Input';
import moment from "moment";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Icon from '@material-ui/core/Icon';
import web from "../Assets/logo.png"
const useStyles= makeStyles((theme)=>({
  form:{
    justify: "center",
    alignItems: "center",
    direction: "row",
    display:"flex"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 40,
},
inputContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 8,
    borderColor: '#2760A3',
    borderWidth: 1,
    height: 60,
    width: '80%'
},
row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: "1px solid rgb(42, 84, 250)",
    width:"400px",
    height:"51px",
    borderRadius:"5px",
    paddingTop:"3px",
    paddingLeft:"15px",
    paddingBottom:"2px"
},
inputLabel: {
    paddingTop: 5,
    fontSize: 13,
    color: '#5490D6',
   marginBottom:"2px",
},
input: {
    color: '#515151',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
    marginTop: -5,
    flex: 1,
    width:"397px"
   
},
image:{
  marginRight:"auto",
  marginLeft:"auto",

  height: '4%',
      width: '40%',
     
}
}));





export default function Registerr() {
const classes=useStyles();

  return (
    
    <Box style={{padding:"10",paddingLeft:"2%" }}>
        <div style={{alignContent:"center ",width:"20%"}}>
        {/* <img src={web} alt="Logo" className={classes.image}   /> */}
        </div>
        <Grid style={{marginTop:"2%" ,paddingLeft:15}}>
        <Typography  style={{fontSize:"20px" ,textAlign:"center"}}>Register</Typography>
        </Grid>
        <form >
       <Grid container spacing={0}
       direction="column"
       alignItems="center"
       justifyContent="center"
      >
        <Grid item xs={12} >
       <Input
       required
        label="First Name & Middle Name"
        id="reddit-input"
       placeholder="First & Middle"
       />
      </Grid>
       <Grid item xs={12}>
       <Input
       required
        label="Last Mame"
        id="Last Name"
       placeholder="Last Name"
       
       />
      </Grid>
      <Grid item xs={12} >
        <>
      {/* <KeyboardDatePicker
        placeholder="2018/10/10"
         format="yyyy/MM/dd"
      />  */}
      </>
      </Grid>
      <Grid item xs={12} >
      <div className={classes.inputContainer}>
      <div className={classes.row}>
    <Typography className={classes.inputLabel}>Gender</Typography>
        <div style={{display:"flex",justifyContent:10}}>
        <Radio
         name="male"
         style={{marginTop:"-2.5%"}}
      />
      <FontAwesomeIcon icon="fa-solid fa-person" />
      <Radio
         name="male"
         style={{marginTop:"-2.5%"}}
      /><Radio
      name="male"
      style={{marginTop:"-2.5%"}}
   />
      </div>
        </div>
        </div>
      </Grid>
      <Grid item xs={12} >
      <div className={classes.inputContainer}>
      <div className={classes.row}>
    <Typography className={classes.inputLabel}>State</Typography>
     <InputLabel>select state</InputLabel> 
    {/* <Select
        labelId="state"
        id="state"
        label="State"
        placeholder='State'
      >
      <MenuItem> Rajasthan</MenuItem>
     <MenuItem> Gujarat</MenuItem>
     <MenuItem> Maharastra</MenuItem>
       
     </Select> */}
    </div>
    </div>
    </Grid>
    <Grid item xs={12} >
      <div className={classes.inputContainer}>
      <div className={classes.row}>
    <Typography className={classes.inputLabel}>State</Typography>
     <InputLabel>select state</InputLabel> 
    {/* <Select
        labelId="state"
        id="state"
        label="State"
        placeholder='State'
      >
      <MenuItem> Rajasthan</MenuItem>
     <MenuItem> Gujarat</MenuItem>
     <MenuItem> Maharastra</MenuItem>
       
     </Select> */}
    </div>
    </div>
    </Grid>
    <Grid item xs={12} >
      <Input
       required
        label="Email(optional)"
        id="Last Name"
       placeholder="yourmail@gmail.com"
       
       />
      </Grid> 
      <Grid item xs={12} >
      <Input
       required
        label="Phone"
        id="Last Name"
       placeholder="91-"
       
       />
      </Grid>
      
      
      <Grid>
          <Button variant="filled" style={{width:"400px ",backgroundColor:"#2a54fa",marginTop:"4%" }} >Register</Button>
      </Grid> 
      
      
      </Grid>
      </form>
    </Box>
  )
}
