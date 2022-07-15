import React from 'react';
import "../styles/Bar.scss";

const Bar = () =>{
    return(
        <div className='bar-container'>
            <figure className='starIcon'>
                <svg className='logoBar' xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg> 
            </figure>
            <hr className='hrBar'/>
            <ul className='ulBar'>
                <li className='liName'><li className='liNumber'>00</li>HOME</li>
                <li className='liName'><li className='liNumber'>01</li>DESTINATION</li>
                <li className='liName'><li className='liNumber'>02</li>CREW</li>
                <li className='liName'><li className='liNumber'>03</li>TECHNOLOGY</li>
            </ul>
            <svg className='logoLine' xmlns="http://www.w3.org/2000/svg"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        </div>
    );
}

export default Bar;