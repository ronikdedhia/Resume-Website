import React from 'react';
import ImgProfile from './me.jpg';
export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						<b>Ronik Dedhia</b>
					</span>
					<p>Machine Learning Developer</p>
					<p>Full Stack Web Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
					</p>
				</div>
			</div>
		</div>
	);
}
