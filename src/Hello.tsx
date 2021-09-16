import React, {FC} from 'react';
import {Buttons} from './buttons';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Forms} from './Forms';
import {Grids} from './Grids';
import {UtilClassnames} from './UtilClassnames';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div style={{padding: 20}}>
    <Buttons/>
    <hr/>
    <Forms/>
    <hr/>
    <Grids/>
    <hr/>
    <UtilClassnames/>
  </div>;
}
