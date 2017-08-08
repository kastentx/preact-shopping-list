import preact from 'preact';
import style from './style';

export default function Item(props) {
  return (
    <div class={style.test}>
      <li>
        {props.text}
        <span class={style.delBtn} onClick={props.delDoc} data-item={props.text} data-id={props.id}>X</span>
      </li>
    </div>
  );
}
