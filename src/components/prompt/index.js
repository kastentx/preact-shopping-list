import preact from 'preact';
import Textfield from 'preact-material-components/Textfield';
import style from './style';
import 'preact-material-components/Textfield/style.css';

export default function Prompt(props) {
  return (
    <div class={style.textInput}>
      <form onSubmit={props.onSubmit}>
          <Textfield
            placeholder="add an item..."
            onChange={props.onChange}
            value={props.value}
            multiline={false}
            fullwidth={true}
          />
      </form>
    </div>
  );
}
