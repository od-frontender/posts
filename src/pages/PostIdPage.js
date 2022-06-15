import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetching';

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostService.getById(params.id);
    setPost(responce.data);
  }, []);

  useEffect(() => {
    fetchPostById();
  }, []);

  return (
    <div>
      <h1>Post page </h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </div>
  );
}
