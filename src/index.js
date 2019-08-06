import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 4:00PM"
        content="Nice blog post!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="Today at 2:45AM"
        content="Awesome!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Don"
        timeAgo="Yesterday at 6:00PM"
        content="Thanks!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
