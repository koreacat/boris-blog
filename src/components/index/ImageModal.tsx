import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const IMAGE_LIST = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const IMAGE_FORMAT = '.jpg';

interface ImageModalProps {
  onClose: () => void;
}

const ImageModal = ({ onClose }: ImageModalProps) => {

  /* 
   * TODO 5.
   * [로딩 최적화 - 이미지 사이즈 최적화(로컬 이미지)] 
   * 필요 이상의 큰 이미지 파일을 요청하여 로딩이 오래걸립니다.
   * 적절한 이미지의 사이즈는 영역 사이즈의 2배 정도 입니다.
   * 최적화된 이미지 포멧을 사용해 사이즈를 줄일 수 있습니다.
   */
  const items = IMAGE_LIST.map((imgSrc) => {
    return {
      original: `${imgSrc}${IMAGE_FORMAT}`,
      originalHeight: 400,
      thumbnail: `${imgSrc}${IMAGE_FORMAT}`,
    }
  })

  return (
    <ImageModalWrapper>
      <ImageModalContainer>
        <BtnClose onClick={onClose}>X</BtnClose>
        <ModalHeader>Boris Gallery</ModalHeader>
        <Modalbody>
          <ImageGallery items={items} showFullscreenButton={false} />
        </Modalbody>
      </ImageModalContainer>
    </ImageModalWrapper>
  )
}

const ImageModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 200;
`
const ImageModalContainer = styled.div`
    width: 100%;
    max-width: 700px;
    margin: auto;
    overflow: auto;
    background: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
`
const BtnClose = styled.button`
    cursor: pointer;
    position: absolute;
    z-index: 250;
    width: 25px;
    top: 18px;
    right: 15px;
`
const ModalHeader = styled.div`
    width: 100%;
    padding: 20px 10px;
    border-bottom: 1px solid #dddddd;
    color: #333;
    font-size: 1.05em;
    font-weight: 500;
    box-sizing: border-box;
`
const Modalbody = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`

export default ImageModal;