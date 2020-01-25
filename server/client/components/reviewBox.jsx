import React from 'react';
import ReactDOM from 'react-dom';
import AvatarImg from './avatar.jsx';

class ReviewBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="box">
        <AvatarImg />
      </div>
    )
  }
}

export default ReviewBox;