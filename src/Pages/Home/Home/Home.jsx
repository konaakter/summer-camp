import React from 'react';
import Banner from '../Banner/Banner';
import Populerclass from '../Populerclass/Populerclass';
import Toptncstrac from '../Toptncstrac/Toptncstrac';
import Extrasectoin from './Extrasectoin/Extrasectoin';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Populerclass></Populerclass>
          <Toptncstrac></Toptncstrac>
          <Extrasectoin></Extrasectoin>
        </div>
    );
};

export default Home;

