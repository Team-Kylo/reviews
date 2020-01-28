import React from 'react';
import styled from 'styled-components';
import AvatarImg from './avatar';
import Stars from './stars';
import ReviewText from './reviewTxt';
import UsernameAndDate from './username';
import ItemLink from './itemLink';


const Box = styled.div`
  width: 65%;
  height: 250px;
`;

class ReviewBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Box>
        <AvatarImg />
        <Stars />
        <ReviewText />
        <UsernameAndDate />
        <ItemLink />
      </Box>
    )
  }
}

export default ReviewBox;
