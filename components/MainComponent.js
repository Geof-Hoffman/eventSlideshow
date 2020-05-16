import React, { Component } from 'react';
import Landing from './LandingComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    render() {
        return <Landing userLogin={this.state.loggedIn} />;
    }
}

export default Main;