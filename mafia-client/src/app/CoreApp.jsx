import React , { Component } from 'react';

class CoreApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
           name: 'Core'
        };

        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(event) {
        event.preventDefault();
    }

    render() {
        return(<div></div>);
    }

}

export default CoreApp;