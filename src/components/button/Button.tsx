import { Text } from 'components/text';
import { CSSProperties } from 'react';
import styles from './Button.module.scss';

export const Button = ({
	title,
	onClick,
	type,
	style,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	style?: CSSProperties;
}) => {
	return (
		<button
			className={styles.button}
			type={type}
			onClick={onClick}
			style={style}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
