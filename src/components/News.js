import React, { Component } from "react";
import NewsItem from "./NewsItem";
 
import {
   Link
} from "react-router-dom";
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
      loading: false,
      page: 1,
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

  handelNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.TotalResult / 18)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=${
        this.state.page + 1
      }&pagesize=18`;

      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: this.state.page + 1,
      });
    }
  };
  handelpreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=${
      this.state.page - 1
    }&pagesize=18`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: this.state.page - 1,
    });
  };
  page1news = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=1&pagesize=18`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  };
  page2news = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=2&pagesize=18`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  };
  page3news = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=3&pagesize=18`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  };
  
  render() {
    return (
      <>
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
                  <Link className="nav-link"  to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/science">
                  science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/sports">
                  sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/technology">
                  technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h2>Top Headlines</h2>

        <div className="container my-3">
          <div className="row my-3">
            {/* Check if articles exist and map */}
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    discription={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="d-flex mb-3">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <div
                      className="page-link"
                      onClick={this.handelpreviousClick}
                    >
                      Previous
                    </div>
                  </li>
                  <li className="page-item">
                    <div className="page-link" onClick={this.page1news}>
                      1
                    </div>
                  </li>
                  <li className="page-item">
                    <div className="page-link" onClick={this.page2news}>
                      2
                    </div>
                  </li>
                  <li className="page-item">
                    <div className="page-link" onClick={this.page3news}>
                      3
                    </div>
                  </li>
                  <li className="page-item">
                    <div className="page-link" onClick={this.handelNextClick}>
                      Next
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
