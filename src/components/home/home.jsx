import React, { Component } from 'react';
import Navbar from "../shared/navbar/navbar.jsx";
import News from "../shared/news/news.jsx";
import SideNavbar from '../shared/sideNavbar/sideNavbar.jsx';
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
                        <News />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;