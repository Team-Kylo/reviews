// This is your avatar image component
import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 1.3em;
  height: 50px;
  width: 50px;
  grid-column-start: col-one;
  grid-row-start: row-one;
  grid-row-end: row-two;
`;

const AvatarImg = ({image}) => (
  <Avatar src={image} alt="A national treasure">
  </Avatar>
);

export default AvatarImg;
