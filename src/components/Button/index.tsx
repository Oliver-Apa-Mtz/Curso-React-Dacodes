import './styles.css';

export interface IButton {
	text: string;
}

const Button = ({ text }: IButton) => {
	return (
		<div className="button">
			{text}
		</div>
	)
}

export default Button