import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const ItemAndLink = styled.div`
  display: inline-block;
  width: 250px;
  height: 55px;
`;
const Item = styled.div`
  width: 50px;
  color: red;
`;

const Link = styled.img`
  color: green;
`;

const ItemLink = ({item, link}) => (
  <ItemAndLink>
    <Item>
      {item}
    </Item>
      <Link src={link}>
    </Link>
  </ItemAndLink>
);


export default ItemLink;
