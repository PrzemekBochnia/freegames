import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from "styled-components";
import { Link } from 'react-router-dom';


function Shooters() {
    const [games,setGames] = useState([])

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f8382df2femsh391f1f3eb9fbe9fp1646dcjsncc01dfc98041',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    const getGames = async() =>{
      const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
      const data = await api.json()
      setGames(data)
    };
    useEffect(()=>{
      getGames()
    },[]);
  
    return (
      <div>
            <Wrapper>
              <h3>Shooters</h3>
              <Splide options={{
                perPage:5,
                arrows:true,
                pagination:false,
                gap:"1rem"
              }}>
              {games.map((game)=>{
                return(
                  <SplideSlide key={game.id}>
                  <Card>
                    <Link to={"/game/" + game.id}>
                      <p>{game.title}</p>
                      <img src={game.thumbnail} alt={game.title}></img>
                      <Gradient/>
                    </Link>
                  </Card>
                  </SplideSlide>
                )
              })}
              </Splide>
            </Wrapper>
      </div>
    )
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3{
    text-align:center;
    margin-bottom:1rem;
    color: white;
  }
`;
const Card = styled.div`
  min-height: 15rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;

  
  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  p{
    position: absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform: translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  p:hover{
    font-size: 2rem;
    transition: 2s;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Shooters