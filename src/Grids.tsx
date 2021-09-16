import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const style = {
  border: '1px solid red',
  backgroundColor: '#bbeffd'
}
export const Grids = () => {

  return <Container>
    <Row className="show-grid">
      <Col xs={4} style={style}>xs=4</Col>
      <Col xs={8} style={style}>xs=8</Col>
    </Row>
    <Row className="show-grid">
      <Col xs={{span: 6, offset: 2}} style={style}>xs=6 xsOffset=2</Col>
    </Row>
  </Container>
};
