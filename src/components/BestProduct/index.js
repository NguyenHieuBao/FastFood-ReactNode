import React, { Component } from 'react';
import Title from '../Title';
import './styles.css';

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Title title="Sản phẩm của tuần"/>
                <div className="row best-product">
                    <div className="col-md-6 col-12">
                        <div className="content-best">
                            <div>Tên sản phẩm: Hambuger bò</div>
                            <div>Mã sản phẩm: #123</div>
                            <div>Loại sản phẩm: Thức ăn nhanh</div>
                        <div>Số lượng bán trong tuần: 55</div>
                        <div>Sao: 4/5</div>
                        <div>Nhiều comment và like nhất</div>
                        <div>Nguyên vật liệu: bột mỳ,salad,bò,khoai tây,cà chua,</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="image-best">
                            <img src="images/3.jpg" alt="comic"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default index;
