import styled from 'styled-components';

const PostPlaceholder = () => {
  return (
    <PostItem>
      <ItemArea>
        <div>
          <ItemImg/>
        </div>
        <ContentArea>
          <ItemTitle/>
          <ItemContent/>
        </ContentArea>
      </ItemArea>
    </PostItem>
  )
};

const PostItem = styled.li`
  width: 100%;
`

const ItemArea = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  background: #eee;
`

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`

const ItemImg = styled.div`
  width: 128px;
  height: 128px;
  object-fit: cover;
  object-position: center;
  background: #ddd;
`

const ItemTitle = styled.h2`
  width: 100%;
  height: 32px;
  background: #ddd;
`

const ItemContent = styled.p`
  overflow: hidden;
  width: 590px;
  height: 100%;
  white-space: normal;
  display:-webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  background: #ddd;
`

export default PostPlaceholder;