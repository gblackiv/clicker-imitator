import React, { useState, useEffect } from 'react';
import ShLogo from '../SH-logo.png';
import {
  UpButton,
  DownButton,
  Display,
  TotalGuests,
  Occupancy
} from './Clicker/';
import { Grid, TextField, InputAdornment } from '@material-ui/core';

const Clicker = () => {
  const [currentNumberOfGuests, setCurrentNumberOfGuests] = useState(0);
  const [totalGuests, setTotalGuests] = useState(0);
  const [reservations, setReservations] = useState('');

  useEffect(() => {
    if (reservations) {
      setCurrentNumberOfGuests(parseInt(reservations));
      setTotalGuests(parseInt(reservations));
    }
  }, [reservations]);

  const core = {
    upButton: {
      onClick: () => {
        setCurrentNumberOfGuests(currentNumberOfGuests + 1);
        setTotalGuests(totalGuests + 1);
      }
    },
    downButton: {
      onClick: () => setCurrentNumberOfGuests(currentNumberOfGuests - 1),
      disabled: !currentNumberOfGuests
    },
    display: {
      currentNumberOfGuests
    },
    totalGuests: {
      totalGuests
    },
    occupancy: {
      occupancy: 255,
      currentGuests: currentNumberOfGuests
    },
    reservations: {
      value: reservations,
      type: 'number',
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">Reservations</InputAdornment>
        )
      },
      onChange: e => {
        setReservations(e.target.value);
      }
    }
  };

  return (
    <Grid container justify="space-around" spacing={4}>
      <Grid item xs={12} container justify="space-between">
        <Grid item xs={4} style={{ paddingTop: '20px' }}>
          <Occupancy {...core.occupancy} />
        </Grid>
        <Grid item xs={4}>
          <img src={ShLogo} alt="logo" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid item xs={4} style={{ paddingTop: '20px' }}>
          <TotalGuests {...core.totalGuests} />
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <UpButton {...core.upButton} />
      </Grid>
      <Grid item xs={10}>
        <Display {...core.display} />
      </Grid>
      <Grid item xs={10}>
        <DownButton {...core.downButton} />
      </Grid>
      <Grid item xs={5}>
        <TextField {...core.reservations} />
      </Grid>
    </Grid>
  );
};

export default Clicker;
