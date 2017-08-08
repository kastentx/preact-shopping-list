import { h } from 'preact';
import style from './style';

export default function Header(props) {
	return (
		<header class={style.header}>
			<h1>Shopping List</h1>
		</header>
	);
}
