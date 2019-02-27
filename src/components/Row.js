import React from 'react';
import { Row as BtRow } from 'reactstrap';
import Column from './Column';

const Row = props => {
    const { columns } = props;
    return (
        <BtRow>
            {columns.map((column, i) => <Column {...column} key={i} />)}
        </BtRow>
    );
};

export default Row;
