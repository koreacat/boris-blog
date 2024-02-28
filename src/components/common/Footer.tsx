import styled from "styled-components";

const Footer = () => {
  return (
    <FooterArea>
      <p>Built with 🐾 by Boris the 🐈</p>
    </FooterArea>
  )
}

const FooterArea = styled.footer`
  width: 768px;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 24px;
  padding: 12px;
  background: linear-gradient(to left, #3f3f3f, #8c8c8c, #d3d3d3);
  color: white;
`

export default Footer;