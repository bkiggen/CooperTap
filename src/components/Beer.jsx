import React, { useState } from 'react';
import PropTypes from 'prop-types';

const containerStyles = {
  height: '250px',
  width: '40%',
  minWidth: '400px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
  margin: '5px',
  padding: '5px',
  border: '2px solid black',
  borderRadius: '5px',
  backgroundColor: 'AliceBlue'
};

const beerInfoStyles = {
  padding: '5px'
};

const beerGraphicStyles = {
  padding: '5px',
  height: '200px',
  width: '165px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end'
};
const graphicContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const beerButtonStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '165px'
};



const svgStyles = {
  zIndex: '1'
};

function liquidStyles(status, beerColor) {
  const style = {
    width: '155px',
    height: (status * 1.5),
    backgroundColor: beerColor,
    position: 'absolute',
    transform: 'translateY(-10px)'
  };
  return(style);
}




function Beer(props){
  let editDecidedContent = null;
  const [buttonColor, setButtonColor] = useState('white')
  function onButtonClick() {
    props.onButtonClick(props.index)
    if(props.status <= 11){
      setButtonColor('yellow')
    }
    if(props.status <= 6){
      setButtonColor("red")
    } 
  }


  let buttonStyles = {
    marginLeft: '5px',
    borderRadius: '5px',
    backgroundColor: buttonColor,
    outline: 'none',
    border: '1px solid black',
    padding: '6px',
    paddingLeft: '10px',
    paddingRight: '10px',
  };


  if(props.currentRouterPath == '/admin'){
    editDecidedContent =           <button onClick={() => {props.onEditKeg(props.index);}}
      style={buttonStyles}>Edit Keg Info</button>;
  } else {
    editDecidedContent = <button style={buttonStyles} onClick={onButtonClick}
    >Sell Pint</button>;
  }

  return (
    <div style={containerStyles}>
      <div style={beerInfoStyles}>
        <h2>{props.beerName}</h2>
        <h3>{props.brand}</h3>
        <p>Price: ${props.price}</p>
        <p>ABV: {props.abv}%</p>
        <p>Pints Remaning: {props.status}</p>
      </div>
      <div style={graphicContainerStyles}>
        <div style={beerGraphicStyles}>
          <svg style={svgStyles} width="175px" height="200px" viewBox="0 0 245 291" version="1.1" >
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group" fill="#000000" stroke="#000000">
                <path d="M0.5,0.5 L0.5,290.5 L244.5,290.5 L244.5,0.5 L0.5,0.5 Z M37.6574596,114.038769 C37.6597593,114.037742 37.6620631,114.036714 37.6643711,114.035684 C37.6617383,114.036859 37.6592752,114.037959 37.6569784,114.038984 Z M37.6569784,114.038984 C37.4873624,114.114719 38.2237192,113.787979 38.3801478,113.715875 C39.3703485,113.259451 39.7091645,112.951331 39.7091645,112.491359 C39.7091645,81.1846481 39.7091645,81.1846481 39.7091645,56.1005162 C39.7091645,45.3295987 39.7091645,45.3295987 39.7091645,37.3231555 C39.7091645,30.9004211 39.7091645,30.9004211 39.7091645,28.0480476 C39.7091645,22.1602121 50.8535424,18.7736378 71.1023999,17.0078962 C85.1829149,15.7800466 98.83831,15.5 123.706163,15.5 C138.920862,15.5 147.026737,15.5717414 156.802059,15.898487 C189.365629,16.9869427 207.703162,20.4483792 207.703162,28.0480476 C207.703162,30.8928747 207.703162,30.8928747 207.703162,37.2948451 C207.703162,45.2750998 207.703162,45.2750998 207.703162,56.0113486 C207.703162,81.0169754 207.703162,81.0169754 207.703162,112.239684 C207.703162,112.663543 207.965518,112.869909 208.904098,113.191871 C208.976028,113.216545 209.472033,113.382053 209.626041,113.435647 C209.928614,113.540939 210.182533,113.638443 210.428397,113.747078 C212.593972,114.703929 213.74948,116.472105 213.74948,119.860449 C213.74948,123.253445 212.588679,124.983451 210.413308,125.860631 C210.175468,125.956536 209.929431,126.042044 209.639704,126.132476 C209.477801,126.183011 208.956087,126.337851 208.939932,126.342747 C207.9624,126.639029 207.703162,126.829267 207.703162,127.259051 C207.703162,135.089895 207.703162,135.089895 207.703162,142.964126 C207.703162,150.969323 207.703162,150.969323 207.703162,158.92893 C207.703162,166.778398 207.703162,166.778398 207.703162,174.493695 C207.703162,174.823836 207.96623,174.992794 208.94621,175.2517 C208.959927,175.255324 209.475651,175.388875 209.634787,175.432156 C209.918273,175.509257 210.158774,175.581884 210.391136,175.663011 C212.572409,176.424587 213.74948,177.946543 213.74948,180.94298 C213.74948,183.936144 212.573965,185.503414 210.405332,186.334955 C210.156167,186.430495 209.898697,186.515887 209.592124,186.607671 C209.435108,186.654679 208.93063,186.799204 208.859616,186.820136 C207.956613,187.086311 207.703162,187.257715 207.703162,187.545567 C207.703162,213.014972 207.703162,213.014972 207.703162,233.249568 C207.703162,249.86629 207.703162,249.86629 207.703162,257.246326 C207.703162,267.889809 189.316258,272.922466 157.113735,274.512535 C147.222329,275.000945 139.009266,275.10856 123.706163,275.10856 C108.40306,275.10856 100.189998,275.000945 90.2985913,274.512535 C58.0960685,272.922466 39.7091645,267.889809 39.7091645,257.246326 C39.7091645,249.939831 39.7091645,249.939831 39.7091645,233.515501 C39.7091645,213.511174 39.7091645,213.511174 39.7091645,188.304692 C39.7091645,187.88314 39.4010435,187.624622 38.4351379,187.234564 C38.2953906,187.178131 37.7777089,186.97647 37.7018085,186.94637 C37.3879242,186.821893 37.1372481,186.715884 36.8924962,186.601243 C34.6755993,185.562854 33.5,183.936922 33.5,180.94298 C33.5,177.927692 34.7093809,176.387018 36.940874,175.613769 C37.1852984,175.529072 37.438333,175.45354 37.7368148,175.373539 C37.9028766,175.32903 38.4370561,175.192868 38.4600014,175.18689 C39.4406396,174.931419 39.7091645,174.762953 39.7091645,174.456804 C39.7091645,151.405028 39.7091645,151.405028 39.7091645,127.942756 C39.7091645,127.395444 39.3454041,127.0009 38.3643772,126.433635 C38.272405,126.380453 37.1878158,125.783098 36.8464409,125.577303 C34.6330344,124.242975 33.5,122.627375 33.5,119.860449 C33.5,117.077391 34.6599726,115.524442 36.8793275,114.404514 C37.112126,114.287039 37.3472817,114.177246 37.6574596,114.038769 Z" id="Combined-Shape"></path>
                <path d="M123,51.7927582 C144.539105,51.7927582 162,55.0104962 162,41.423215 C162,27.8359338 144.539105,30.1492681 123,30.1492681 C101.460895,30.1492681 84,28.2556388 84,41.423215 C84,54.5907912 101.460895,51.7927582 123,51.7927582 Z" id="Oval"></path>
              </g>
            </g>
          </svg>
          <div style={liquidStyles(props.status, props.color)}>
          </div>
        </div>
        <div style={beerButtonStyles}>
          {editDecidedContent}
        </div>
      </div>
    </div>
  );
}

Beer.propTypes = {
  beerName: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  status: PropTypes.number,
  color: PropTypes.string,
  onButtonClick: PropTypes.func,
  index: PropTypes.number,
  currentRouterPath: PropTypes.string,
  onEditKeg: PropTypes.func
};


export default Beer;
