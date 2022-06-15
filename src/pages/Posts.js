import React, { useState, useEffect, useRef } from 'react';

import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';
import PostFilter from '../components/postFilter/PostFilter';
import PostForm from '../components/postForm/PostForm';
import PostList from '../components/PostList';
import { usePosts } from '../hooks/usePosts';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import Select from '../components/select/Select';

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  const changePage = page => {
    setPage(page);
  };

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(page, limit);
  }, [page, limit]);

  return (
    <>
      <Button
        style={{ marginTop: 30, backgroundColor: 'green' }}
        onClick={() => setModal(true)}
      >
        Создать пост
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <Select
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} />
      <div ref={lastElement} style={{ height: 20, background: 'red' }}>
        Div
      </div>
      {isPostLoading && <h1>Loading...</h1>}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </>
  );
}

export default Posts;
