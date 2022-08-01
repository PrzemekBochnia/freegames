import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <SHeader>
        <Link to="/">
        Free Games
        </Link>
    </SHeader>
  )
}
const SHeader = styled.div`
    height: 5rem;
    background: linear-gradient(to right, #c31432, #240b36);
    margin-bottom: 2rem;
    align-items: center;
    display: flex;
    color: white;
    justify-content: flex-start;
    font-size: 2rem;
    font-weight: bold;
    padding: 0rem 15rem;
    font-family: 'Square Peg', cursive;
    a{
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default Header