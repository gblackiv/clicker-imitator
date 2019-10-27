import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

interface IProps {
  totalGuests: number
}

const TotalGuests = (props: IProps) => {
  return (
    <Fragment>
      <Typography>Total Guests:</Typography>
      <Typography>{props.totalGuests}</Typography>
    </Fragment>
  );
};

export default TotalGuests;
