import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Templates from '../common/Templates'
import { PostDto } from '../../dto/PostDto'

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
      { post ? <>{post.title}</> : <h1>loading...</h1> }
    </Templates>
  )
}

export default Detail
