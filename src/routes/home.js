import { Component, Fragment } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Scrollchor from "preact-scrollchor";
import firebase from '../firebase.js';

import { ListCategory } from '../components/listCategory';

// Images
import InstaBadge from '../assets/svg/insta_profile.svg';
import Deco from '../assets/svg/decoration.svg';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

// scrollTo
import scrollTo from '../utils/scrollTo.js';

export default class Home extends Component {
   state = {
      nameFilter: '',
      categoryFilter: null,
      loading: false,
      stores: []
   };

   handleChangeFilter = e => {
      const text = e.target.value;
      this.setState({ nameFilter: text });
   };

   handleCategoryFilter = key => _ => {
      if (key === this.state.categoryFilter) {
         return this.setState({ categoryFilter: null });
      }
      this.setState({ categoryFilter: key });
      gtagEvent('custom_click', 'home', 'click on category filter ' + key)
   };

   filteredCategories(nameFilter, categoryFilter) {
      const stores = this.state.stores;
      const regexStore = new RegExp(`${nameFilter}`, 'i');
      const regexCategory = new RegExp(`[${nameFilter}]{${nameFilter.length},}`, 'i');

      return Object.values(stores)
         .filter(store => (categoryFilter ? categoryFilter === store.category : true))
         .filter(store => nameFilter.length ? regexStore.test(store.where) || regexStore.test(store.name) || regexCategory.test(store.category) : true)
         .filter(store => store.hidden != true)
         .filter(store => store.category != 'pending')
   }

   isEmptySearch(filteredStores) {
      let storesFound = 0;
      storesFound += filteredStores.length;
      return storesFound === 0;
   }

   handleKeyPress = e => {
      if (e.keyCode === 13) {
         scrollTo(
            document.querySelector('#listing-component'),
            600,
            'easeOutQuad',
            () => (document.getElementById("search-input").blur())
         );
      }
   };

   componentDidMount() {

      this.targetElement = document.querySelector('#popupDialog');

      const listingRef = firebase.database().ref('listing')
      this.setState({ loading: true }, () => {

         // listingRef.on('value', (snapshot) => {
         //    let json = snapshot.val();
         //    this.setState({
         //       stores: json,
         //       loading: false
         //    });
         // });

         listingRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
               // console.log(...item)
               newState.push({
                  id: item,
                  category: items[item].category,
                  delivery_fee: items[item].delivery_fee,
                  desc: items[item].desc,
                  facebook: items[item].facebook,
                  hidden: items[item].hidden,
                  insta: items[item].insta,
                  mail: items[item].mail,
                  menu_link: items[item].menu_link,
                  min_order: items[item].min_order,
                  name: items[item].name,
                  note: items[item].note,
                  payments: items[item].payments,
                  services: items[item].services,
                  site: items[item].site,
                  tel: items[item].tel,
                  when: {
                     dom: items[item].when.dom,
                     gio: items[item].when.gio,
                     lun: items[item].when.lun,
                     mar: items[item].when.mar,
                     mer: items[item].when.mer,
                     sab: items[item].when.sab,
                     ven: items[item].when.ven
                  },
                  where: items[item].where
               });
            }
            this.setState({
               stores: newState,
               loading: false
            });
         });

      })

   }

   render(props, { nameFilter, categoryFilter }) {

      const { stores, loading } = this.state;
      const filteredStores = this.filteredCategories(nameFilter, categoryFilter)
      const isEmptySearch = this.isEmptySearch(filteredStores);

      return (
         <Fragment>

            <div class="max-w-screen-lg mx-auto px-5">

               <h2 class="text-center font-thin">Scopri quali attività effettuano consegne a domicilio in Valle Camonica.</h2>
               <h2 class="text-center font-semibold">Ristoranti, pizzerie, bar e negozi direttamente a casa!</h2>


               <div class="flex flex-wrap justify-center items-center mt-10 homepage-buttons-container">
                  <Scrollchor to="#search-component" animate={{ duration: 600 }}>
                     <button
                        onClick={() => { gtagEvent('custom_click', 'home', 'click on cerca - scroll down') }}
                        class="vcd-button w-full text-center md:w-auto">
                        cerca nella tua zona
              </button>
                  </Scrollchor>
                  <Link href="/form">
                     <button
                        onClick={() => { gtagEvent('custom_click', 'home', 'click on aggiungi attività') }}
                        class="vcd-button vcd-button--rosa w-full text-center md:w-auto">
                        aggiungi un'attività
              </button>
                  </Link>
               </div>



            </div>

            <div class="bg-vcd-arancione mt-10 py-10 w-full" id="search-component">
               <div class="max-w-screen-lg mx-auto text-center px-5">
                  <p class="text-white mb-4">Inserisci il nome del paese o dell'attività che stai cercando</p>
                  <input
                     class="bg-white py-3 px-4 w-full appearance-none leading-normal text-center rounded text-lg font-semibold focus:outline-none mb-8"
                     id="search-input"
                     type="text"
                     placeholder="es. Edolo, Syesta, Nami Sushi"
                     onInput={this.handleChangeFilter}
                     onkeydown={this.handleKeyPress}
                  />
                  <p class="text-white mb-4">Filtra per categoria</p>
                  <div class="flex overflow-x-scroll md:overflow-x-visible md:flex-wrap md:justify-center">

                     {stores
                     .filter(store => store.category != 'pending')
                     .map(item => {
                        return (
                           <button
                              onClick={this.handleCategoryFilter(item.category)}
                              class={`vcd-category-button mx-2 mb-2 flex-grow-0 flex-shrink-0 ${
                                 item.category === categoryFilter
                                    ? "vcd-category-button--pressed"
                                    : ""
                                 }`}
                           >
                              <span>{item.category}</span>
                           </button>
                        )
                     })}

                  </div>
               </div>
            </div>

            <div class="max-w-screen-lg mx-auto mt-10 px-2 md:px-5" id="listing-component">

               {filteredStores
                  .map((item) => {
                     return (
                        <ListCategory
                           name={item.category}
                           stores={filteredStores}
                        />
                     )
                  })
               }
               {isEmptySearch && !loading && (
                  <span class="my-5 block">Oops! Non abbiamo trovato risultati corrispondenti alla tua ricerca.</span>
               )}
               {loading && (
                  <span class="my-5 block">Caricamento...</span>
               )}

            </div>

            <div class="w-full mx-auto px-5 pb-10 text-center relative" id="insta-component">

               <a href="https://www.instagram.com/vallecamonica_delivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { gtagEvent('custom_click', 'home', 'click on instagram profile link') }}
               >
                  <InstaBadge />
                  <p class="text-xl md:text-2xl font-thin my-5">@vallecamonica_delivery</p>
                  <p class="font-thin mb-5">Seguici su Instagram<br />per rimanere sempre aggiornato sulle ultime novità</p>
                  <button class="vcd-button w-full text-center md:w-auto">seguici</button>
               </a>
               <Deco className="hidden lg:block deco deco--left" />
               <Deco className="hidden lg:block deco deco--right" />
            </div>

         </Fragment>
      );
   }
}
