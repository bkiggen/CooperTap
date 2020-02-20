import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BeerList from './BeerList';
import Admin from './Admin';
import Error404 from './Error404';

const mainStyles = {
  fontFamily: 'Montserrat'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          beerName: 'Ruby Zozzle',
          brand: 'Hi-Wheel',
          color: '#FF8C15',
          abv: 6.8,
          price: 7,
          status: 11
        },
        {
          beerName: 'Tart N Juicy',
          brand: 'Epic',
          color: '#44110E',
          abv: 4.5,
          price: 6,
          status: 60
        },
        {
          beerName: 'Hamm\'s',
          brand: 'Miller/Coors',
          color: '#FF8C15',
          abv: 4.7,
          price: 3,
          status: 65
        },
        {
          beerName: 'Prismatic',
          brand: 'Ninkasi',
          color: '#F2B749',
          abv:  5.9,
          price: 6,
          status: 75
        },
        {
          beerName: 'Juicy Haze',
          brand: 'New Belgium',
          color: '#F2B749',
          abv:  7.5,
          price: 6,
          status: 18
        },
        {
          beerName: '8 Hop',
          brand: 'New Belgium',
          color: '#44110E',
          abv:  5.5,
          price: 6,
          status: 58
        }
      ],
      selectedBeer: null
    };
    this.handleSellPint = this.handleSellPint.bind(this);
    this.handleAddBeer = this.handleAddBeer.bind(this);
    this.handleEditKeg = this.handleEditKeg.bind(this);
    this.handleUpdateBeer = this.handleUpdateBeer.bind(this);
  }

  handleSellPint(key) {
    let newStatus = JSON.parse(JSON.stringify(this.state.masterKegList));
    let newSlice;
    if (newStatus[key].status >= 1){
      newSlice = newStatus[key].status - 1;
    } else {
      newSlice = 0;
    }
    newStatus[key].status = newSlice;
    this.setState({
      masterKegList: newStatus
    });
  }

  handleAddBeer(newBeer) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newBeer);
    this.setState({masterKegList: newMasterKegList});
  }

  handleEditKeg(beer) {
    this.setState({selectedBeer: beer});
  }

  handleUpdateBeer(updatedBeer) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList[this.state.selectedBeer] = updatedBeer;
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return(
      <div style={mainStyles}>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><BeerList masterKegList={this.state.masterKegList}
            onButtonClick={this.handleSellPint}
          />} />
          <Route path='/Admin' render={(props)=><Admin masterKegList={this.state.masterKegList}
            onUpdateBeer={this.handleUpdateBeer}
            selectedBeer={this.state.selectedBeer}
            onEditKeg={this.handleEditKeg}
            currentRouterPath={props.location.pathname}
            onAddBeer={this.handleAddBeer}
            onButtonClick={this.handleEditKeg}
          />} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}


export default App;
