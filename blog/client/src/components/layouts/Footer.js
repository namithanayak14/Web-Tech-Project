import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return(
        <FooterContainer>
            <span style={{color: "#fff", top: "1rem", left: "1rem", position: "relative"  }}>A blog app built using MERN stack</span>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    background: #344;
    height: 4rem;
    left: 0;
    bottom: 0;
    width: 100%;
`;