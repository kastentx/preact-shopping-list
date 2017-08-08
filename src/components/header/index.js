import preact from 'preact';
import style from './style';

export default function Header(props) {
	return (
		<div class={style.header}>
      <h1>Shopping List</h1>
    </div>
	);
}
