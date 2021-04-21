import './UserDetails.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const renderTabContent = ({ image, status, value, key, handleChange }) => (
	<div
		onClick={() => handleChange('employment', value)}
		className="tab-content__status"
		key={key}
	>
		<div className="tab-content__status__img">
			<img src={image} alt="" srcset="" />
		</div>
		<p className="tab-content__status__description">{status}</p>
	</div>
);

export default ({ statusItems, handleChange, userData }) => {

	return (
		<form>
			<div className="tab-content">
				<p className="tab-content__title">What Do You Do?</p>
				<div className="tab-content__occupation">
					{statusItems.map((items, key) =>
						renderTabContent({ ...items, key, handleChange })
					)}
				</div>
				<div className="tab-content__salary">
					<p className="description">How much do you get paid monthly?</p>
					<div className="tab-content__salary__input-wrapper">
						<div className="currency-symbol">₦</div>
						<input
							className="salary-input"
							type="number"
							value={userData.salary}
							onChange={(e) => handleChange('salary', e.target.value)}
						/>
					</div>
				</div>
				<div className="tab-content__salary">
					<p className="description">When is your next salary date?</p>
					<div className="tab-content__salary__input-wrapper date">
						<i class="far fa-calendar-alt"></i>
						<DatePicker
							className="date-picker"
							selected={userData.payDate}
							// onSelect={(e) => handleChange('payDate', e.target.value)}
							onChange={(date) => handleChange('payDate', date)}
							placeholderText="Select pay date"
						/>
						<i class="fas fa-chevron-down"></i>
					</div>
				</div>
				<div className="tab-content__loan">
					<p className="description">Do you have existing loan(s)?</p>
					<div className="tab-content__loan-details">
						<div>
							<input
								type="radio"
								name="loan"
								onChange={(_) => handleChange('loanExist', true)}
							/>
							<span>Yes</span>
						</div>
						<div>
							<input
								type="radio"
								name="loan"
								onChange={(_) => handleChange('loanExist', false)}
							/>
							<span> No </span>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}