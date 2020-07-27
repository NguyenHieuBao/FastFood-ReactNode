import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="title-hot-products">
                <ul className="ul-hot-products d-flex flex-wrap">
                    <li className="d-flex align-items-center">
                        <div className="left"></div>
                    </li>
                    <li className="d-flex align-items-center">
                        <h4 className="mid">
                            { title }
                        </h4>
                    </li>
                    <li  className="d-flex align-items-center">
                        <div className="right"></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default index;
