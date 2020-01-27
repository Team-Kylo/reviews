import React from 'react';
import AvatarImg from './avatar.jsx';
import Stars from './stars.jsx';
import ReviewText from './reviewTxt.jsx';
import styled from 'styled-components';

const Box = styled.div`
  width: 65%;
  height: 250px;
`
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
      </Box>
    )
  }
}

export default ReviewBox;