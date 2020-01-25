import React from 'react';
import ReactDOM from 'react-dom';
import ReviewBox from './reviewBox.jsx';


const App = () => {
  return (<div>
    <ReviewBox />
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('components')
)