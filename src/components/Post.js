import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './button/Button';

export default function Post(props) {
  return (
    <>
      <div className="block">
        <span>{props.post.id}</span>
        <h3>{props.post.title}</h3>
        <div className="post">
          <div className="text">{props.post.body}</div>
          <NavLink to={`/posts/${props.post.id}`}>
            <Button style={{ backgroundColor: 'blue', color: 'white' }}>
              Открить
            </Button>
          </NavLink>

          <Button
            onClick={() => props.remove(props.post)}
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            Удалить
          </Button>
        </div>
      </div>
    </>
  );
}
