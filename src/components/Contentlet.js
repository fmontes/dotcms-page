import React from 'react';
import ContentGeneric from './ContentGeneric';
import Event from './Event';
import SimpleWidget from './SimpleWidget';

function getComponent(type) {
    switch (type) {
        case 'webPageContent':
            return ContentGeneric;
        case 'SimpleWidget':
            return SimpleWidget;
        case 'calendarEvent':
            return Event;
        default:
            return ContentGeneric;
    }
}

const Contentlet = props => {
    const Component = getComponent(props.contentType);
    return <Component {...props} />;
};

export default Contentlet;
