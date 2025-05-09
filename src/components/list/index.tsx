import { useCallback, useEffect, useState } from 'react';
import Templates from '../common/Templates';
import styled from 'styled-components';
import Post from './Post';
import { PostDto } from '../../dto/PostDto';
import PostPlaceholder from './PostPlaceholder';

const List = () => {
  const [posts, setPosts] = useState<PostDto[]>([]);
  const [loading, setLoading] = useState(true);  // 로딩 상태 관리를 위한 상태 추가

  const fetchPosts = useCallback(async () => {
    setLoading(true);  // 데이터 요청 전 로딩 상태 true로 설정
    const res = await fetch('http://localhost:3001/posts');
    const data = await res.json() as PostDto[];
    setPosts([...data]);
    setLoading(false);  // 데이터 로딩 완료 후 로딩 상태 false로 설정
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);


  {/* 
    * TODO 9.
    * [코어 웹 바이탈 개선 - CLS(Cumulative Layout Shift)] 
    * 리스트가 렌더링되기 전에 헤더와 푸터 사이의 영역이 비어 있다가 
    * 리스트가 렌더링되면서 푸터가 아래로 밀리고 있습니다.
    * 
  */}
  {/* 
    * 과제 2.
    * [로딩 최적화 - 이미지 Lazy Load] 
    * Intersection Observer를 사용해서 무한 스크롤 로딩을 구현해
    * 뷰포트에 보이지 않는 이미지는 나중에 로드되도록 최적화해주세요.
    * 
  */}
  const postEls = loading ?  Array.from({ length: 12 }).map((_, index) => <PostPlaceholder key={index} />)  :
  posts.map((post) => <Post key={post.id} post={post}/>);

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
