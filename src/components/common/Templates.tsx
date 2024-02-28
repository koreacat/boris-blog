import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

interface TemplatesProps {
  children?: React.ReactNode;
}

const Templates = (props: TemplatesProps) => {
  return (
    <TemplatesArea>
      <Header/>
      <Section>
        {props.children}
      </Section>
      <Footer/>
    </TemplatesArea>
  )
}

const TemplatesArea = styled.div`
  width: 768px;
  margin: 0 auto;
`

const Section = styled.section`
  padding-top: 64px;
`

export default Templates;