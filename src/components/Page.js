import React from 'react';
import Row from './Row';
import { getUpdatedColumns } from '../utils'

const Page = props => {
    const { layout, containers } = props;
    return layout
        ? layout.body.rows.map(row => {
            const columns = getUpdatedColumns(row.columns, containers);
            return <Row key={row.identifier} columns={columns} />;
        })
        : null;
};

export default Page;
