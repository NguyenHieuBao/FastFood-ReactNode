import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="top-header d-none d-md-block">
                <div className="d-flex justify-content-around">
                    <div className="logo-header">
                        <a href="index.html" title="ILoveF">
                            <img src='images/logo.png' alt="logo"/>
                        </a>
                    </div>
                    <div className="search-header d-flex align-items-center">
                        <input type="text" className="search" name="searchName" placeholder="Nhập tên sản phẩm"/>
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="login-header d-flex align-items-center">
                        <ul className="ul-top-header d-flex justify-content-end">
                            <li>
                                <i className="fa fa-shopping-cart cart"></i>
                                <span> Giỏ hàng </span>
                            </li>
                            <li>
                                <i className="fa fa-user-circle-o"></i>
                                <span> Đăng nhập </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        );
    }
}

export default index;
