import React, { Component } from 'react';
import { getNews } from "../../../services/newsService/newsService.jsx";
class News extends Component {
    state = {
        news: []
    }

    async componentDidMount() {
        let { data: news } = await getNews();
        this.setState({ news });
        //console.log(this.state.news)
    }

    render() {
        let { news } = this.state;
        return (
            <React.Fragment>
                {news.map(singleNews => {
                    return (
                        <div key={singleNews.id} className="card mb-3" style={{ "maxWidth": "900px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={singleNews.imageUrl} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{singleNews.title}</h5>
                                        <p className="card-text">{singleNews.detail}</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default News;