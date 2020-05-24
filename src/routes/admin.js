import { Component, Fragment } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import {
   auth,
   database
} from '../firebase.js';

import { ListCategory } from '../components/listCategory';

export default class Admin extends Component {

   constructor() {
      super();
      this.state = {
         loading: false,
         loadingLogin: false,
         stores: [],
         email: null,
         password: null,
         userLogged: null
      };
      this.handleChange = this.handleChange.bind(this);
      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   signIn(email, password) {

      event.preventDefault();

      this.setState({ loadingLogin: true }, () => {

         auth.signInWithEmailAndPassword(email, password)
            .then(() => {
               this.setState({loadingLogin: false })
            }).catch((error) => {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               if (errorCode === 'auth/wrong-password') {
                  alert('Wrong password.');
               } else {
                  alert(errorMessage);
               }
               console.log(error);
            });

      })

   }

   signOut() {
      auth.signOut().then(() => {

      }).catch((error) => {
         console.log(error);
      });

   }

   groupBy = (xs, key) => {
      return xs.reduce(function (rv, x) {
         (rv[x[key]] = rv[x[key]] || []).push(x);
         return rv;
      }, {});
   };

   groupedByCategories() {
      const stores = this.state.stores;
      let groupBy = function (xs, key) {
         return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
         }, {});
      };
      return this.groupBy(stores, 'category')
   }

   componentDidMount() {

      auth.onAuthStateChanged(userAuth => {
         this.setState({ userLogged: userAuth ? true : false });
      });

      const listingRef = database.ref('listing').orderByChild("category")
      this.setState({ loading: true }, () => {

         listingRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
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

   render(props) {

      const { stores, loading, loadingLogin, userLogged, email, password } = this.state;
      const groupedByCategories = this.groupedByCategories();

      return (
         <Fragment>

            <h2 class="text-center font-thin mb-5">Admin</h2>

            <div class="max-w-screen-lg mx-auto px-5 mb-10">

               {!userLogged &&

                  <form>

                     <div class="flex flex-wrap">

                        <div class="w-full md:w-1/2 px-2 mb-5">
                           <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-sm rounded" type="email" name="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email} />
                        </div>

                        <div class="w-full md:w-1/2 px-2 mb-5">
                           <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-sm rounded" type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                        </div>

                        <button
                           onClick={() => { this.signIn(this.state.email, this.state.password) }}
                           class="vcd-button w-full text-center md:w-auto mx-auto">
                           {loadingLogin ? <span>Loading...</span> : <span>Log In</span>}
                        </button>

                     </div>

                  </form>}

               {userLogged &&
                  <div class="flex flex-wrap">
                     <button
                        onClick={() => { this.signOut() }}
                        class="vcd-button vcd-button--rosa w-full text-center md:w-auto mx-auto">
                        Log Out
              </button>
                  </div>}

            </div>

            {userLogged && <div class="max-w-screen-lg mx-auto my-10 px-2 md:px-5" id="listing-component">

               {
                  Object.keys(groupedByCategories)
                     .filter(item => item === 'pending')
                     .map(item => {
                        return (
                           <ListCategory
                              name={item}
                              stores={groupedByCategories[item]}
                              admin={true}
                           />
                        )
                     })
               }
               {
                  Object.keys(groupedByCategories)
                     .filter(item => item != 'pending')
                     .map(item => {
                        return (
                           <ListCategory
                              name={item}
                              stores={groupedByCategories[item]}
                              admin={true}
                           />
                        )
                     })
               }
               {loading && (
                  <span class="my-5 block">Loading...</span>
               )}

            </div>}

         </Fragment>
      );
   }
}
