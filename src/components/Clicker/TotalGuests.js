import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const TotalGuests = props => {
  return (
    <Fragment>
      <Typography>Total Guests:</Typography>
      <Typography>{props.totalGuests}</Typography>
    </Fragment>
  );
};

export default TotalGuests;
