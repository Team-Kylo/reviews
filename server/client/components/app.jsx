import React from 'react';
import ReactDOM from 'react-dom';
import ReviewBox from './reviewBox.jsx';


const App = () => {
  return (<div>
    <ReviewBox styles={{"width":500, "height":300}}/>
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('components')
)