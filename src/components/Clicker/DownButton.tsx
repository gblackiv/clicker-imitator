import React from 'react';
import { Button } from '@material-ui/core';
import { Remove } from '@material-ui/icons';

interface IProps {
  disabled: boolean,
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

const DownButton = (props: IProps) => {
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
