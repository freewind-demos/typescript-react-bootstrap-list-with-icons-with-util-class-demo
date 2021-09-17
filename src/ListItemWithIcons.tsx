import React, {FC} from 'react';
import {ListGroup} from 'react-bootstrap';
import {ItemWithIcons} from './ItemWithIcons';
import {ArrowLeft, ArrowRight} from 'react-bootstrap-icons';


export const ListItemWithIcons: FC = () => {
  return <ListGroup style={{width: 300}}>
    <ItemWithIcons start={<ArrowLeft />} end={<ArrowRight/>}>Hello1</ItemWithIcons>
    <ItemWithIcons start={<ArrowLeft/>} end={<ArrowRight/>}>Hello2</ItemWithIcons>
    <ItemWithIcons start={<ArrowLeft/>} end={<ArrowRight/>}>Hello3</ItemWithIcons>
  </ListGroup>;
}
