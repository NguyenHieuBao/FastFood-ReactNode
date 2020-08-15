import React, { Component } from 'react';
import './styles.css';

const validateSearchPage = /^[0-9]+$/i;

class index extends Component {
    renderPagination = () => {
        const { page, totalPage, handlePagination } = this.props;
        let xhtml = null;
        if(page > 0 && totalPage > 0){
            xhtml = (
                <React.Fragment>
                    <li onClick={() => handlePagination(page - 1)}>
                        <i className="fa fa-chevron-left"></i>
                    </li>
                    <li className="active-btn-page">
                        { page }
                    </li>
                    <li onClick={() => handlePagination(page + 1)} >
                        <i className="fa fa-chevron-right"></i>
                    </li>
                </React.Fragment>
            )
        }
        return xhtml;
    }
    handleSearchPage = e => {
        const { totalPage, handlePagination } = this.props;
        let { value } = e.target;
        let boolean = (value > 0 && value <= totalPage) ? true : false;
        if(boolean && validateSearchPage.test(value)){
            handlePagination(value);
        }
    }
    render() {
        const { page, totalPage } = this.props;
        return (
            <div className="pagination d-flex justify-content-between align-items-center">
                <div className="filter-page">
                    <input 
                        type="text" 
                        name="searchPage" 
                        className="search-page" 
                        placeholder={page || "..." }
                        onChange={this.handleSearchPage}
                    /> 
                    <span className="total-page">/ { totalPage } </span>
                </div>
                <ul className="d-flex justify-content-end list-page">
                    { this.renderPagination() }
                </ul>
            </div>
        );
    }
}

export default index;
