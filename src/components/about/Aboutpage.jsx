"use strict";

var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>This application used the follwoing technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Webpack</li>
                    </ul>
                </p>                
            </div>
        );
    }
});

module.exports = About;
