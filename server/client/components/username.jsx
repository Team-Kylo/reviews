import React from 'react';
import styled from 'styled-components';

// const axios = require('axios');

const NameAndDate = styled.div`
  display: inline-block;
  width: 250px;
  height: 55px;
`;
const Username = styled.div`
  width: 48px;
`;

const Date = styled.div`
  color: blue;
`;

const UsernameAndDate = ({name, date}) => {
  return (
    <NameAndDate>
      <Username>
        {name}
      </Username>
      <Date>
        {date}
      </Date>
    </NameAndDate>
  );
};

export default UsernameAndDate;
