import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import './index.css'

function Detail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)

  // 게시글 가져오기
  const getArticle = useCallback(async (id?: string) => {
    if(!id) return;
    const response = await fetch('http://localhost:3001/articles/' + id);
    // setArticle(response.json());
  }, [])

  useEffect(() => {
    getArticle(id)
  }, [getArticle, id])

  return article ? (
    <div className={'detailArea'}>
      Detail
    </div>
  ) : (
    <h1>loading...</h1>
  )
}

export default Detail
