import { Component, Fragment } from 'preact';

import { ListCategory } from '../components/listCategory';

export default class Home extends Component {
	state = {
		filter: '',
		cityFilter: null
	};

	handleChangeFilter = e => {
		const text = e.target.value;
		this.setState({ filter: text });
	};

	handleCityFilter = key => _ => { // eslint-disable-line no-unused-vars
      if (key === this.state.cityFilter) {
         return this.setState({ cityFilter: null });
      }
      this.setState({ cityFilter: key });
   };

	filteredCategories(filter, cityFilter) {
		const { results } = this.props;
		const regex = new RegExp(`${filter}`, 'i');

		return Object.keys(results)
			.filter(key => (cityFilter ? cityFilter === key : true))
			.reduce((acc, key) => {
				return (
					{
						...acc,
						[key]: {
							icon: results[key].icon,
							data: results[key].data.filter(e => (filter.length ? regex.test(e.where) || regex.test(e.name) : true))
						}
					}
				);
			}, {});
	}

	render(props, { filter, cityFilter }) {
		const { results: stores } = props;
		const filteredStores = this.filteredCategories(filter, cityFilter)

		return (
			<Fragment>
        <h1 class="text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center capitalize">{`${process.env.PREACT_APP_CITY}`}</h1>
				<div class="relative py-5 lg:max-w-5xl xl:max-w-6xl lg:m-auto">
					<input
						class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
						type="text"
						placeholder="Scrivi qui il tuo paese o il nome dell'attività"
						onInput={this.handleChangeFilter}
					/>
				</div>
        <p class="pb-2">Oppure filtra per categoria:</p>
				<div class="relative pb-5 flex overflow-x-scroll lg:overflow-x-hidden lg:flex-wrap">
					{Object.keys(stores).map(key => (
						<button
							onClick={this.handleCityFilter(key)}
							class={`mr-2 flex-grow-0 flex-shrink-0 items-center border border-blue-500 py-2 px-4 rounded-lg ${
								key === cityFilter
									? "bg-blue-500 hover:bg-blue-500 text-white outline-none text-white"
									: "bg-white hover:bg-blue-500 hover:text-white"
							}`}
						>
							<span>{`${stores[key].icon} ${key}`}</span>
						</button>
					))}
				</div>
				<div class="relative mb-10 text-md text-gray-800">
					{
						Object.keys(filteredStores)
							.filter(key => filteredStores[key].data.length)
							.map(key => (
								<ListCategory
									name={key}
									category={filteredStores[key]}
									filter={filter}
								/>
							))
					}
				</div>
				<div class="text-center w-full">
					<p class="mb-5">
						Developed with ❤️ by
						<a class="text-orange-500" href={process.env.PREACT_APP_DEV_LINK}> {process.env.PREACT_APP_DEV_NAME}, special thanks to Matteo Bernardi</a>
					</p>
          <a href="https://www.instagram.com/vallecamonica_delivery/"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block hover:underline"
          >Visita la nostra pagina Instagram</a>
          <a href="https://github.com/tomma5o/domicilioBoilerplate"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block text-gray-500 hover:underline"
          >Se vuoi crearlo per la tua città visita la pagina GitHub del progetto</a>
          <p class="mb-5">
            <a href="https://www.iubenda.com/privacy-policy/24435749" class="iubenda-white iubenda-embed" title="Privacy Policy ">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/24435749" class="iubenda-white iubenda-embed" title="Cookie Policy ">Cookie Policy</a>
          </p>
				</div>
			</Fragment>
		);
	}
}
