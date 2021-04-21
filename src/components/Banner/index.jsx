import './Banner.scss';
import background_img from '../../images/pexels-uriel-mont-6280613.jpg';
import logo from '../../images/logo.jpg';


export default () => {
    return (
			<div className="banner">
				<img
					className="banner__bg-img"
					src={background_img}
					alt="background-image"
					srcset=""
				/>
				<div className="banner__overlay">
					<p>
						<i className="fas fa-arrow-left"></i> Back to store
					</p>
					<img className="banner__logo" src={logo} alt="Logo" srcset="" />
					<ul className="banner__footer">
						<li>Get pre-approved instantly.</li>
						<li>Spread payments for up to six months.</li>
						<li>Provide some basic information to get started.</li>
					</ul>
				</div>
			</div>
		);
};
