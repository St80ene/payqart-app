import './Cart.scss';

const renderItem = ({ image, name, price, qty, key }) => (
	<div className="cart__item" key={key}>
		<div className="cart__item__img-wrapper">
			<img className="cart__item__img" src={image} alt="" />
		</div>
		<div className="cart__item__info">
			<span>{name}</span>
			<span>₦{price}</span>
			<span>Qty: {qty}</span>
		</div>
	</div>
);

const renderTotal = ({ price }) => (
	<div className="cart__total">
		<div className="cart__total__price">
			<span className="cart__value">Total Cart value:</span>{' '}
			<span className="cart__value__price">₦{price}</span>
		</div>
	</div>
);

export default ({ cartItems, price }) => {
	return (
		<div className="cart">
			<p className="cart__title">ORDER SUMMARY</p>
			<div className="card cart__list">
				{cartItems.map((item, key) => renderItem({ ...item, key }))}
			</div>
			<div className="card cart__price">
				{renderTotal(
					{price}
				)}
			</div>
		</div>
	);
};
