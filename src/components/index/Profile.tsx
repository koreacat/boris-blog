import styled from "styled-components";

const Profile = () => {

  return (
    <ProfileArea>
      <ProfileImg src={'/boris01.png'}/>
      <h3>Hi! I'm Boris the Cat😻</h3>
    </ProfileArea>
  )
}

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const ProfileImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: 2px 1px 5px #00000090;
`

export default Profile;