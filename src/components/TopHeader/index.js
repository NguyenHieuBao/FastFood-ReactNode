import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchAll from '../SearchAll';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="top-header d-none d-md-block">
                <div className="d-flex justify-content-around">
                    <div className="logo-header">
                        <Link to="/" title="ILoveF">
                            <img src='images/logo.png' alt="logo"/>
                        </Link>
                    </div>
                    <SearchAll/>
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
