import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="category-products">
                <h5>Danh mục sản phẩm:</h5>
                <div>Tất cả</div>
                <div className="item-products">Bánh ngọt</div>
                <div className="item-products">Salad</div>
                <div className="item-products">Các loại mì</div>
                <div className="item-products">Thực đơn đặc biệt</div>
                <div className="item-products">Khác</div>
                <div className="line-products"></div>
            </div>
        );
    }
}

export default index;
