import React from 'react';

const Event = props => {
    return (
        <>
            <h3>{props.title}</h3>
            <time>{new Date(props.startDate).toDateString()}</time>
        </>
    );
};

export default Event;
