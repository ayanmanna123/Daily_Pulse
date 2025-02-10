import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

export class News extends Component {
  // static defaultprops ={
  //   cuntry : 'us',
  //   pageSize : 7

  // }
  // static propTypes ={
  //   cuntry : PropTypes.string,
  //   category :  General
  // }
  constructor() {
    super();
    console.log("News Component Constructor");
    this.state = {
      articles: [], // Initialize as an empty array
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    // Correct lifecycle method for data fetching

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5532c081141b4ef2937c8ba92f1336bf&pagesize=18`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      TotalResult: parsedData.totalResults,
    });
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=${this.state.page}&pagesize=18`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      TotalResult: parsedData.totalResults,
    });
  };
  render() {
    return (
     <>
             {/* <div className="container"> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Top headlines
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <h2>Top Headlines</h2>
        
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        discription={
                          element.description ? element.description : ""
                        }
                        imageurl={element.urlToImage}
                        newsUrl={element.url}
                        publishedAt={element.publishedAt}
                        author={element.author}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
