import React, { Component } from 'react';
import logo from "../../../assets/images/logo.png";
import { Link } from 'react-router-dom';
class Navbar extends Component {
    state = {}

    handleLogout = () => {
        localStorage.removeItem('user');
        window.location = '/';
    }

    render() {
        let user = localStorage.getItem('user');
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
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/player">Player</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teams">Teams</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/series">Series</Link>
                            </li>
                            {!user &&
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </React.Fragment>
                            }
                            {user &&
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">{user}</Link>
                                    </li>
                                </React.Fragment>
                            }
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            {user && <button className="btn btn-primary my-2 my-sm-0" onClick={this.handleLogout} type="submit">
                                Logout
</button>}
                        </form>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;