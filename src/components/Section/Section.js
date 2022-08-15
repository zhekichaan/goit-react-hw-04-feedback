import styled from "styled-components"

export const Section = ({ title, children }) => {
    return (
        <SectionWrapper>
            <h2>{title}</h2>
            {children}
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
    margin: 20px 0;
    
    & h2 {
        margin-bottom: 20px;
    }
`