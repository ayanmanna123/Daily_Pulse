import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description,imageurl,newsUrl,publishedAt,author } = this.props;
    return (
      <div>
         <p>{publishedAt}</p>
        <div  className="card my-2" style={{ width: "25rem" }}>
          <img src={!imageurl? "https://ambcrypto.com/wp-content/uploads/2025/02/Ritika1-1-1000x600.webp":imageurl}  className="card-img-top" alt="..." />
          <div  className="card-body">
            <h5  className="card-title">{title}</h5>
            <p  className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn byn-sm btn-primary btn-dark">
              Read More
            </a>
            <p  className="card-text"><small  className="text-body-secondary">By {author?author:"Unknown" } on {publishedAt}</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
