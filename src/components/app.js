import { h, Component } from 'preact';
import Header from './header';
import Test from './test';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<Test />
			</div>
		);
	}
}
