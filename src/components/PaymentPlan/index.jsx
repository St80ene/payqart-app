import './PaymentPlan.scss';

const renderPlan = (type, key, value, handleChange, isActive) => (
	<div
		onClick={() => handleChange('plan', value)}
		className={`payment-plan ${isActive && 'active'}`}
		key={key}
	>
		<div className="payment-plan__type">{type}</div>
		<p className="payment-plan__length">{key + 1}</p>
		{<div className="payment-plan__type">{`month${key !== 0 ? 's' : ''}`}</div>}
	</div>
);

export default ({ planTypes, handleChange }) => {
	return (
		<div className="payment">
			<p className="payment__title">Choose Your Plan</p>
			<div className="payment__plan">
				{planTypes.map((items, key) => renderPlan(items, key))}
			</div>
			<div className="payment__breakdown">
				<p className="payment__title">Payment Breakdown</p>
				<div className="payment__breakdown__wrapper">
					<div className="shopping-list">
						<div className="shopping-list__items">Shopping credit</div>
						<div className="shopping-list__items">Down payment</div>
						<div className="shopping-list__items">Monthly installment</div>
						<div className="shopping-list__items">Tenure</div>
					</div>
					<div className="shopping-list">
						<div className="shopping-list__items">₦20,000</div>
						<div className="shopping-list__items">₦20,000</div>
						<div className="shopping-list__items">₦20,000</div>
						<div className="shopping-list__items">₦20,000</div>
					</div>

					<div>
						<p>Customize</p>
						<p>Down payment</p>
						<div className="price-wrapper">
							<div className="price-wrapper__currency">₦</div>
							<div className="price-wrapper__amount">21,0000</div>
						</div>
						<div className="btn-wrapper">
							<button className="btn-wrapper__btn">Update Breakdown</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
