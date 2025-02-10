import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "25rem" }}>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imageurl
                ? "https://ambcrypto.com/wp-content/uploads/2025/02/Ritika1-1-1000x600.webp"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn byn-sm btn-primary btn-dark"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(publishedAt).toLocaleTimeString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
