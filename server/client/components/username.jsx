import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

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

class UsernameAndDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      datePosted: '',
    };
  }

  componentDidMount() {
    const id = window.location.search.slice(1);
    axios.get(`/${id}`)
      .then((response) => {
        this.setState({
          username: response.data.username,
          datePosted: response.data.datePosted.slice(0, 10),
        });
      });
  }

  render() {
    return (
      <NameAndDate>
        <Username>
          {this.state.username}
        </Username>
        <Date>
          {this.state.datePosted}
        </Date>
      </NameAndDate>
    );
  }
}

export default UsernameAndDate;
