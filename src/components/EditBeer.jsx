import React from 'react';
import BeerList from './BeerList';
import PropTypes from 'prop-types';

const editStyles = {
  width: '450px',
  margin: '0 auto',
  textAlign: 'center'
};

const addStyles = {
  width: '450px',
  margin: '0 auto',
  marginBottom: '60px',
  textAlign: 'center'
};

const padding = {
  padding: '5px',
  border: 'none',
  outline: 'none',
  borderBottom: '1px solid black',
  margin: '8px',
  width: '150px'
};



function EditBeer({ masterKegList, currentRouterPath, onEditKeg, selectedBeer, onUpdateBeer }) {
  let _name = null;
  let _brewery = null;
  let _color = null;
  let _abv = null;
  let _price = null;
  let _status = null;

  function handleUpdateBeer(event) {
    event.preventDefault();
    onUpdateBeer({beerName: _name.value, brand: _brewery.value,  color: _color.value, abv: parseFloat(_abv.value).toFixed(2), price: parseFloat(_price.value).toFixed(2), status: parseInt(_status.value)});
  }

  let optionalContent = null;
  if(selectedBeer !== null){
    optionalContent = <div style={addStyles}>
      <div>
        <form key={masterKegList[selectedBeer].beerName} onSubmit={handleUpdateBeer}>
          <input
            type='text'
            id='name'
            style={padding} defaultValue={masterKegList[selectedBeer].beerName}
            ref={(input) => {_name = input;}}
          ></input>
          <input
            type="text"
            id='brewery'
            style={padding} defaultValue={masterKegList[selectedBeer].brand}
            ref={(input) => {_brewery = input;}}
          ></input>
          <input
            type='text'
            id='abv'
            style={padding}  defaultValue={masterKegList[selectedBeer].abv}
            ref={(input) => {_abv = input;}}
          ></input>
          <input
            type='text'
            id='price'
            style={padding}  defaultValue={masterKegList[selectedBeer].price}
            ref={(input) => {_price = input;}}
          ></input>
          <input
            type='text'
            id='status'
            style={padding} defaultValue={masterKegList[selectedBeer].status}
            ref={(input) => {_status = input;}}
          ></input>
          <div style={{ width: '174px', display: 'inline-block', textAlign: 'left'}}>
            <p style={{display: 'inline', marginLeft: '12px', marginRight: '6px', color: '#757575',
              fontFamily: 'arial', fontSize: '13.33333px'}}>Color:</p>
            <input
              style={{width: '20px'}}
              type='color'
              id='color'
              ref={(input) => {_color = input;}}
              defaultValue={masterKegList[selectedBeer].color}
            ></input>
          </div>
          <button type="submit">Update Keg</button>
        </form>
        <style jsx>{`
          button {
            border-radius: 5px;
            background-color: white;
            outline: none;
            border: 1px solid black;
            padding: 6px;
            padding-left: 10px;
            padding-right: 10px;
            width: 172px;
            margin: 25px;
          }
          .button:hover {
            background-color: whitesmoke;
          }
          svg {
            z-index: 1;
          }
          `}</style>
      </div>
    </div>;
  } else {
    optionalContent = "Please select a keg to edit"
  }
  return (
    <div style={editStyles}>
      <h1><em>Edit</em> Existing Keg</h1>
      {optionalContent}
    </div>
  );
}

EditBeer.propTypes = {
  masterKegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onEditKeg: PropTypes.func,
  selectedBeer: PropTypes.number,
  onUpdateBeer: PropTypes.func
};

export default EditBeer;
