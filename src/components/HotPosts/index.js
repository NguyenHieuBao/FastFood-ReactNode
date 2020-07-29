import React, { Component } from 'react';
import Title from '../Title';
import Carousel from '../Caurosel';
import Posts from '../Post';

class index extends Component {
    render() {
        return (
            <div className="hot-products">
                <Title title="Bài viết mới nhất"/>
                <div className="content-hot-products">  
                    <Carousel>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
					</Carousel>
                </div>
            </div>
        );
    }
}

export default index;
