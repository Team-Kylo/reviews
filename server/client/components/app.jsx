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
  overflow-y: hidden;
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
          averageReviews: averageRating / response.data.length,
          numberOfReviews: response.data.length,
          currentReviews,
          reviews,
        });
      });
  }

  flag(event) {
    id -= 4;
    event.preventDefault();
    let newData = this.state.currentReviews.map((review) => {
      return (
        <ReviewBox id={id} key={review.dbId}></ReviewBox>
      )
    })
    this.setState({
      moreReviews: true,
      reviews: newData,
    });
  }

  totalStars(stars) {
    if (stars < 1 && stars > 0) {
      return '☆☆☆☆☆';
    } if (stars >= 1 && stars < 2) {
      return '★☆☆☆☆';
    } if (stars >= 2 && stars < 3) {
      return '★★☆☆☆';
    } if (stars >= 3 && stars < 4) {
      return '★★★☆☆';
    } if (stars >= 4 && stars < 5) {
      return '★★★★☆';
    }
    return '★★★★★';
  }

  render() {
    let button;
    if (this.state.moreReviews) {
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
            {this.totalStars(this.state.averageReviews)}
          </Stars>
          <NumOfReviews>
            {`(${this.state.numberOfReviews})`}
          </NumOfReviews>
        </TotalReviews>
        {this.state.reviews.map((review) => {
          return (<ReviewBox id={id} key={review.dbId}>{id += 1}</ReviewBox>);
        })}
        <div className="button">
          {button}
        </div>
      </div>
    );
  }

    //       <AllReviews>Read All Reviews</AllReviews>
    //     </div>
    //   </div>
    // );
};

ReactDOM.render(
  <App />,
  document.getElementById('components'),
);
