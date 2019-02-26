import React from 'react';
import Row from './Row';

const Page = props => {
    const { layout } = props;
    return layout
        ? layout.body.rows.map(row => {
            return <Row key={row.identifier} />;
        })
        : null;
};

export default Page;
