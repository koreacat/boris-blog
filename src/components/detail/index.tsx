import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Templates from '../common/Templates';
import { PostDto } from '../../dto/PostDto';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Detail = () => {
  const { id } = useParams()
  const [post, setPost] = useState<PostDto | null>(null);

  const fetchPost = useCallback(async (id?: string) => {
    if(!id) return;
    const res = await fetch('http://localhost:3001/posts/' + id);
    const data = await res.json() as PostDto;
    setPost(data);
  }, [])

  useEffect(() => {
    fetchPost(id)
  }, [fetchPost, id])

  return (
    <Templates>
      <PostTitle>
        {post?.title}
      </PostTitle>

      <PostImage src={post?.image} alt='thumnail'/>

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

export default Detail
