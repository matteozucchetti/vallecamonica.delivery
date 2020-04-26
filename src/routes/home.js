import { Component, Fragment } from 'preact';

import { ListCategory } from '../components/listCategory';

export default class Home extends Component {
	state = {
		filter: '',
		cityOrNameFilter: null
	};

	handleChangeFilter = e => {
		const text = e.target.value;
		this.setState({ filter: text });
	};

	handleFilter = key => _ => { // eslint-disable-line no-unused-vars
      if (key === this.state.cityOrNameFilter) {
         return this.setState({ cityOrNameFilter: null });
      }
      this.setState({ cityOrNameFilter: key });
   };

	filteredCategories(filter, cityOrNameFilter) {
		const { results } = this.props;
		const regex = new RegExp(`${filter}`, 'i');

		return Object.keys(results)
			.filter(key => (cityOrNameFilter ? cityOrNameFilter === key : true))
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

	render(props, { filter, cityOrNameFilter }) {
		const { results: stores } = props;
		const filteredStores = this.filteredCategories(filter, cityOrNameFilter)

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
							onClick={this.handleFilter(key)}
							class={`mr-2 flex-grow-0 flex-shrink-0 items-center border border-blue-500 py-2 px-4 rounded-lg ${
								key === cityOrNameFilter
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
			</Fragment>
		);
	}
}
