import React, { Component } from 'react';
import Redirect, { Route, Switch } from "react-router-dom";
import Navbar from "../shared/navbar/navbar.jsx";
import News from "../shared/news/news.jsx";
import SideNavbar from '../shared/sideNavbar/sideNavbar.jsx';
import Login from '../login/login.jsx';
import Signup from '../signup/signup.jsx';
import Player from '../player/player.jsx';
import "./home.css";


class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid main-content">
                    <div className="row">
                        <SideNavbar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                            >
                                <h1 className="h2">CRICKET</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            Share
                </button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            Export
                </button>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <Switch>
                                    <Route path="/login" component={Login} />
                                    <Route path="/register" component={Signup} />
                                    <Route path="/player" component={Player} />
                                    <Route path="/" component={News} />
                                </Switch>
                            </div>
                        </main>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;