/* eslint-disable no-else-return */
import React from 'react';
import styled from 'styled-components';

const axios = require('axios');


const Star = styled.div`
  width: 50px;
  height: 50px;
`;

const Stars = ({stars}) => {
  // render stars based on rating received
  const handleRating = (rating) => {
    if (stars === 0) {
      return '☆☆☆☆☆';
    } else if (stars === 1) {
      return '★☆☆☆☆';
    } else if (stars === 2) {
      return '★★☆☆☆';
    } else if (stars === 3) {
      return '★★★☆☆';
    } else if (stars === 4) {
      return '★★★★☆';
    } else {
      return '★★★★★';
    }
  }

    return (
      <Star className="rating">
        {handleRating(stars)}
      </Star>
    );
};

export default Stars;
