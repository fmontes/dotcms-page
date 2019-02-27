import React from 'react';

const ContentGeneric = (props) => {    
    return <div dangerouslySetInnerHTML={{__html: props.body}} />;
};

export default ContentGeneric;
