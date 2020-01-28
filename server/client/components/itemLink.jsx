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

class ItemLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      imageUrl: ''
    }
  }

  componentDidMount() {
    const id = window.location.search.slice(1);
    axios.get(`/${id}`)
    .then((response) => {
      this.setState({
        item: response.data.itemForSale,
        imageUrl: response.data.imageUrl
      })
    })
  }

  render() {
    return (
      <ItemAndLink>
        <Item>
          {this.state.item}
        </Item>
        <Link src={this.state.imageUrl}>
        </Link>
      </ItemAndLink>
    )
  }
}

export default ItemLink;