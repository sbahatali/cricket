import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamsSidebar from '../../teamsSidebar/teamsSidebar';
import SeriesSidebar from '../../SeriesSidebar/seriesSidebar.jsx';

class SideNavbar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar sidebar-content">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <span data-feather="home"></span>
                  Dashboard <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <Switch>
                                <Route path="/teams" component={TeamsSidebar} />
                                <Route path="/series" component={SeriesSidebar} />
                            </Switch>


                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default SideNavbar;