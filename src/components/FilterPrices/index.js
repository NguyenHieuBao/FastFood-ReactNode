import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            min : 0,
            max : 0
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.min !== nextState.min || this.state.max !== nextState.max) {
          return true;
        }
        return false;
    }
    onChangeFilterPrices = e => {
        const { name, value } = e.target;
        let boolean = false;
        const { validateInput } = this.props;
        switch(name){
            case "min" : {
                if(value.length <= 0){
                    this.setState({
                        [name] : 0
                    })
                }
                else if(validateInput.test(value)){
                    boolean = true;
                }
                break;
            }
            case "max" : {
                if(value.length <= 0){
                    this.setState({
                        [name] : 0
                    })
                }
                else if(validateInput.test(value)){
                    boolean = true;
                }
                break;
            }
            default : break;
        }
        if(boolean){
            this.setState({
                [name] : value
            })
        }
        
    }
    onSubmitFilterPrice = () => {
        const { min, max } = this.state;
        this.props.handleFilterPrice(parseInt(min), parseInt(max));
    }
    render() {
        return (
            <div className="price-products">
                <h5>Giá:</h5>
                <div className="item-prices">Chọn khoảng giá</div>
                <div className="search-price d-flex justify-content-between align-items-center">
                    <input type="text" name="min" className="search-left" onChange={ this.onChangeFilterPrices }/>
                    <label className="search-mid"></label>
                    <input type="text" name="max" className="search-right" onChange={ this.onChangeFilterPrices }/>
                </div>
                <div className="button-filter">
                    <button type="button" className="btn btn-success" onClick={ this.onSubmitFilterPrice }>
                        Chọn
                    </button>
                </div>
                <div className="line-products"></div>
            </div>
        );
    }
}

export default index;
