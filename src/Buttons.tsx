import React, {FC} from 'react';
import {Button} from 'react-bootstrap';

export const Buttons: FC = () => {
  return <div>
    <legend>Buttons</legend>
    <div>
      <Button>Default</Button>
      <Button variant='secondary'>secondary</Button>
      <Button variant='success'>success</Button>
      <Button variant='danger'>danger</Button>
      <Button variant='warning'>warning</Button>
      <Button variant='info'>info</Button>
      <Button variant='dark'>dark</Button>
      <Button variant='light'>light</Button>
      <Button variant='link'>link</Button>
      <Button variant='outline-primary'>outline-primary</Button>
      <Button variant='outline-secondary'>outline-secondary</Button>
      <Button variant='outline-success'>outline-success</Button>
      <Button variant='outline-danger'>outline-danger</Button>
      <Button variant='outline-warning'>outline-warning</Button>
      <Button variant='outline-info'>outline-info</Button>
      <Button variant='outline-dark'>outline-dark</Button>
      <Button variant='outline-light'>outline-light</Button>
    </div>
  </div>;
};
