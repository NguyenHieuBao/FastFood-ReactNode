import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="bottom-header d-none d-md-block">
                <ul className="ul-bottom-header d-flex justify-content-around">
                    <li>
                        <Link to="/" title="Trang chủ">
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" title="Sản phẩm">
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <a href="#" title="Tin tức">
                            Tin tức
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Thông tin">
                            Thông tin
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Liên hệ">
                            Liên hệ
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default index;
