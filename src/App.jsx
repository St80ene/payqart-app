import { useState } from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart';
import FormWizard from './components/FormWizard';
import Tab from './components/Tab';
import UserDetails from './components/UserDetails';
import PaymentPlan from './components/PaymentPlan';
import FeedBack from './components/FeedBack'
import './App.scss';
import iphone from './images/iphone.jpg';
import camera from './images/camera.jpeg';
import employment from './images/paid-employment.svg';
import selfEmployed from './images/self-employed.svg';
import industry from './images/industry.svg';

const cartItems = [
	{
		image: iphone,
		name: 'Iphone 11 pro max 2010',
		qty: 2,
		price: 43500,
	},
	{
		image: camera,
		name: 'Camera A68 pro white',
		qty: 4,
		price: 523400,
	},
];

const statusItems = [
	{
		image: employment,
		status: 'Paid Employment',
		value: 'paid'
	},
	{
		image: selfEmployed,
		status: 'Self Employment/Freelance',
		value: 'self-employed'
	},
	{
		image: industry,
		status: 'Corporate Organisation',
		value: 'organisation'
	},
];

const planTypes = [
	'Aggresive',
	'Stretching',
	'Focused',
	'Casual',
	'Mild',
	'Gentle',
];

const getTotalPrice = cartItems.reduce(
	(prev, curr) => prev + curr.qty * curr.price,
	0
);

const defaultUserData = {
	employmentStatus: 'paid',
	salary: 0,
	payDate: new Date(),
	loanExist: null,
	plan: 1,
	downPayment: cartItems.reduce((prev, curr) => (prev + (curr.qty * curr.price)), 0) * (30 / 100)
}

const App = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const [userData, setUserData] = useState(defaultUserData);

	const handleChange = (label, value) => {
		console.log(label, value);
		setUserData({...userData, [label]: value})
	}

	const changeTab = (value) => {
		if (Number(value) < 0 || Number(value) > 2) {
			return;
		}

		setCurrentTab(Number(value));

	};

	return (
		<div className="App">
			<Banner />
			<Cart cartItems={cartItems} price={getTotalPrice} />
			<FormWizard currentTab={currentTab} setCurrentTab={changeTab}>
				<Tab isActive={currentTab === 0}>
					<UserDetails
						statusItems={statusItems}
						userData={userData}
						handleChange={handleChange}
					></UserDetails>
				</Tab>
				<Tab isActive={currentTab === 1}>
					<PaymentPlan
						planTypes={planTypes}
						userData={userData}
						handleChange={handleChange}
					/>
				</Tab>
				<Tab isActive={currentTab === 2}>
					<FeedBack userData={userData} />
				</Tab>
			</FormWizard>
		</div>
	);
};

export default App;
