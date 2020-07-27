import React, { Component } from 'react';
import TopHeader from '../TopHeader';
import MenuHeader from '../MenuHeader';
import Banner from '../Banner';
import HotProducts from '../HotProducts';
import BestProduct from '../BestProduct';
import './styles.css';

class App extends Component {
  render() {
    return (
        <div className="fastfood">
            <TopHeader/>
            <MenuHeader/>
            <Banner/>
            <HotProducts/>
            <BestProduct/>
        </div>
    );
  }
}

export default App;
