import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => (
  <div className="ui container comments">
    <CommentDetail
      author="Sam"
      timeAgo="Today at 4:45PM"
      comment="This is cool!"
      avatar={faker.image.avatar()}
    />
    <CommentDetail
      author="Alex"
      timeAgo="Today at 2:00PM"
      comment="Np"
      avatar={faker.image.avatar()}
    />
    <CommentDetail
      author="Dan"
      timeAgo="Yesterday at 1:23AM"
      comment="Thanks"
      avatar={faker.image.avatar()}
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
