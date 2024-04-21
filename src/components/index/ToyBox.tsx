import styled from 'styled-components';
import { useRef } from 'react';

const ToyBox = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (!circleRef.current) return;
    const parentNode = circleRef.current.parentNode as HTMLDivElement;
    const areaBounds = parentNode.getBoundingClientRect();
    const maxTop = areaBounds.height - circleRef.current.offsetHeight;
    const maxLeft = areaBounds.width - circleRef.current.offsetWidth;
    const newTop = Math.random() * maxTop;
    const newLeft = Math.random() * maxLeft;

    /*
    * TODO 8. 
    * [렌더링 최적화 - 애니메이션 최적화] 
    * Layout shift 를 일으키는 코드입니다.
    * Top과 Left가 변경되면서 Reflow와 Repaint를 일으키고 있습니다.
    * */
    // circleRef.current.style.top = `${newTop}px`;
    // circleRef.current.style.left = `${newLeft}px`;

    const transformValue = `translate(${newLeft}px, ${newTop}px)`;
    circleRef.current.style.transform = transformValue;
  };

  return (
    <ToyBoxArea>
      <Circle
        ref={circleRef}
        onMouseEnter={handleMouseEnter}
      >🐀</Circle>
    </ToyBoxArea>
  )
}

const ToyBoxArea = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  background: #eee;
  border-radius: 8px;
  text-align: center;
`

const Circle = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #999;
  user-select: none;

  top: 88px;
  left: 88px;
  transition: top 0.5s, left 0.5s;
`
// transform: translate(88px, 88px);
// transition: transform 0.5s ease;
// will-change: transform;

export default ToyBox;