import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as productsAction from '../../actions/products';
import * as postsAction from '../../actions/posts';
import PropTypes from 'prop-types';
import { MESSAGE_HOT_PRODUCTS } from '../../constants/products';
import { MESSAGE_NEW_POSTS } from '../../constants/posts';
import Banner from '../../components/Banner';
import HotCategories from '../../components/HotCategories';
import BestProduct from '../../components/BestProduct';
import Product from '../../components/Product';
import Post from '../../components/Post';

class index extends Component {
    componentDidMount(){
        const { productsActionCreator, postsActionCreator } = this.props;
        const { fetchListHotProducts } = productsActionCreator;
        const { fetchListNewPosts } = postsActionCreator;
        fetchListHotProducts();
        fetchListNewPosts();
    }
    renderHotProductItem = hotProducts => {
        let xhtml = null;
        if(hotProducts.length >= 0){
            xhtml = hotProducts.map(product => {
                return (
                    <Product key={product._id} product={product}/>
                )
            })
        }
        return xhtml;
    }
    renderHotProducts = () => {
        const { hotProducts } = this.props;
        let xhtml = null;
        if(hotProducts.length > 0){
            xhtml =  (
                <HotCategories message={MESSAGE_HOT_PRODUCTS}>
                    { this.renderHotProductItem(hotProducts) }
                </HotCategories>
            )
        }
        return xhtml;
    }
    renderNewPostItem = newPosts => {
        let xhtml = null;
        xhtml = newPosts.map(post => {
            return (
                <Post key={post._id} post={post} />
            )
        })
        return xhtml;
    }
    renderNewPosts = () => {
        const { newPosts } = this.props;
        let xhtml = null;
        if(newPosts.length > 0){
            xhtml = (
                <HotCategories message={MESSAGE_NEW_POSTS}>
                    { this.renderNewPostItem(newPosts) }
                </HotCategories>
            )
        }
        return xhtml;
    }
    render() {
        return (
            <React.Fragment>
                <Banner/>
                { this.renderHotProducts() }
                <BestProduct/>
                { this.renderNewPosts() }
            </React.Fragment>
        );
    }
}

index.propTypes = {
    hotProducts: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        Name: PropTypes.string,
        Price: PropTypes.number,
        Image: PropTypes.string
    })),
    newPosts : PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        Title: PropTypes.string,
        DateCreated: PropTypes.string
    }))
};

const mapStateToProps = state => ({
    hotProducts : state.products.hotProducts,
    newPosts : state.posts.newPosts
})
const mapDispatchToProps = dispatch => ({
    productsActionCreator : bindActionCreators(productsAction, dispatch),
    postsActionCreator : bindActionCreators(postsAction, dispatch)
})
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)
export default compose(
    withConnect
)(index);
