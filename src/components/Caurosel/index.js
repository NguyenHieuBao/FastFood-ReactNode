import React, { Component } from 'react';
import './styles.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    loop:true,
	nav:true,
	//autoplay:true,
	//autoplayTimeout:4000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		576:{
			items:2
		},
		766:{
			items:3
		},
		1000:{
			items:4
		},
		1210:{
			items:5
		}
	}
};
class index extends Component {
	render() {
        const { children, ...props } = this.props;
		return (
			<ReactOwlCarousel {...props}  {...options}>
				{children}
			</ReactOwlCarousel>
		);
	}
}
export default index;