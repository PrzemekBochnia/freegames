import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {

    const[searchedGames, setSearchedGames] = useState([])
    let params = useParams();
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f8382df2femsh391f1f3eb9fbe9fp1646dcjsncc01dfc98041',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      const getSearchedGames = async() =>{
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)
        const data = await api.json()
        const filtered = data.filter(({title}) => title.toLowerCase().includes(params.search.toLocaleLowerCase()));
        setSearchedGames(filtered)  
    };
    
    useEffect(()=>{
        getSearchedGames(params.search)
    },[params.search])
    
      return (
        <Grid>
          {
          searchedGames.map((item)=>{
            return(
              <Card key={item.id}>
                <Link to={"/game/" + item.id}>
                <img src={item.thumbnail} alt=""/>
                <h4>{item.title}</h4>    
                </Link>
              </Card>
            )
          })
          }
        </Grid>
      )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 0fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img{
        width:100%;
        height: 300px;
        border-radius:2rem;
    }
    a{
        text-decoration: none
    }
    h4{
        text-align:center;
        padding: 1rem
    }
`;

export default Searched