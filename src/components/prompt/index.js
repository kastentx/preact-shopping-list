import preact from 'preact';
import Textfield from 'preact-material-components/Textfield';
import 'preact-material-components/Textfield/style.css';

export default function Prompt(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div class="form-control" >
        <Textfield
          onChange={props.onChange}
          value={props.value}
          multiline={false}
          helptext={true}
          label="add an item..."
        />
      </div>
    </form>
  );
}
