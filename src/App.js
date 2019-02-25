import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/page/json/about-us', {
            headers: {
                Authorization: 'Basic ' + btoa('admin@dotcms.com:admin')
            }
        })
            .then(data => data.json())
            .then(page => this.setState(page.entity));
    }

    render() {
        return <Page {...this.state} />;
    }
}

export default App;
