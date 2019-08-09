import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const TotalGuests = props => {
  return (
    <Fragment>
      <Typography>Occupancy Remaining</Typography>
      <Typography>{props.occupancy - props.currentGuests}</Typography>
    </Fragment>
  );
};

export default TotalGuests;