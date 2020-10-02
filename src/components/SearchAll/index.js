import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as productsAction from '../../actions/products';
import './styles.css';

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggestions : [],
            text : ''
        }
    }
    componentDidMount(){
        const { productsActionCreator } = this.props;
        const { searchAll } = productsActionCreator;
        searchAll();
    }
    handleChange = e => {
        const { listSearchAll } = this.props;
        const { value } = e.target;
        let suggestions = [];

        if(value.length > 0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions = listSearchAll.sort().filter(v => regex.test(v));
        }
        this.setState({
            suggestions,
            text : value
        })
    }
    suggestionsSelected = value => {
        const { productsActionCreator } = this.props;
        const pageIndex = 1;
        const { getKeywordForSearchAll, fetchListProductsForPagination } = productsActionCreator;
        getKeywordForSearchAll(value);
        fetchListProductsForPagination(pageIndex);
        this.setState({
            text : value,
            suggestions : []
        })
        this.props.history.push('/products');
    }
    handleEnterSearchAll = e => {
        const { key } = e;
        if(key === "Enter")
        {
            const { text } = this.state;
            const pageIndex = 1;
            const { productsActionCreator } = this.props;
            const { getKeywordForSearchAll, fetchListProductsForPagination } = productsActionCreator;
            getKeywordForSearchAll(text);
            fetchListProductsForPagination(pageIndex);
            this.setState({
                text,
                suggestions : []
            })
            this.props.history.push('/products');
        }
    }
    renderSuggestions = () => {
        const { suggestions } = this.state;
        let xhtml = null;
        if(suggestions.length > 0){
            xhtml = (
                <ul className="list-suggestions">
                    {
                        suggestions.map((item, index) => 
                            <li 
                                key={index} 
                                onClick={ () => this.suggestionsSelected(item) }> { item } 
                            </li>
                        )
                    }
                </ul>
            )
        }
        return xhtml;
    }
    render() {
        const { text } = this.state;
        return (
            <div className="search-header d-flex align-items-center">
                <input 
                    value={ text }
                    type="text" 
                    className="search"
                    placeholder="Nhập tên sản phẩm"
                    onChange={ this.handleChange }
                    onKeyDown={ this.handleEnterSearchAll }
                />
                <i className="fa fa-search"></i>
                { this.renderSuggestions() }
            </div>
        );
    }
}
index.propTypes = {
    listSearchAll: PropTypes.array
};

const mapStateToProps = state => ({
    listSearchAll : state.products.searchAll
})
const mapDispatchToProps = dispatch => ({
    productsActionCreator : bindActionCreators(productsAction, dispatch)
})
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)


export default compose(
    withConnect,
    withRouter
)(index);