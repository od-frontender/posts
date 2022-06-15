import React from 'react';
import Post from './Post';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function PostList({ posts, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
  }
  return (
    <div>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames={'post'}>
            <Post post={post} remove={remove} number={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
