import './FeedBack.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';

export default ({ isLoading, isError }) => {
	return (
		<div className="feedback">
			<div className="feedback__main">
				{isLoading ? (
					<Loader
						className="feedback__loader"
						type="Circles"
						color="#cc2952b6"
						height={80}
						width={80}
					/>
				) : (
					<>
						<div className="feedback__main__icon-wrapper">
							<i
								class={`fas fa-${isError ? 'exclamation' : 'check'} icon-size`}
							></i>
						</div>
						<span className={`${isError ? 'error' : 'success'}-msg msg-position`}>
							{isError ? 'Unsuccessful!!' : 'Successfull!!'}
						</span>
					</>
				)}
			</div>
		</div>
	);
};
