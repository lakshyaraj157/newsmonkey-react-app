import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span className="badge rounded-0 bg-danger" >
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <img src={!imageUrl ? "https://data1.ibtimes.co.in/en/full/769135/spacex-rocket.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark" target="_blank">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
