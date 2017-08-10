import preact from 'preact';
import style from './style';

export default function Footer(props) {
  return (
    <div class={style.footer}>
      This is an example written with <span>Preact</span> and <span>PouchDB</span> showing the offline first capabilities of a PWA.
    </div>
  );
}