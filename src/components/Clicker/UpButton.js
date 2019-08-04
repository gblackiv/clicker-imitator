import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const UpButton = props => {
  return (
    <Button
      color="primary"
      variant="contained"
      onClick={props.onClick}
      style={{ height: '200px', width: '200px' }}>
      <Add />
    </Button>
  );
};

export default UpButton;
