import styled from "styled-components";


export const Header = styled.div`
 width: 100%;
 height:  80px;
 background-color: transparent;
 position: fixed;
 top: 0;
 left: 0;
 margin-bottom: 20px;
 display: flex;
 justify-content: space-between;
 
`;


export const Headerhome = styled.div`
width: 100%;
 height:  80px;
 position: fixed;
 top: 0;
 left: 0;
 margin-bottom: 20px;
 background-color: transparent;
 align-items: center;
 display: flex;
 padding-left: 35px;
 box-shadow: 5px 5px 10px 0 rgba(128, 128, 128, 0.5);



 >svg{
    position: fixed;
    cursor: pointer;
 }

`;



export const ConteinerHome = styled.div`
  z-index: 2;
  display: flex;
  margin-left: auto;
  margin-right: 80px;
  position: sticky;
  cursor: pointer;
  

& > svg {
   margin-left: 25px;
  }


`;