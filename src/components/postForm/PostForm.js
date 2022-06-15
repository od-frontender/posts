import React, { useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import s from './PostForm.module.css';

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = e => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <>
      <form className={s.form}>
        <Input
          className={s.textName}
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        ></Input>
        <Input
          className={s.textSearch}
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
        ></Input>
        <Button
          onClick={addNewPost}
          style={{ backgroundColor: 'green', color: 'white' }}
        >
          Создать пост
        </Button>
      </form>
    </>
  );
}
