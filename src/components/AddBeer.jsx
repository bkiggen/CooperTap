import React from 'react';
import PropTypes from 'prop-types';

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




function AddBeer({onAddBeer}) {
  let _name = null;
  let _brewery = null;
  let _color = null;
  let _abv = null;
  let _price = null;
  let _status = null;

  function handleAddBeer(event) {
    event.preventDefault();
    onAddBeer({beerName: _name.value, brand: _brewery.value,  color: _color.value, abv: parseInt(_abv.value), price: parseInt(_price.value), status: parseInt(_status.value)});

    _name.value = '';
    _brewery.value = '';
    _color.value = '';
    _abv.value = '';
    _price.value = '';
    _status.value = '';
  }
  return (
    <div style={addStyles}>
      <h1><em>Add</em> New Keg</h1>
      <div>
        <form onSubmit={handleAddBeer}>
          <input
            type='text'
            id='name'
            style={padding} placeholder="Beer Name:"
            ref={(input) => {_name = input;}}
          ></input>
          <input
            type="text"
            id='brewery'
            style={padding} placeholder="Brewery: "
            ref={(input) => {_brewery = input;}}
          ></input>
          <input
            type='text'
            id='abv'
            style={padding}  placeholder="ABV: "
            ref={(input) => {_abv = input;}}
          ></input>
          <input
            type='text'
            id='price'
            style={padding}  placeholder="Price: "
            ref={(input) => {_price = input;}}
          ></input>
          <input
            type='text'
            id='status'
            style={padding} placeholder="Pints Remaining in Keg: "
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
            ></input>
          </div>
          <button type="submit">Add Keg to List</button>
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
    </div>
  );
}

AddBeer.propTypes = {
  onAddBeer: PropTypes.func
};

export default AddBeer;
