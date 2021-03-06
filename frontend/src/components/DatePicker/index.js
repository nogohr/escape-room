import 'date-fns';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker({ selectDate }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log('Date Selected', date);
    setSelectedDate(date);
    selectDate(date);
  };

  useEffect(() => {
    console.log('Selected Date', selectedDate);
  }, [selectedDate]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-around'>
        <KeyboardDatePicker
          fullWidth
          margin='normal'
          id='date-picker-dialog'
          label='Datum'
          format='MM/dd/yyyy'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'Verander datum',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
