import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="products">
                <div className="image">
                    <img src="images/4.jpg" alt="products"/>
                </div>
                <div className="title">
                    <h5>
                        Hot dog khá ngon
                    </h5>
                </div>
                <div className="price">
                    100.000 đ
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
