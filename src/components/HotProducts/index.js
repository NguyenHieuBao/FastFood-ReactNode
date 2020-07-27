import React, { Component } from 'react';
import Product from '../Product';
import Carousel from '../Caurosel';
import Category from '../Category';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="hot-products">
                <Category title="Sản phẩm nổi bật"/>
                <div className="content-hot-products">  
                    <Carousel>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
					</Carousel>
                </div>
            </div>
        );
    }
}

export default index;
