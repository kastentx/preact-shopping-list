import preact from 'preact';
import Header from './header';
import ListContainer from '../containers/listContainer';
import Footer from './footer';

export default function App(props) {
	return (
		<div id="app">
			<Header />
			<ListContainer />
			<Footer />
		</div>
	);
}
