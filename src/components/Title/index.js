import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="title-hot-products">
                <ul className="ul-hot-products d-flex flex-wrap">
                    <li className="d-flex align-items-center width-line">
                        <div className="left d-none d-md-block"></div>
                    </li>
                    <li className="d-flex align-items-center">
                        <h4 className="mid">
                            { title }
                        </h4>
                    </li>
                    <li className="d-flex align-items-center width-line">
                        <div className="right d-none d-md-block"></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default index;
