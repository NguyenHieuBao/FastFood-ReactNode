import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="bottom-header d-none d-md-block">
                <ul className="ul-bottom-header d-flex justify-content-around">
                    <li>
                        <a href="#" title="Trang chủ">
                            Trang chủ
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Sản phẩm">
                            Sản phẩm
                        </a>
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
