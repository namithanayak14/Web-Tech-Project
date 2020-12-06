import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return(
        <MainContainer>
           <h1>Welcome to Blogify</h1>
        </MainContainer>
    )
}

export default Header

//MAIN CONTAINER
const MainContainer = styled.header`background: url(../../images/abstract3.jpg) no-repeat center/cover;
height: 25rem;

h1 {
    transform: translate(-50%, -50%);
    font-family: 'Poppins', sans-serif;
    color: #fff;
    position: absolute;
    top: 25%;
    left: 50%;

}
`;