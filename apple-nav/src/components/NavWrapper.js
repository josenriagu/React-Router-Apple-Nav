import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavWrapper extends Component {
    render() {
        return (
            <div className="headernav-wrapper">
                <nav className='headernav'>
                    <div className="link"><NavLink to="/">Home</NavLink></div>
                    {
                        this.props.navData.map(nav => <div className="link"
                            key={nav.id}>
                            <NavLink
                                to={`/${nav.url}`}>
                                {nav.name}
                            </NavLink></div>)
                    }
                    <div className="link"><NavLink to="/support">Support</NavLink></div>
                    <div className="link"><NavLink to="/search">Search</NavLink></div>
                    <div className="link"><NavLink to="/cart">Cart</NavLink></div>
                </nav>
            </div>
        );
    }
}