
import React from 'react'
import DateFnsUtils from "@date-io/date-fns";

import { MuiPickersUtilsProvider , KeyboardDatePicker } from "@material-ui/pickers";

import moment from "moment";
import { Typography, TextField } from "@material-ui/core";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Icon from '@material-ui/core/Icon';


export default function EMDatePicker({ label, id,  }) {

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
           label={label}
          format="YYYY-MM-DD"
          shrink={true}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}

