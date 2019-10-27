import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

interface IProps {
  occupancy: number,
  currentGuests: number
}

const TotalGuests = (props: IProps) => {
  return (
    <Fragment>
      <Typography>Occupancy Remaining</Typography>
      <Typography>{props.occupancy - props.currentGuests}</Typography>
    </Fragment>
  );
};

export default TotalGuests;