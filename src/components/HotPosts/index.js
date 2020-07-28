import React, { Component } from 'react';
import Category from '../Category';
import Carousel from '../Caurosel';
import Posts from '../Post';

class index extends Component {
    render() {
        return (
            <div className="hot-products">
                <Category title="Bài viết mới nhất"/>
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
