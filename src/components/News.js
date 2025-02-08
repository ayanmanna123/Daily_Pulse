import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
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

    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-08&sortBy=publishedAt&apiKey=5532c081141b4ef2937c8ba92f1336bf&pagesize=18`;
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
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-08&sortBy=publishedAt&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=${this.state.page+1}&pagesize=18`
      
         
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
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-08&sortBy=publishedAt&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=${this.state.page-1}&pagesize=18`
   
       
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
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-08&sortBy=publishedAt&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=1&pagesize=18`
    
       
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
       
    });
    
  }
  page2news = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-08&sortBy=publishedAt&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=2&pagesize=18`
    
       
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
       
    });
    
  }
  page3news = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-08&sortBy=publishedAt&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=3&pagesize=18`
    
       
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
       
    });
    
  }
  render() {
    return (
      <div className="container my-5">
        <h2>Top Headlines</h2>

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
                  <div className="page-link" onClick={this.handelpreviousClick}>
                    Previous
                  </div>
                </li>
                <li className="page-item">
                  <div className="page-link"  onClick={this.page1news}>
                    1
                  </div>
                </li>
                <li className="page-item">
                  <div className="page-link"  onClick={this.page2news}>
                    2
                  </div>
                </li>
                <li className="page-item">
                  <div className="page-link"  onClick={this.page3news}>
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
    );
  }
}

export default News;
