import React from 'react';
import ReactDOM from 'react-dom';
import ReviewBox from './reviewBox';


const App = () => (
  <div>
    <ReviewBox />
  </div>
);


ReactDOM.render(
  <App />,
  document.getElementById('components'),
);
