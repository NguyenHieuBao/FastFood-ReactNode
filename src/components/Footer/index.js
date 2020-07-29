import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class index extends Component {
    render() {
        return (
            <div className="footer">
                <div className="top-footer">
                    <div className="row logo-footer">
                        <div className="col-md-5 col-4 d-flex align-items-center">
                            <div className="left-footer"></div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="mid-footer">
                                <Link to="/" title="ILoveF">
                                    <img src="images/logo.png" alt="logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-5 col-4 d-flex align-items-center">
                            <div className="right-footer"></div>
                        </div>
                    </div>
                </div>
                <div className="content-footer d-flex justify-content-around">
                    <div className="left-content-ft">
                        <h5>
                            Đối tác
                        </h5>
                        <div>Công ty thực phẩm sạch</div>
                        <div>Công ty quảng cáo</div>
                        <div>Figma</div>
                        <div>Công ty dịch vụ vận chuyển</div>
                        <div>Grap bike</div>
                    </div>
                    <div className="mid-content-ft">
                        <h5>
                            Liên hệ
                        </h5>
                        <div>Facebook</div>
                        <div>Youtobe</div>
                        <div>Twitter</div>
                    </div>
                    <div className="right-content-ft">
                        <h5>
                            Cam kết
                        </h5>
                        <div>Nguyên vật liệu sạch</div>
                        <div>Chất lượng sản phẩm tốt</div>
                        <div>Giao hàng cực nhanh</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;
