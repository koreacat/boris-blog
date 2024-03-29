import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const IMAGE_NAME_LIST = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

interface ImageModalProps {
  visible: boolean;
  onClose: () => void;
}

const ImageModal = ({ visible, onClose }: ImageModalProps) => {
  const images = IMAGE_NAME_LIST.map((image) => { 
    return {       
      original: `${image}.jpg`,
      originalHeight: 400,
      thumbnail: `${image}.jpg`,
    } })

  if(!visible) return null;

  return (
    <ImageModalWrapper>
      <ImageModalContainer>
        <BtnClose onClick={onClose}>X</BtnClose>
        <ModalHeader>Boris Gallery</ModalHeader>
        <Modalbody>
          <ImageGallery items={images} />
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