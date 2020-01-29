import React from 'react';
import styled from 'styled-components';
import AvatarImg from './avatar';
import Stars from './stars';
import ReviewText from './reviewTxt';
import UsernameAndDate from './username';
import ItemLink from './itemLink';

const axios = require('axios');

const Box = styled.div`
  width: 65%;
  height: 250px;
`;

class ReviewBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      item: '',
      itemImageUrl: '',
      text: '',
      starRating: 0,
      username: '',
      datePosted: '',
    };
  };

  componentDidMount() {
    const id = window.location.search.slice(1);
    axios.get(`/${id}`)
      .then((response) => {
        this.setState({
          imageUrl: response.data.avatarImgUrl,
          item: response.data.itemForSale,
          itemImageUrl: response.data.imageUrl,
          text: response.data.text,
          starRating: response.data.rating,
          username: response.data.username,
          datePosted: response.data.datePosted.slice(0, 10),
        });
      });
  }
  render() {
    return (
      <Box>
        <AvatarImg image={this.state.imageUrl} />
        <Stars stars={this.state.starRating} />
        <ReviewText text={this.state.text} />
        <UsernameAndDate name={this.state.username} date={this.state.datePosted} />
        <ItemLink item={this.state.item} link={this.state.itemImageUrl} />
      </Box>
    )
  }
}

export default ReviewBox;
