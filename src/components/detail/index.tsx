import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Templates from '../common/Templates';
import { PostDto } from '../../dto/PostDto';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Detail = () => {
  const { id } = useParams()
  const [post, setPost] = useState<PostDto | null>(null);
  const [loading, setLoading] = useState(true);  // 로딩 상태 관리를 위한 상태 추가

  const fetchPost = useCallback(async (id?: string) => {
    if(!id) return;
    setLoading(true);  // 데이터 요청 전 로딩 상태 true로 설정
    const res = await fetch('http://localhost:3001/posts/' + id);
    const data = await res.json() as PostDto;
    setPost(data);
    setLoading(false);  // 데이터 로딩 완료 후 로딩 상태 false로 설정
  }, [])

  const getParametersForUnsplash = ({width, height, quality, format}: {
    width: number;
    height: number;
    quality: number;
    format: string;
  }) => {
    return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`
  }


  useEffect(() => {
    fetchPost(id)
  }, [fetchPost, id])

  return (
    <Templates>
      <PostTitle>
        {post?.title}
      </PostTitle>

      {/* 
        * 과제 1.
        * [로딩 최적화 - 이미지 사이즈 최적화] 
        * 필요 이상의 큰 이미지 파일을 요청하여 로딩이 오래걸립니다.
        * 적절한 이미지의 사이즈는 영역 사이즈의 2배 정도 입니다.
        * 최적화된 이미지 포멧을 사용해 사이즈를 줄일 수 있습니다.
        */}

        {/* 
        * 과제 4.
        * [코어 웹 바이탈 개선 - CLS(Cumulative Layout Shift)]
        * 이미지 비율과 크기를 보정해 Layout Shift 현상을 개선해주세요.
        */}
        {
          loading ? 
          <PostImagePlaceHolder />
          :
      <PostImage src={`${post?.image}${getParametersForUnsplash({width: 1536, height: 1056, quality: 80, format: 'webp'})}`} alt='thumnail'/>
        }

      <PostContent>
        { post ? <ReactMarkdown children={post.content} /> : <>loading...</> }
      </PostContent>
    </Templates>
  )
}

const PostTitle = styled.h2`
  font-weight: 500;
  font-size: 2.5em;
  margin-top: 24px;
`

const PostImage = styled.img`
  width: 100%;
  margin-top: 12px;
`

const PostContent = styled.article`
  margin-top: 12px;
  line-height: 2;
`

const PostImagePlaceHolder = styled.div`
 width: 768px;
 height: 528px;
  background: #eee;
`

const ContentPlaceHolder = styled.div`

width:768px;
height:50%;
background: #eee;
`

export default Detail
