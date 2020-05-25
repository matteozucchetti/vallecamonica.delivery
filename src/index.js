import { h, Component, createContext } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import './assets/styles/global.css';

// Routes
import Home from './routes/home';
import Form from './routes/form';
import FormSuccess from './routes/formSuccess';
import Admin from './routes/admin';

// Components
import Header from './components/header';
import Footer from './components/footer';
import { Dialog } from './components/dialog';
import AdminDialog from './components/adminDialog';
import { PWAPrompt } from './components/pwaPrompt';

// Images
import VcdLogo from './assets/svg/logo.svg';

export const Action = createContext({})

export default class App extends Component {

	state = {
		isHomepage: true,
		isPopupOpen: false,
		isAdminPopupOpen: false,
		popupData: {},
		adminPopupData: {}
	}

	targetElement = null;

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

	setAdminPopupNumbers = (e, adminPopupData) => {
		e.preventDefault();

		this.setState({
			adminPopupData,
			isAdminPopupOpen: true
		})
	}

	closePopup = (e) => {
		if (e.currentTarget === e.target) {
			this.setState({ isPopupOpen: false, isAdminPopupOpen: false })
		}
	}

	closePopupFromButton = (e) => {
		this.setState({ isPopupOpen: false, isAdminPopupOpen: false })
	}

	componentDidMount() {

		this.targetElement = document.querySelector('#popupDialog');

	}

	componentDidUpdate() {
		const { isPopupOpen } = this.state;
		isPopupOpen ? disableBodyScroll(this.targetElement) : enableBodyScroll(this.targetElement);
	}

	componentWillUnmount() {
		clearAllBodyScrollLocks();
	}

	render(props, { isHomepage, popupData, isPopupOpen, adminPopupData, isAdminPopupOpen }) {

		return (
			<Action.Provider value={{ setPopupNumbers: this.setPopupNumbers, setAdminPopupNumbers: this.setAdminPopupNumbers }}>
				<Header />
				<div id="app" class="relative">
					<div class="max-w-screen-lg mx-auto">
						<Link href="/"><VcdLogo class="w-4/6 md:w-1/2 mx-auto my-10 main-logo" /></Link>
					</div>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Form path="/form" />
						<FormSuccess path="/form/success" />
						<Admin path="/admin" />
					</Router>
				</div>
				<Footer />
				<Dialog isOpen={isPopupOpen} closePopup={this.closePopup} closePopupFromButton={this.closePopupFromButton} {...popupData} />
				<AdminDialog isOpen={isAdminPopupOpen} closePopup={this.closePopup} closePopupFromButton={this.closePopupFromButton} {...adminPopupData} />
				<PWAPrompt />
			</Action.Provider>
		);
	}
}
