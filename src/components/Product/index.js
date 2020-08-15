import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="products">
                <div className="image">
                    <img src={`images/${product ? product.Image : ''}`} alt="products"/>
                </div>
                <div className="title">
                    <h5>
                        {product.Name}
                    </h5>
                </div>
                <div className="price">
                    {product.Price.toLocaleString()} đ
                </div>
                <div className="order">
                    <button type="button" className="btn btn-success">
                        Mua hàng
                    </button>
                </div>
            </div>
        );
    }
}

export default index;
