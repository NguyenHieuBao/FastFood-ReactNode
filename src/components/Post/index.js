import React, { Component } from 'react';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="products">
                <div className="image">
                    <img src="images/11.jpg" alt="products"/>
                </div>
                <div className="title">
                    <h5>
                        Chúc mừng sinh nhật
                    </h5>
                </div>
                <div className="cotent-posts">
                    Nhân ngày sịnh nhật, chúng tôi tặng bạn những chương trình khuyến mãi vô cùng lớn,...
                </div>
            </div>
        );
    }
}

export default index;
