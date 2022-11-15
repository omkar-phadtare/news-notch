import React, { Component } from "react";
import Card from "./Card";
import "./Nav.css";
import PropTypes from 'prop-types'

export default class TopNews extends Component {
  
static defaultProps = 
{
  category : 'general'
}

static propTypes ={

category : PropTypes.string

}


  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles
    };
  }

  async componentDidMount() {
    let url1 =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6911b9ede4e749349f1ae4790c0c9552`;
    let data = await fetch(url1);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }

  async componentDidUpdate()
  {
    let url1 =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6911b9ede4e749349f1ae4790c0c9552`;
    let data = await fetch(url1);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }


  render() {
   // console.log(this.props.category);
   

    return (
      <div>
        <h3 className="text-title">{this.props.category}</h3>
      <div className='back container'>
        {this.state.articles.map((element) => {
          return (
            <div key={element.url}>
              <Card
                title={element.title?element.title.slice(0, 50):""}
                description={element.description?element.description.slice(0, 88):""}
                ImgUrl={element.urlToImage}
                NewsUrl={element.url}

              />
            </div>
          );
        })
        }
      </div>
      </div>
    );
  }
}
