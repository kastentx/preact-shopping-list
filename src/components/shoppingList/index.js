import preact from 'preact';

export default function ShoppingList(props) {
  return (
    <div>
      {props.children ? <ul>{props.children}</ul> : <p>EMPTY SHOPPING LIST</p>}
    </div>
  );
}
