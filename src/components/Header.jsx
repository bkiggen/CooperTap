import React from 'react';
import barrels from '../assets/img/barrelicon.png';
import beer from '../assets/img/beer-svg.png';
import { Link } from 'react-router-dom';


function Header(){

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateNow = new Date();
  
  const headerStyles = {
    textAlign: 'center',
    width: '100%',
    height: '300px',
    marginTop: '0px',
    backgroundColor: 'white'
  };
  
  const imageStyles = {
    height: '60px',
    width: '60px',
    marginTop: '20px'
  };
  
  const h1Styles = {
    margin: '5px'
  };
  
  const hrStyles = {
    width: '300px',
    margin: '0 auto'
  };
  
  const tapListStyles = {
    fontStyle: 'italic',
    margin: '5px'
  };

  return (
    <div>
      <div className="dropdown">
        <img src={beer} className="dropButton"/>
        <div className="dropdownContent">
          <div className='links'><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link></div>
          <br/>
          <div className='links'><Link style={{textDecoration: 'none', color: 'black'}} to='/admin'>Admin</Link></div>
        </div>
      </div>
        
      <style jsx>{`
        .dropButton {
            color: black;
            padding: 16px;
            font-size: 16px;
            border: none;
            height: 20px;
            width: 20px;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdownContent {
            display: none;
            position: absolute;
            background-color: white;
            width: 70px;
            z-index: 1;
            padding-left: 15px;
        }

        .dropdownContent div .links {
            text-decoration: none;
            display: block;
            color: black;
            text-decoration: none;
        }

        .dropdown:hover .dropdownContent {
          display: block;
        }
          `}</style>
      <div style={headerStyles}>
        <img src={barrels} style={imageStyles}/>
        <h1 style={h1Styles}>Mr. Cooper's</h1>
        <hr style={hrStyles}/>
        <h1 style={tapListStyles}>Tap List</h1>
        <hr style={hrStyles}/>
        <h3 style={h1Styles}>  {dateNow.toLocaleDateString('en-Us', options)}</h3>
      </div>
    </div>
  );
}



export default Header;
