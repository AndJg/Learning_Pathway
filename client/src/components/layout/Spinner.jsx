import React, { Fragment } from 'react';
import loadinggif from '../img/loadinggif.jpg';

export default () => (
    <Fragment>
        <img src={loadinggif} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading..." />
    </Fragment>
);
