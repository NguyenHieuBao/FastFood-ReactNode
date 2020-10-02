import React, { Component } from 'react';
import InfoProduct from '../../components/InfoProduct';
import DetailsProduct from '../../components/DetailsProduct';

export default class index extends Component {
    render() {
        return (
            <div className="container-products">
                <div className="row">
                    <InfoProduct/>
                    <DetailsProduct/>
                </div>
            </div>
        )
    }
}
