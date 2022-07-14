import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
    return(
        <div className='body'>
            <div className='home'>
        <div className='home-container'>
            <h2 className='h2home'>SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className='h1home'>SPACE</h1>
            <article className='article-home'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we’ll give you a truly out of this world experience!
            </article>
            <Link to='/' className='link-home'> EXPLORE </Link>
        </div>
        </div>
        </div>
    )
}

export default Home;