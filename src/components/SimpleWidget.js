import React, { Component } from 'react';

export default class SimpleWidget extends Component {
    constructor() {
        super();
        this.state = {
            html: ''
        };
    }
    componentDidMount() {
        fetch(`http://localhost:8080/api/widget/id/${this.props.identifier}`)
            .then(response => response.text())
            .then(html => {
                this.setState({
                    html: html
                });
            });
    }
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.state.html }} />;
    }
}
