import React, { Component } from 'react';
import uuid from 'uuid';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        // destructure to get the name param for each navlink
        const { name } = this.props.match.params;
        // find the activenav from navData by matching the unique url
        const activeNav = this.props.navData.find(nav => nav.url === name)
        return (
            <div>
                {
                    (activeNav)
                        ?
                        <div className="subnav-wrapper">
                            <nav className='subnav'>
                                {

                                    activeNav.subnav.map(nav => <div className="link"
                                        key={uuid()}>
                                        <NavLink
                                            to={`/${name}/${nav.url}`}>
                                            {nav.name}
                                        </NavLink></div>)
                                }
                            </nav>
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

// FOOTNOTES: 
// Array.find() returns the object whereas Array.filter() returns an array containing the object
// condition in Line 14 is added to prevent passing params for links not included in navData which will throw an error and also to show subnav-wrapper for only when param is included in navData.