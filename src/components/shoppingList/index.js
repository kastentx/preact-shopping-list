import preact from 'preact';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';
import style from './style';

export default function ShoppingList(props) {
  return (
    <div class={style.list}>
      {props.children ? <List>{props.children}</List> : <p>EMPTY SHOPPING LIST</p>}
    </div>
  );
}
