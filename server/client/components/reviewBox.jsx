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
  display: grid;
  grid-template-columns: [col-one] 65px [col-two]200px ;
  grid-template-rows: [row-one] 25px [row-two] 20px [row-three] 100px [row-four] 25px;
  font-family: sans-serif;
  padding-left: 25px;
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
  }

  componentDidMount() {
    axios.get(`/${this.props.id}`)
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
    const {
      imageUrl,
      starRating,
      text,
      username,
      datePosted,
      item,
      itemImageUrl,
    } = this.state;
    return (
      <Box className="review">
        <AvatarImg image={imageUrl} />
        <UsernameAndDate name={username} date={datePosted} />
        <Stars stars={starRating} />
        <ReviewText text={text} />
        <ItemLink item={item} link={itemImageUrl} />
      </Box>
    );
  }
}

export default ReviewBox;
