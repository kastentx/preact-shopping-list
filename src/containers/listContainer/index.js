import { h, Component } from 'preact';
import Item from '../../components/item';
import Prompt from '../../components/prompt';
import ShoppingList from '../../components/shoppingList';
import PouchDB from 'pouchdb';
import Credentials from '../../secret.js';
import style from './style';

const localDB = new PouchDB('shopping_list');
const remoteDB = new PouchDB(Credentials.cloudant_url);

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    }
  }

  componentDidMount = () => {
    this.getPouchDocs();
    localDB.sync(remoteDB, {live: true, retry: true})
      .on('change', change => console.log('something changed!'))
      .on('paused', info => console.log('replication paused.'))
      .on('active', info => console.log('replication resumed.'))
      .on('error', err => console.log('uh oh! an error occured.'));
  }

  getPouchDocs = () => {
    localDB.allDocs({
      include_docs: true
    }).then(response => {
      console.log('getting updated items from PouchDB.')
      this.setState({
        items: response.rows.map(item => ({_id: item.doc._id, text: item.doc.text}))
      });
    });
  }

  addPouchDoc = (item) => {
    if (item.length) {
      localDB.post({
        text: item,
        _id: new Date()
      }).then(response => {
        console.log(item + " added to PouchDB.");
        this.getPouchDocs();
      }).catch(err => {
        console.log(err);
      });
    }
  }

  delPouchDoc = (item) => {
    let myItem = item.target.dataset.item;
    localDB.get(item.target.dataset.id).then(doc => {
      doc._deleted = true;
      return localDB.put(doc);
    }).then(result => {
      console.log(myItem + " gets deleted");
      this.getPouchDocs();
    }).catch(err => {
      console.log(err);
    });
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e)  => {
    e.preventDefault();
    this.addPouchDoc(this.state.input);
    this.setState({
      input: ''
    });
  }

  renderListItems = () => {
    return this.state.items.slice().map(item => <Item key={item._id} id={item._id} text={item.text} delDoc={this.delPouchDoc}/>);
  }

  render(props, state) {
    return (
      <div>
        <Prompt
          value={state.input}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ShoppingList>
          {this.renderListItems()}
        </ShoppingList>
      </div>
    );
  }
}

export default ListContainer;
