import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : "Tất cả"
        }
    }
    onToggleItem = item => {
        const { handleCategoryProducts } = this.props;
        this.setState({
            active : item
        })
        handleCategoryProducts(item);
    }
    renderItem = () => {
        const { categories } = this.props;
        let xhtml = null;
        xhtml = categories.map(item => {
            return (
                <div 
                    key={item}
                    className={`item-products${this.state.active === item ? " active-category" : ''}`}
                    onClick={() => this.onToggleItem(item)}
                >
                    { item }
                </div>
            )
        })
        return xhtml;
    }
    render() {
        return (
            <div className="category-products">
                <h5>Danh mục sản phẩm:</h5>
                { this.renderItem() }
                <div className="line-products"></div>
            </div>
        );
    }
}

export default index;
