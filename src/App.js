import React from 'react';
import {Link} from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>THIS IS BASIC PROJECT!</h1>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
