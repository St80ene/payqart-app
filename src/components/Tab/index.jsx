import './Tab.scss';


export default (props) => {
    return (
			<div className={`tab ${props.isActive && 'show'}`}>{props.children}</div>
		);
}