/* eslint-disable no-return-assign */
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewBox from './reviewBox';

let id = document.location.search.slice(1);
id = Number(id);
// const App = () => {

//   return (
//     <div>
//     <ReviewBox id={id} />
//     <ReviewBox id={id += 1} />
//     <ReviewBox id={id += 2} />
//     <ReviewBox id={id += 3} />
//   </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreReviews: false,
    };
    this.flag = this.flag.bind(this);
  }

  flag() {
    this.setState({
      moreReviews: true,
    });
  }

  render() {
    if (this.state.moreReviews === false) {
      return (
        <div>
          <div>
            <ReviewBox id={id} />
            <ReviewBox id={id += 1} />
            <ReviewBox id={id += 2} />
            <ReviewBox id={id += 3} />
          </div>
          <button onClick={this.flag}>More Reviews</button>
        </div>
      );
    }
      return (
       <div>
         <ReviewBox id={id} />
         <ReviewBox id={id + 1} />
         <ReviewBox id={id + 2} />
         <ReviewBox id={id + 3} />
         <ReviewBox id={id + 4} />
         <ReviewBox id={id + 5} />
         <ReviewBox id={id + 6} />
         <ReviewBox id={id + 7} />
         <ReviewBox id={id + 8} />
         <ReviewBox id={id + 9} />
         <ReviewBox id={id + 10} />
         <ReviewBox id={id + 11} />
         <ReviewBox id={id + 12} />
         <ReviewBox id={id + 13} />
         <ReviewBox id={id + 14} />
         <ReviewBox id={id + 15} />
         <ReviewBox id={id + 16} />
         <ReviewBox id={id + 17} />
         <ReviewBox id={id + 18} />
         <ReviewBox id={id + 19} />
       </div>
     )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('components'),
);
