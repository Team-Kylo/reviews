import React from 'react';
import styled from 'styled-components';
const axios = require('axios');

const Text = styled.div`
  width: 250px;
`;

class ReviewText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }


  componentDidMount() {
    axios.get('/reviews')
    .then((response) => {
      console.log('two: ', response)
      this.setState({
        text: response.data.text
      })
    })
  }
  render() {
    return (
      <Text>
        {this.state.text}
      </Text>
    )
  }
}

export default ReviewText;