import React from 'react';
import AllGames from '../components/AllGames';
import NewestGames from '../components/NewestGames';
import Shooters from '../components/Shooters';
import Search from '../components/Search';
import Sports from '../components/Sports';

function Home() {
  return (
    <>
    <Search/>
    <AllGames/>
    <NewestGames/>
    <Shooters/>
    <Sports/>
    </>
  )
}

export default Home