import React from 'react';
import ReactDOM from 'react-dom';
import ReviewBox from './reviewBox';

const id = document.location.search.slice(1);

const App = () => {
  return (
    <div>
    <ReviewBox id={id} />
    <ReviewBox id={25} />
    <ReviewBox id={26} />
    <ReviewBox id={27} />
  </div>
  );
};


ReactDOM.render(
  <App />,
  document.getElementById('components'),
);
