import React from 'react';
import ReactDOM from 'react-dom';
import ReviewBox from './reviewBox';

let id = document.location.search.slice(1);
id = Number(id);
const App = () => {
  return (
    <div>
    <ReviewBox id={id} />
    <ReviewBox id={id += 1} />
    <ReviewBox id={id += 2} />
    <ReviewBox id={id += 3} />
  </div>
  );
};


ReactDOM.render(
  <App />,
  document.getElementById('components'),
);
