import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="mobile row d-md-none">
                <div className="col-md-2 col-2 d-flex align-items-center">
                    <div className="logo-header-mobile">
                        <a href="index.html" title="ILoveF">
                            <img src="images/logo.png" alt="logo"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-9 col-9 d-flex align-items-center">
                    <div className="search-mobile-top">
                        <div className="search-header-mobile d-flex align-items-center justify-content-center">
                            <input type="text" className="search-mobile" name="searchName" placeholder="Nhập tên sản phẩm"/>
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-1 d-flex align-items-center justify-content-end">
                    <div className="menu-mobile dropdown">
                        <i className="fa fa-list" data-toggle="dropdown"></i>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Trang chủ</a>
                            <a className="dropdown-item" href="#">Sản phẩm</a>
                            <a className="dropdown-item" href="#">Tin tức</a>
                            <a className="dropdown-item" href="#">Thông tin</a>
                            <a className="dropdown-item" href="#">Liên hệ</a>
                            <a className="dropdown-item" href="#">
                                <i className="fa fa-shopping-cart cart"></i>
                                <span> Giỏ hàng </span>
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fa fa-user-circle-o"></i>
                                <span> Đăng nhập </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;
