import React from 'react';
import styled from 'styled-components';

// const axios = require('axios');

const NameAndDate = styled.div`
  display: flex;
`;
const Username = styled.u`
  grid-column-start: col-two;
  grid-row-start: row-one;
  order: one;
`;

const Date = styled.div`
  grid-column-start: col-two;
  grid-row-start: row-one;
  order: two;
  padding-left: 10px;
`;

const dateFormatter = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let newDate = '';
  const arrOfDates = date.split('-');
  arrOfDates[1] = months[arrOfDates[1] - 1];
  newDate += `${arrOfDates[1]} ${arrOfDates[2]}, ${arrOfDates[0]}`;
  return newDate;
};

const UsernameAndDate = ({ name, date }) => (
  <NameAndDate>
    <Username>
      {name.substring(0, 9)}
    </Username>
    <Date>
      {dateFormatter(date)}
    </Date>
  </NameAndDate>
);
export { dateFormatter };
export default UsernameAndDate;
