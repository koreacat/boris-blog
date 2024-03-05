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

  {/* 
    * TODO
    * [코어 웹 바이탈 - CLS(Cumulative Layout Shift)] 
    * 리스트가 렌더링되기 전에 헤더와 푸터 사이의 영역이 비어 있다가 
    * 리스트가 렌더링되면서 푸터가 아래로 밀리고 있습니다.
    * 
  */}
  const postEls = posts.map((post) => <Post key={post.id} post={post}/>);

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
