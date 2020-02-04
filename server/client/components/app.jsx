/* eslint-disable no-return-assign */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReviewBox from './reviewBox';

const axios = require('axios');

let id = document.location.search.slice(1);
id = Number(id);

const MoreReviews = styled.button`
  padding-left: 20px;
  border: none;
  background: none;
  color: black;
  font-size: 13px;
  overflow-y: hidden;
`;

const TotalReviews = styled.div`
  height: 15px;
  width: 500px;
  margin-bottom: 30px;
  padding-left: 25px;
  display: flex;
  justify-content: flex-start;
`;
const Stars = styled.div`
  padding-left: 10px;
  font-size: 18px;
`;

const Reviews = styled.div`
  font-size: 18px;
  font: Sans-serif;
  padding-top: 2px;
`;

const NumOfReviews = styled.div`
  font-size: 15px;
  padding-top: 7px;
  padding-left: 5px;
`;

const AllReviews = styled.button`
  color: white;
  background: black;
  border-radius: 3px;
  width: 160px;
  height: 40px;
  font-size: 14px;
  padding: 8px 12px 8px 25px;
  font-weight: bold;
  display: inline-block;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreReviews: false,
      averageReviews: 0,
      numberOfReviews: 0,
      currentReviews: [],
      reviews: [],
    };
    this.flag = this.flag.bind(this);
    this.totalStars = this.totalStars.bind(this);
  }

  componentDidMount() {
    axios.get(`/${id}`)
      .then((response) => {
        let averageRating = 0;
        let currentReviews = [];
        response.data.forEach((item) => {
          averageRating += item.rating;
          currentReviews.push(item);
        });
        currentReviews = currentReviews.slice(id, id + 20);
        const reviews = currentReviews.slice(0, 4);
        this.setState({
          averageReviews: Math.round(averageRating / response.data.length),
          numberOfReviews: response.data.length,
          currentReviews,
          reviews,
        });
      });
  }

  flag() {
    id -= 4;
    const { currentReviews } = this.state;
    const newData = currentReviews.map((review) => (
      <ReviewBox id={id} key={review.dbId} />
    ));
    this.setState({
      moreReviews: true,
      reviews: newData,
    });
  }

  totalStars() {
    const { averageReviews } = this.state;
    if (averageReviews < 1 && averageReviews > 0) {
      return '☆☆☆☆☆';
    } if (averageReviews >= 1 && averageReviews < 2) {
      return '★☆☆☆☆';
    } if (averageReviews >= 2 && averageReviews < 3) {
      return '★★☆☆☆';
    } if (averageReviews >= 3 && averageReviews < 4) {
      return '★★★☆☆';
    } if (averageReviews >= 4 && averageReviews < 5) {
      return '★★★★☆';
    }
    return '★★★★★';
  }

  render() {
    let button;
    const { moreReviews, numberOfReviews, reviews } = this.state;
    if (moreReviews) {
      button = <AllReviews className="button">Read All Reviews</AllReviews>;
    } else {
      button = <MoreReviews onClick={this.flag} className="button"><u><b>+ More</b></u></MoreReviews>;
    }
    return (
      <div className="reviews">
        <TotalReviews>
          <Reviews>
            Reviews
          </Reviews>
          <Stars>
            {this.totalStars()}
          </Stars>
          <NumOfReviews>
            {`(${numberOfReviews})`}
          </NumOfReviews>
        </TotalReviews>
        {reviews.map((review) => (
          <ReviewBox id={id} key={review.dbId}>
            {id += 1}
          </ReviewBox>
        ))}
        <div className="button">
          {button}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('components'),
);
