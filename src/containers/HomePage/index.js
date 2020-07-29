import React, { Component } from 'react';
import Banner from '../../components/Banner';
import HotProducts from '../../components/HotProducts';
import BestProduct from '../../components/BestProduct';
import HotPosts from '../../components/HotPosts';

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <HotProducts/>
                <BestProduct/>
                <HotPosts/>
            </React.Fragment>
        );
    }
}

export default index;
