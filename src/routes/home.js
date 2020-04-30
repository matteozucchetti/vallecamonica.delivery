import { Component, Fragment } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Scrollchor from "preact-scrollchor"

import { ListCategory } from '../components/listCategory';

// Images
import InstaBadge from '../assets/svg/insta_profile.svg';
import Deco from '../assets/svg/hp_decoration.svg';

export default class Home extends Component {
	state = {
		filter: '',
		categoryFilter: null
	};

	handleChangeFilter = e => {
		const text = e.target.value;
		this.setState({ filter: text });
	};

	handleCategoryFilter = key => _ => { // eslint-disable-line no-unused-vars
      if (key === this.state.categoryFilter) {
         return this.setState({ categoryFilter: null });
      }
      this.setState({ categoryFilter: key });
   };

	filteredCategories(filter, categoryFilter) {
		const { results } = this.props;
		const regexStore = new RegExp(`${filter}`, 'i');
    const regexCategory = new RegExp(`[${filter}]{${filter.length},}`, 'i');

		return Object.keys(results)
			.filter(key => (categoryFilter ? categoryFilter === key : true))
			.reduce((acc, key) => {
        return (
          {
            ...acc,
            [key]: {
              icon: results[key].icon,
              data: regexCategory.test(key)
               ? results[key].data
               : results[key].data.filter(e =>
                    filter.length ? regexStore.test(e.where) || regexStore.test(e.name) : true
                 )
            }
          }
        );
      }, {});
	}

  isEmptySearch(filteredStores) {
    let storesFound = 0;
    for (let key in filteredStores) {
      storesFound += filteredStores[key].data.length;
    }
    return storesFound === 0;
  }

	render(props, { filter, categoryFilter }) {
		const { results: stores } = props;
		const filteredStores = this.filteredCategories(filter, categoryFilter)
    const isEmptySearch = this.isEmptySearch(filteredStores);

		return (
			<Fragment>

        <div class="max-w-screen-lg mx-auto px-5">

          <h2 class="text-center font-thin">Scopri quali attività effettuano consegne a domicilio in Valle Camonica.</h2>
          <h2 class="text-center font-semibold">Ristoranti, pizzerie, bar e negozi direttamente a casa!</h2>


          <div class="flex flex-wrap justify-center items-center mt-10 homepage-buttons-container">
            <Scrollchor to="#search-component" animate={{ duration: 600 }}>
              <button class="vcd-button w-full text-center md:w-auto">cerca nella tua zona</button>
            </Scrollchor>
            <Link href="/form">
              <button class="vcd-button vcd-button--rosa w-full text-center md:w-auto">aggiungi un'attività</button>
            </Link>
          </div>



        </div>

        <div class="bg-vcd-arancione mt-10 py-10 w-full" id="search-component">
          <div class="max-w-screen-lg mx-auto text-center px-5">
            <p class="text-white mb-4">Inserisci il nome del paese o dell'attività che stai cercando</p>
            <input
              class="bg-white py-3 px-4 w-full appearance-none leading-normal text-center rounded text-lg font-semibold focus:outline-none mb-8"
              type="text"
              placeholder="es. Edolo, Syesta, Nami Sushi"
              onInput={this.handleChangeFilter}
            />
            <p class="text-white mb-4">Filtra per categoria</p>
            <div class="flex overflow-x-scroll md:overflow-x-visible md:flex-wrap md:justify-center">
              {Object.keys(stores).map(key => (
                <button
                  onClick={this.handleCategoryFilter(key)}
                  class={`vcd-category-button mx-2 mb-2 flex-grow-0 flex-shrink-0 ${
                    key === categoryFilter
                      ? "vcd-category-button--pressed"
                      : ""
                  }`}
                >
                  <span>{key}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div class="max-w-screen-lg mx-auto mt-10 px-5">
				
  				
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
            {isEmptySearch && (
              <span class="my-5 block">Oops! Non abbiamo trovato risultati corrispondenti alla tua ricerca.</span>
            )}

        </div>

        <div class="w-full mx-auto px-5 pb-10 text-center relative" id="insta-component">
          
          <a href="https://www.instagram.com/vallecamonica_delivery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstaBadge />
            <p class="text-xl md:text-2xl font-thin my-5">@vallecamonica_delivery</p>
            <p class="font-thin mb-5">Seguici su Instagram<br />per rimanere sempre aggiornato sulle ultime novità</p>
            <button class="vcd-button w-full text-center md:w-auto">seguici</button>
          </a>
          <Deco className="hidden md:block hp-deco hp-deco--left" />
          <Deco className="hidden md:block hp-deco hp-deco--right" />
        </div>
        
			</Fragment>
		);
	}
}
