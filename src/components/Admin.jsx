import React from 'react';
import AddBeer from './AddBeer';
import EditBeer from './EditBeer';
import PropTypes from 'prop-types';
import BeerList from './BeerList';


const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  margin: '0 auto',
  flexWrap: 'wrap'
};

function Admin({ masterKegList, onAddBeer, currentRouterPath, onEditKeg, selectedBeer, onUpdateBeer }) {

  return (
    <div style={containerStyles}>
      <AddBeer
        onAddBeer={onAddBeer}
      />
      <EditBeer
        masterKegList={masterKegList}
        selectedBeer={selectedBeer}
        onEditKeg={onEditKeg}
        onUpdateBeer={onUpdateBeer}
        currentRouterPath={currentRouterPath}
      />
      <BeerList masterKegList={masterKegList}
        onEditKeg={onEditKeg}
        currentRouterPath={currentRouterPath}
      />
    </div>
  );
}

Admin.propTypes = {
  masterKegList: PropTypes.array,
  onAddBeer: PropTypes.func,
  currentRouterPath: PropTypes.string,
  onEditKeg: PropTypes.func,
  selectedBeer: PropTypes.number,
  onUpdateBeer: PropTypes.func
};


export default Admin;
