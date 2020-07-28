import React, { Component } from 'react';
import TopHeader from '../TopHeader';
import MenuHeader from '../MenuHeader';
import Banner from '../Banner';
import HotProducts from '../HotProducts';
import BestProduct from '../BestProduct';
import HotPosts from '../HotPosts';
import Footer from '../Footer';
import MenuMobile from '../MenuMobile';
import './styles.css';

class App extends Component {
  render() {
    return (
        <div className="fastfood">
            <TopHeader/>
            <MenuHeader/>
            <MenuMobile/>
            <Banner/>
            <HotProducts/>
            <BestProduct/>
            <HotPosts/>
            <Footer/>
        </div>
    );
  }
}

export default App;
