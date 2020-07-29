import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="price-products">
                <h5>Giá:</h5>
                <div className="item-products">Chọn khoảng giá</div>
                <div className="search-price d-flex justify-content-between align-items-center">
                    <input type="text" name="pricefrom" className="search-left" />
                    <label className="search-mid"></label>
                    <input type="text" name="priceto" className="search-right" />
                </div>
                <div className="line-products"></div>
            </div>
        );
    }
}

export default index;
