import React from 'react';
import Row from './Row';
import { getUpdatedColumns } from '../utils'
import { Container as BtContainer } from 'reactstrap';

const Page = props => {
    const { layout, containers } = props;
    return (
        <BtContainer>
            {layout
                ? layout.body.rows.map(row => {
                    const columns = getUpdatedColumns(row.columns, containers);
                    return <Row key={row.identifier} columns={columns} />;
                })
                : null}
        </BtContainer>
    );
};

export default Page;
