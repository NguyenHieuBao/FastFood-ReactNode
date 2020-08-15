import React, { Component } from 'react';
import Carousel from '../Caurosel';
import Title from '../Title';
import './styles.css';

class index extends Component {
    render() {
        const { children, message } = this.props;
        return (
            <div className="hot-products">
                <Title title={message}/>
                <div className="content-hot-products">  
                    <Carousel key={`${children.length}`}>
                        { children }
					</Carousel>
                </div>
            </div>
        );
    }
}

export default index;
