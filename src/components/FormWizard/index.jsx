import './FormWizard.scss';

import { useState } from 'react';

const pageProgress = (index, isActive, currentTab) => (
	<div className="form-wizard__circle">
		{index !== 0 && (
			<div className={`form-wizard__circle__line ${!isActive && 'is-active'}`}></div>
		)}
		<div className={`form-wizard__circle__index ${!isActive && 'is-active'}`}>
			{currentTab < index + 1 ? index + 1 : <i class="fas fa-check"></i>}
		</div>
	</div>
);

export default (props) => {
	const [loading, setLoading] = useState(true);

	// const setLoader = (currentTab) => {
	// 	if (currentTab > 2 && loading === false) {
	// 		return true;
	// 	}
	// 	setLoading(false);
	// };
	

	return (
		<div className="form-wizard">
			<div className="form-wizard__title">
				{props.currentTab > 0 && (
					<p
						className="form-wizard__title__changeTab"
						onClick={() => props.setCurrentTab(props.currentTab - 1)}
					>
						<i className="fas fa-arrow-left"></i> Back
					</p>
				)}
				{new Array(props.children.length)
					.fill(0)
					.map((value, index) =>
						pageProgress(index, props.currentTab <= index - 1, props.currentTab)
					)}
			</div>
			<div className="form-wizard__item-wrapper">{props.children}</div>
			<div className="form-wizard__button-wrapper">
				<button
					className="form-wizard__button-wrapper__button"
					onClick={() => props.setCurrentTab(props.currentTab + 1)}
				>
					Continue
				</button>
			</div>
		</div>
	);
};
