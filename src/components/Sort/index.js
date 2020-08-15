import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    onChangeSortPrices = e => {
        const { value } = e.target;
        this.props.handleSortPrices(value);
    }
    render() {
        return (
            <div className="sort-products">
                <h5>Sắp xếp:</h5>
                <div className="sort-content">
                    <select name="sort" className="sort" onChange={ this.onChangeSortPrices }>
                        <option value="">Tất cả</option>
                        <option value="pricesIncrease">Giá tăng dần</option>
                        <option value="pricesDecrease">Giá giảm dần</option>
                    </select>
                </div>
                <div className="line-products"></div>
            </div>
        );
    }
}

export default index;
