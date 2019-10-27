import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

interface IProps {
  currentNumberOfGuests: number;
}

const Display = (props: IProps) => {
  return (
    <Fragment>
      <Typography variant="h5">Current # of Guests:</Typography>
      <Typography variant="h5">{props.currentNumberOfGuests}</Typography>
    </Fragment>
  );
};

export default Display;
