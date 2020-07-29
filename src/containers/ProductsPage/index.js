import React, { Component } from 'react';
import Category from '../../components/Category';
import FilterPrices from '../../components/FilterPrices';
import Sort from '../../components/Sort';
import Filter from '../../components/Filter';
import Product from '../../components/Product';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="container-products">
                <div className="row mid-container-products">
                    <div className="col-md-3 col-5">
                        <Category/>
                        <FilterPrices/>
                        <Sort/>
                        <Filter/>
                    </div>
                    <div className="col-md-9 col-7">
                        <div className="row content-products">
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                                <Product/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;
