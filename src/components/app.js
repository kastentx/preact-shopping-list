import { h, Component } from 'preact';
import Header from './header';
import ListContainer from '../containers/listContainer';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<ListContainer />
			</div>
		);
	}
}
