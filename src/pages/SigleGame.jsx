import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function SigleGame() {
    let params = useParams()
    const [details, setDetails ] = useState()   
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f8382df2femsh391f1f3eb9fbe9fp1646dcjsncc01dfc98041',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      const getSingleGame = async() =>{
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`, options)
        const dataDetail = await data.json()
        console.log(data);
        setDetails(dataDetail)
      };
      useEffect(()=>{
        getSingleGame()
      },[])

  return (
    <>
    <Wrapper>
    <div>{details? details.title : null}</div>
    <img src={details? details.thumbnail :null} alt={details? details.title : null}></img>
    <p>{details ? details.short_description : null}</p>
    <p>{details ? details.genre : null}</p>
    <a href={details ? details.game_url : null}>Play</a>
    </Wrapper>
    </>

  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  img{
    border-radius: 20px;
  }
  p{
    color: white;
    padding: 1rem 5rem;
  }
  a{
    padding: 1rem 3rem;
    background-color: gray;
    color: black;
    text-decoration: none;
    text-align: center;
    border-radius: 20px;
  }
  a:hover{
    background-color: white;
    transition: 2s;
  }
`;


export default SigleGame