import styled from 'styled-components';
import Templates from '../common/Templates'
import ToyBox from './ToyBox';
import Profile from './Profile';
import Gallery from './Gallery';

const Index = () => {

  return (
    <Templates>
      <ProfileArea>
        <Profile/>
        <Gallery/>
        <ToyBox/>
      </ProfileArea>
    </Templates>
  )
}

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 1px solid #eee;
  gap: 24px;
`

export default Index;
