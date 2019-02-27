import React from 'react';
import Contentlet from './Contentlet';

const Container = (props) => {
    return props.contentlets.map((contentlet, i) => <Contentlet key={i} {...contentlet} />);
};

export default Container;
