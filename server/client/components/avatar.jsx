// This is your avatar image component
import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class AvatarImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    }

  }

  componentDidMount() {
    axios.get('/reviews')
      .then((response) => {
        console.log(response.data);
        this.setState({
          imageUrl: response.data.imageUrl
        })
      })
  }

  render() {
    return (
      <div class="avatarImg">
        <img src={this.state.imageUrl}></img>
      </div>
    )
  }
}

export default AvatarImg