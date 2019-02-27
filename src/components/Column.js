import React from 'react';
import { Col as BtColumn } from 'reactstrap';

const Column = (props) => {
    return <BtColumn sm={props.width}><h3>I'm a Column</h3></BtColumn>;
};

export default Column;
