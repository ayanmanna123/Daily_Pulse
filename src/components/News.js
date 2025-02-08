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

    let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=5532c081141b4ef2937c8ba92f1336bf`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      TotalResult : parsedData.totalResults
    })
  }
  
  handelNextClick = async () => {
    console.log("Next");
    if((this.state.page + 1 > Math.ceil(this.state.TotalResult/20))){
    }
    else{
  let url =`https://newsapi.org/v2/top-headlines?category=business&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=${this.state.page + 1} &pagesize=20`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    articles: parsedData.articles,
    loading: false,
    page: this.state.page + 1
    
  });
}
  

  }
  handelpreviousClick = async () => {


    let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=5532c081141b4ef2937c8ba92f1336bf&page=${this.state.page - 1} &pagesize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: this.state.page - 1
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
        <div className="container">
          <div class="d-flex mb-3">
            <div class="p-2">
              <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handelpreviousClick}>
                &larr; Previous
              </button>
            </div>

            <div class="ms-auto p-2">
              <button type="button" class="btn btn-dark" onClick={this.handelNextClick}>
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
