import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="mobile row d-md-none">
                <div className="col-md-2 col-2 d-flex align-items-center">
                    <div className="logo-header-mobile">
                        <Link to="/" title="ILoveF">
                            <img src="images/logo.png" alt="logo"/>
                        </Link>
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
                            <Link to="/" className="dropdown-item" title="Trang chủ">Trang chủ</Link>
                            <Link to="/products" className="dropdown-item" title="Trang chủ">Sản phẩm</Link>
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
