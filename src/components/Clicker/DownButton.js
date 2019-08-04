import React from 'react';
import { Button } from '@material-ui/core';
import { Remove } from '@material-ui/icons';

const DownButton = props => {
  return (
    <Button
      disabled={props.disabled}
      color="secondary"
      variant="contained"
      style={{ height: '200px', width: '200px' }}
      onClick={props.onClick}>
      <Remove />
    </Button>
  );
};

export default DownButton;
