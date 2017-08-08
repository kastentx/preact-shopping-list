import preact from 'preact';
import Textfield from 'preact-material-components/Textfield';
import style from './style';
import 'preact-material-components/Textfield/style.css';

export default function Prompt(props) {
  return (
    <form onSubmit={props.onSubmit} class={style.test}>
      <div class="form-control" >
        <Textfield
          id="item"
          label="add an item..."
          onChange={props.onChange}
          value={props.value}
          multiline={false}
          fullwidth={true}
        />
      </div>
    </form>
  );
}
