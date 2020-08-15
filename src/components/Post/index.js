import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="products">
                <div className="image">
                    <img src={`images/${post ? post.Image : ''}`} alt="products"/>
                </div>
                <div className="title">
                    <h5>
                        { post.Title }
                    </h5>
                </div>
                <div className="cotent-posts">
                    { post.Description }
                </div>
            </div>
        );
    }
}

export default index;
