import React from 'react';
import { Col as BtColumn } from 'reactstrap';
import Container from './Container';

const Column = props => {
    return (
        <BtColumn sm={props.width}>
            {props.containers.map((container, i) => (
                <Container key={i} {...container} />
            ))}
        </BtColumn>
    );
};

export default Column;
