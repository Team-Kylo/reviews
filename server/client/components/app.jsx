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
      firstFour: [],
      lastSixteen: [],
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
        const firstFour = currentReviews.slice(0, 4);
        const lastSixteen = currentReviews.slice(4);
        this.setState({
          averageReviews: averageRating / response.data.length,
          numberOfReviews: response.data.length,
          currentReviews,
          firstFour,
          lastSixteen,
        });
      });
  }

  flag(event) {
    event.preventDefault();
    this.setState({
      moreReviews: true,
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
    if (!this.state.moreReviews) {
      return (
        <div>
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
          {this.state.firstFour.map((review) => <ReviewBox id={id} key={review.dbId}>{id += 1}</ReviewBox>)}
          <MoreReviews onClick={this.flag}><u><b>+ More</b></u></MoreReviews>
        </div>
      );
    }
    // if (this.state.moreReviews) {
    //   return (
    //     <div>
    //       { this.state.lastSixteen.map((reviews) => <ReviewBox id={id} key={reviews.dbId}>{id += 1}</ReviewBox>) }
    //       <AllReviews>Read All Reviews</AllReviews>

    //     </div>
    //   );
    // }
    return (
      <div>
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
        <div>
          <ReviewBox id={id} />
          <ReviewBox id={id + 1} />
          <ReviewBox id={id + 2} />
          <ReviewBox id={id + 3} />
          <ReviewBox id={id + 4} />
          <ReviewBox id={id + 5} />
          <ReviewBox id={id + 6} />
          <ReviewBox id={id + 7} />
          <ReviewBox id={id + 8} />
          <ReviewBox id={id + 9} />
          <ReviewBox id={id + 10} />
          <ReviewBox id={id + 11} />
          <ReviewBox id={id + 12} />
          <ReviewBox id={id + 13} />
          <ReviewBox id={id + 14} />
          <ReviewBox id={id + 15} />
          <ReviewBox id={id + 16} />
          <ReviewBox id={id + 17} />
          <ReviewBox id={id + 18} />
          <ReviewBox id={id + 19} />
          <AllReviews>Read All Reviews</AllReviews>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('components'),
);
