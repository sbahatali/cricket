import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SeriesService from "../../services/seriesService/seriesService.jsx";


class SeriesSidebar extends Component {
    state = {
        "series": []
    }
    async componentDidMount() {
        let { data: series } = await SeriesService.getSeries();
        this.setState({ series });
    }
    render() {
        let { series } = this.state;
        return (series.map(serie => {
            let { name: serie_name } = serie;
            let serieName = '/' + (serie_name.replace(/\s+/g, '-').toLowerCase());
            return (
                <li className="nav-item" key={serie.id}>
                    <Link className="nav-link" to={serieName}>
                        {serie.name}
                    </Link>
                </li>
            )
        })
        );
    }
}

export default SeriesSidebar;