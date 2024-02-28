import { useCallback, useEffect, useState } from 'react';
import Templates from '../common/Templates';
import styled from 'styled-components';
import Post from './Post';
import { PostDto } from '../../dto/PostDto';
import PostPlaceholder from './PostPlaceholder';

const List = () => {
  const [posts, setPosts] = useState<PostDto[]>([])

  const fetchPosts = useCallback(async () => {
    const res = await fetch('http://localhost:3001/posts');
    const data = await res.json() as PostDto[];
    setPosts([...data]);
  }, [])

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const postEls = posts.map((post) => <Post key={post.id} post={post}/>);

  // const postEls = posts.length > 0 
  // ? posts.map((post) => <Post key={post.id} post={post}/>) : new Array(10).fill(0).map((_, i) => <PostPlaceholder key={i}/>)

  return (
    <Templates>
      <PostList>
        {postEls}
      </PostList>
    </Templates>
  )
}

const PostList = styled.ul `
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export default List;
