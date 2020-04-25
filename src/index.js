import { h, Component, createContext } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import './assets/styles/global.css';

// Fonts
require("typeface-open-sans")

// Routes
import Home from './routes/home.js';
import Form from './routes/form.js';
import FormSuccess from './routes/formSuccess';

// Components
import { Dialog } from './components/dialog.js';
import { PWAPrompt } from './components/pwaPrompt';

export const Action = createContext({})

export default class App extends Component {

	state = {
		results: {},
		isHomepage: true,
		isPopupOpen: false,
		popupData: {},
	}
	
	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({ isHomepage: e.url.replace(/\?.*/g, "") === "/" });
	};

	setPopupNumbers = (e, popupData) => {
		e.preventDefault();

		this.setState({
			popupData,
			isPopupOpen: true
		})
	}

	closePopup = (e) => {	
		if (e.currentTarget === e.target) {
			this.setState({ isPopupOpen: false })
		}
	}

	componentDidMount() {
		fetch(`${process.env.PREACT_APP_DATA_SOURCE}?c=${Math.random().toString(36).split('.')[1]}`)
			.then(r => r.json())
			.then(json => {
				this.setState({
					results: json,
					resultBkp: json
				});
			});
	}

	componentDidUpdate() {
		const { isPopupOpen } = this.state;
		
		const root = document.documentElement;
		root.style.setProperty('--popup-visible', isPopupOpen ? 'hidden': 'initial')
	}

	render(props, { isHomepage, results, popupData, isPopupOpen }) {
		return (
			<Action.Provider value={{setPopupNumbers: this.setPopupNumbers}}>
				<div id="app" class="px-5 max-w-screen-lg mx-auto pb-10">
					<nav class="flex justify-center md:justify-end items-center">
						{
							isHomepage
								? <Link class="m-5 bg-blue-500 inline-block hover:bg-blue-700 text-white px-2 py-1 rounded" href="/form">➕ Aggiungi un'attività</Link>
								: <Link class="m-5 bg-blue-500 inline-block hover:bg-blue-700 text-white px-2 py-1 rounded" href="/">Torna indietro</Link>
						}
					</nav>					
					<Router onChange={this.handleRoute}>
						<Home path="/" results={results} />
						<Form path="/form" />
						<FormSuccess path="/form/success" />
					</Router>
				</div>
				<Dialog isOpen={isPopupOpen} closePopup={this.closePopup} {...popupData} />
				<PWAPrompt />
			</Action.Provider>
		);
	}
}
