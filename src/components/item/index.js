import preact from 'preact';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';
import style from './style';

export default function Item(props) {
  return (
    <div>
      <List.item>{props.text} <span class={style.delBtn} onClick={props.delDoc} data-item={props.text} data-id={props.id}>X</span></List.item>
    </div>
  );
}
