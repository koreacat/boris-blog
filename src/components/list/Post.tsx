import { Link } from "react-router-dom";
import { PostDto } from "../../dto/PostDto";
import styled from "styled-components";
import { useRef } from "react";
import { getDateTime, removeSpecialCharacter } from "./post.util";
import { useIntersectingImage } from "./useIntersectingImage";

interface PostProps {
  post: PostDto;
}

const Post = ({ post }: PostProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  useIntersectingImage({ imageRef, post });

  return (
    <PostItem>
      <Link to={`/detail/${post.id}`}>
        <ItemArea>
          <div>
            {/*
             * TODO 5.
             * [로딩 최적화 - 이미지 사이즈 최적화]
             * 필요 이상의 큰 이미지 파일을 요청하여 로딩이 오래걸립니다.
             * 적절한 이미지의 사이즈는 영역 사이즈의 2배 정도 입니다.
             * 최적화된 이미지 포멧을 사용해 사이즈를 줄일 수 있습니다.
             */}
            <ItemImg ref={imageRef} alt={"img"} />
          </div>
          <ContentArea>
            <h2>{post.title}</h2>
            <ItemContent>{removeSpecialCharacter(post.content)}</ItemContent>
            <p>{getDateTime(post.createdTime)}</p>
          </ContentArea>
        </ItemArea>
      </Link>
    </PostItem>
  );
};

const PostItem = styled.li`
  width: 100%;

  a {
    text-decoration: none;
    color: initial;
  }
`;

const ItemArea = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const ItemImg = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
  object-position: center;
`;

const ItemContent = styled.p`
  overflow: hidden;
  width: 590px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default Post;
