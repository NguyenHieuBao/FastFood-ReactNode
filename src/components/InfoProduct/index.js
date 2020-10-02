import React, { Component } from 'react';
import './styles.css';

export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-4">
					<img src="images/6.jpg" alt=""/>
				</div>
				<div className="col-md-8">
					<h3>
						Bánh ngọt socola
					</h3>
					<div className="price-details">
						100.000 đ
					</div>
					<div className="id-details">
						Mã sản phẩm: 1
					</div>
					<div className="present">
						<div className="line-details"></div>
						<div className="cmt-details">
							Món ngon độc lạ
						</div>
						<div className="line-details"></div>
					</div>
					<div className="act-details d-flex justify-content-start">
						<div className="amount-details">
							<span>Số lượng: </span>
							<input type="text" placeholder="1" className="amount-inp" />
						</div>
						<div className="btn-buy-details">
							<input type="button" value="Mua hàng" className="btn btn-success"/>
						</div>
					</div>
				</div>
            </React.Fragment>
        )
    }
}
