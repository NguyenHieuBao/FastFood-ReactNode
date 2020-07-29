import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="sort-products">
                <h5>Sắp xếp:</h5>
                <div className="sort-content">
                    <select name="sort" className="sort">
                        <option value="total">Tất cả</option>
                        <option value="priceAugement">Giá tăng dần</option>
                        <option value="priceAbatement">Giá giảm dần</option>
                    </select>
                </div>
                <div className="line-products"></div>
            </div>
        );
    }
}

export default index;
