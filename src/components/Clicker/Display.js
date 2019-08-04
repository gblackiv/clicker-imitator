import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const Display = props => {
  return (
    <Fragment>
      <Typography variant="h5">Current # of Guests:</Typography>
      <Typography variant="h5">{props.currentNumberOfGuests}</Typography>
    </Fragment>
  );
};

export default Display;
