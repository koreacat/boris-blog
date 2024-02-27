import styled from 'styled-components';
import Templates from '../common/Templates'

const Index = () => {
  return (
    <Templates>
      <ProfileArea>
        
      </ProfileArea>
      <a href={'/list'}>list</a>
    </Templates>
  )
}

const ProfileArea = styled.div`
  border: 1px solid #eee;
`

export default Index;
