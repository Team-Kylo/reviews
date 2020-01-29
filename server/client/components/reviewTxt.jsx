import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Text = styled.div`
  width: 250px;
`;

const ReviewText = ({ text }) => (
  <Text>
    {text}
  </Text>
);


export default ReviewText;
