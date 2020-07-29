import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="filter-products">
                <h5>Bộ lọc nâng cao:</h5>
                <div className="filter-content">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="SubtractProducts"/>Sản phẩm đang giảm giá
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="NewProducts"/>Sản phẩm mới
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="LoveProducts"/>Sản phẩm được yêu thích nhất
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;
