// This is your avatar image component
import React from 'react';
import styled from 'styled-components';
const axios = require('axios');

const Avatar = styled.div`
  border-radius: 1.3em;
  height: 50px;
  width: 50px;
`;

const AvatarImg = ({image}) => {
  <Avatar className="avatarStyles">
    <img src={image} alt="A national treasure" />
  </Avatar>
};

export default AvatarImg;
