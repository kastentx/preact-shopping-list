import preact from 'preact';

export default function Item(props) {
  return (
    <div>
      <li>{props.text} <span className="delete-btn" onClick={props.delDoc} data-item={props.text} data-id={props.id}>X</span></li>
    </div>
  );
}
