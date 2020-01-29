// This is your avatar image component
import React from 'react';

const axios = require('axios');

const AvatarImg = ({image}) => (
  <div className="avatarImg">
    <img src={image} alt="" />
  </div>
);

export default AvatarImg;
