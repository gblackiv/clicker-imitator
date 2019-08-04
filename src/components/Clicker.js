import React, { useState, useEffect, useRef } from 'react';
import { UpButton, DownButton, Display, TotalGuests } from './Clicker/';
import { Grid } from '@material-ui/core';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Clicker = () => {
  const [currentNumberOfGuests, setCurrentNumberOfGuests] = useState(0);
  const [totalGuests, setTotalGuests] = useState(0);
  const prevGuests = usePrevious(currentNumberOfGuests);

  useEffect(() => {
    if (prevGuests < currentNumberOfGuests) {
      setTotalGuests(totalGuests + 1);
    }
  }, [currentNumberOfGuests, prevGuests, totalGuests]);

  const core = {
    upButton: {
      onClick: () => setCurrentNumberOfGuests(currentNumberOfGuests + 1)
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
    }
  };

  return (
    <Grid container justify="space-around" spacing={4}>
      <Grid item xs={12} container justify="flex-end">
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
    </Grid>
  );
};

export default Clicker;
