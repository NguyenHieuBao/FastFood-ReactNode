import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as productsAction from '../../actions/products';
import * as categoriesAction from '../../actions/categories';
import CategoryProducts from '../../components/CategoryProducts';
import FilterPrices from '../../components/FilterPrices';
import Sort from '../../components/Sort';
import Filter from '../../components/Filter';
import Product from '../../components/Product';
import Pagination from '../../components/Pagination';
import './styles.css';

const validateInput = /^[0-9]+$/i;

class index extends Component {
    componentDidMount(){
        const { productsActionCreator, categoriesActionCreator } = this.props;
        const { fetchListProducts } = productsActionCreator;
        const { fetchListCategory } = categoriesActionCreator;
        fetchListProducts();
        fetchListCategory();
    }
    renderProduct = () => {
        let xhtml = null;
        const { products } = this.props;
        if(products){
            xhtml = products.map((product) => {
                return(
                    <div className="col-lg-3 col-md-4 col-12"  key={ product._id }>
                        <Product product={product}/>
                    </div>
                )
            })
        }
        return xhtml;
    }
    handleFilterPrice = (priceFrom, priceTo) => {
        const { productsActionCreator, min, max } = this.props;
        const pageIndex = 1;
        const { filterPrices, fetchListProductsForPagination } = productsActionCreator;
        if(priceFrom > priceTo){
            [priceTo, priceFrom] = [priceFrom, priceTo]
        }
        if(priceFrom !==  min || priceTo !== max){
            filterPrices(priceFrom, priceTo);
            fetchListProductsForPagination(pageIndex);
        }
    }
    handleSortPrices = sortPrice => {
        const { productsActionCreator } = this.props;
        const pageIndex = 1;
        const { sortPrices, fetchListProductsForPagination } = productsActionCreator;
        sortPrices(sortPrice);
        fetchListProductsForPagination(pageIndex);
    }
    handlePagination = pageIndex => {
        const { page, totalPage } = this.props;
        pageIndex = (pageIndex <= 0 || pageIndex > totalPage) ? 1 : pageIndex;
        if(parseInt(pageIndex) !== parseInt(page)){
            const { productsActionCreator } = this.props;
            const { fetchListProductsForPagination } = productsActionCreator;
            fetchListProductsForPagination(pageIndex);
        }
    }
    renderPagination = () => {
        const { page, totalPage } = this.props;
        let xhtml = null;
        if(page > 0 && totalPage > 0){
            xhtml = (
                <Pagination 
                    page={page} 
                    totalPage={totalPage} 
                    handlePagination={this.handlePagination}
                />
            )
        }
        return xhtml;
    }
    handleCategoryProducts = categories => {
        const { productsActionCreator, categoryName } = this.props;
        const pageIndex = 1;
        if(categoryName!==categories){
            const { searchForCategories, fetchListProductsForPagination } = productsActionCreator;
            searchForCategories(categories);
            fetchListProductsForPagination(pageIndex);
        }
    }
    renderCategoryProducts = () => {
        const { categories } = this.props;
        let xhtml = null;
        if(categories.length >=0 ){
            xhtml = (
                <CategoryProducts 
                    categories={categories}
                    handleCategoryProducts={this.handleCategoryProducts}
                />
            )
        }
        return xhtml;
    }
    render() {
        return (
            <div className="container-products">
                <div className="row mid-container-products">
                    <div className="col-md-3 col-5">
                        { this.renderCategoryProducts() }
                        <FilterPrices 
                            validateInput={ validateInput } 
                            handleFilterPrice={ this.handleFilterPrice }
                        />
                        <Sort handleSortPrices={ this.handleSortPrices }/>
                        <Filter/>
                    </div>
                    <div className="col-md-9 col-7">
                        <div className="row content-products">
                            { this.renderProduct() }
                        </div>
                        { this.renderPagination() }
                    </div>
                </div>
            </div>
        );
    }
}

index.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        Name: PropTypes.string,
        Price: PropTypes.number,
        Image: PropTypes.string
    })),
    page : PropTypes.number,
    totalPage : PropTypes.number,
    min : PropTypes.number,
    max : PropTypes.number,
    catygoryName : PropTypes.string,
    categories: PropTypes.array
};

const mapStateToProps = state => ({
    products : state.products.products,
    page : state.products.page,
    totalPage : state.products.totalPage,
    min : state.products.min,
    max : state.products.max,
    categoryName : state.products.categories,
    categories : state.categories.categories
})
const mapDispatchToProps = dispatch => ({
    productsActionCreator : bindActionCreators(productsAction, dispatch),
    categoriesActionCreator : bindActionCreators(categoriesAction, dispatch)
})
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)


export default compose(
    withConnect
)(index);
