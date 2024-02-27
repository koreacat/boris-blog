import styled from "styled-components";
import Header from "./Header";

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
    </TemplatesArea>
  )
}

const TemplatesArea = styled.div`
  width: 768px;
  margin: 0 auto 64px;
`

const Section = styled.section`
  margin-top: 64px;
`

export default Templates;