import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemAndLink = styled.div`
  width: 250px;
  height: 55px;
  grid-column-start: col-two;
  grid-row-start: row-four;
  display: flex;
`;
const Item = styled.div`
  font-size: 12px;
  order: two;
  padding-left: 15px;
`;

const Link = styled.img`
  height: 30px;
  width: 30px;
  order: one;
`;

const ItemLink = ({ item, link }) => (
  <ItemAndLink>
    <Link href="https://www.placecage.com/" src={link} />
    <Item>
      <a href="https://www.placecage.com/">{item}</a>
    </Item>
  </ItemAndLink>
);

ItemLink.defaultProps = {
  item: 'A stellar item you want to buy',
  link: 'A stellar picture of the item you want to buy',
};

ItemLink.propTypes = {
  item: PropTypes.string,
  link: PropTypes.string,
};

export default ItemLink;
