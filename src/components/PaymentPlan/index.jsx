import './PaymentPlan.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const renderPlan = (type, key, handleChange, activePlan) => (
	<div
		onClick={() => handleChange('plan', key + 1)}
		className={`payment-plan ${key + 1 === activePlan && 'payment__plan__active'}`}
		key={key}
	>
		<div className="payment-plan__type">{type}</div>
		<p className="payment-plan__length">{key + 1}</p>
		{<div className="payment-plan__type">{`month${key !== 0 ? 's' : ''}`}</div>}
	</div>
);

export default ({
	planTypes,
	userData,
	handleChange,
	activePlan,
	isLoading,
	error,
	response,
	getApproval,
}) => {
	return (
		<div className="payment">
			<p className="payment__title">Choose Your Plan</p>
			<div className="payment__plan">
				{planTypes.map((items, key) =>
					renderPlan(items, key, handleChange, activePlan)
				)}
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
						{isLoading ? (
							<div className="shopping-list__msg">
								<Loader
									className="feedback__loader"
									type="Circles"
									color="#cc2952b6"
									height={22}
									width={22}
								/>
							</div>
						) : error ? (
							<div className="shopping-list__msg">
								<span>{error}</span>
							</div>
						) : (
							<>
								{' '}
								<div className="shopping-list__items">
									{`${
										'₦ ' +
										(response
											? new Intl.NumberFormat().format(response.shoppingCredit)
											: '')
									}`}
								</div>
								<div className="shopping-list__items">{`${
									'₦ ' +
									(response
										? new Intl.NumberFormat().format(response.downPayment)
										: '')
								}`}</div>
								<div className="shopping-list__items">
									{`${
										'₦ ' +
										(response
											? new Intl.NumberFormat().format(
													response.monthlyRepayment
											  )
											: '')
									}`}
								</div>
								<div className="shopping-list__items">
									{`${
										'₦ ' +
										(response
											? new Intl.NumberFormat().format(response.plan)
											: '')
									}`}
								</div>
							</>
						)}
					</div>

					<div>
						<p>Customize</p>
						<p>Down payment</p>
						<div className="price-wrapper">
							<div className="price-wrapper__currency">₦</div>
							<input
								type="number"
								min="0"
								className="price-wrapper__amount"
								value={new Intl.NumberFormat().format(userData.downPayment)}
								onChange={(e) => handleChange('downPayment', e.target.value)}
							/>
						</div>
						<div className="btn-wrapper">
							<button onClick={getApproval} className="btn-wrapper__btn">
								Update Breakdown
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
	
