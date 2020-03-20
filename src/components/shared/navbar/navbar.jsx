import React, { Component } from 'react';
import logo from "../../../assets/images/logo.png";
class Navbar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-light bg-top-bar fixed-top">

                    <a href="#">www.cricket.com</a>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img className="mb-4" src={logo} alt="" width="30" height="30" /></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-primary my-2 my-sm-0" type="submit">
                                Logout
</button>
                        </form>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;