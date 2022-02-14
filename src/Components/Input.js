
import React from 'react'
import { Typography, Paper, Grid, Box, TextField, Select,Radio, RadioGroup,FormControlLabel, Button, Modal,makeStyles, } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
}))
const Input=( {label,...props}) =>{
const classes=useStyles()

  return (
    <div className={classes.inputContainer}>
    <div className={classes.row}>
    <Typography className={classes.inputLabel}>{label}</Typography>
    <TextField autoCapitalize="none" className={classes.input}  InputProps={{ disableUnderline: true }} {...props} />
    </div>
    </div>
  )
}
export default Input