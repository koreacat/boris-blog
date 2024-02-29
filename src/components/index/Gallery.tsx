import styled from 'styled-components';
import { useState } from "react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Btn onClick={() => setIsModalOpen(true)}>Boris Gallery</Btn>
      {/* 
        * TODO
        * [로딩 최적화 - 컴포넌트 Lazy Loading] 
        * 'react-image-gallery'은 모달 내에서만 사용하는 모듈이지만
        * 메인페이지의 번들에 포함되어 있습니다.
      */}

      {/* 
        * TODO
        * [로딩 최적화 - 컴포넌트 Preloading] 
        * ImageModal 을 Lazy Loading 할 경우 
        * 클릭 후 리소스를 로드하기 때문에 모달이 즉시 표시되지 않습니다.
      */}

      {/* 
        * TODO
        * [로딩 최적화 - 이미지 Preloading] 
        * 처음 모달을 열었을 때 이미지를 로드하는 시간동안 빈화면이 출력되고 있습니다.
      */}
      <ImageModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
const Btn = styled.button`
  padding: 0 12px;
`
export default Gallery;