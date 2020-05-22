
import { Component, Fragment } from 'preact';
import { Router, route } from 'preact-router';
import { Link } from 'preact-router/match';
import firebase from '../firebase.js';

// import axios from 'axios';

import emailjs from 'emailjs-com';

// Images
import LeftArrow from '../assets/svg/left_arrow.svg';
import Deco from '../assets/svg/decoration.svg';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

export default class Form extends Component {

   constructor() {
      super();
      this.state = {
         loading: false,
         store: {
            "hidden": true,
            "name": '',
            "category": "pending",
            "desc": null,
            "tel": '',
            "site": '',
            "mail": '',
            "insta": '',
            "facebook": '',
            "menu_link": '',
            "services": '',
            "payments": '',
            "note": '',
            "where": '',
            "when": {
               "lun": false,
               "mar": false,
               "mer": false,
               "gio": false,
               "ven": false,
               "sab": false,
               "dom": false
            },
            "delivery_fee": '',
            "min_order": '',
            "post_covid": ''
         }
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleDayChange = this.handleDayChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
      this.setState(prevState => ({
         ...prevState,
         store: {
            ...prevState.store,
            [e.target.name]: e.target.value
         }
      }))
   }

   handleDayChange(e) {
      this.setState(prevState => ({
         ...prevState,
         store: {
            ...prevState.store,
            when: {
               ...prevState.store.when,
               [e.target.name]: e.target.checked
            }
         }
      }))
   }

   handleSubmit = (e) => {

      const form = document.getElementById('theForm');
      let isFormValid = form.checkValidity();

      if (isFormValid) {
         this.submitForm(e)
      }
   }

   // createTheJson = (data) => {
   //    let dataModel = {
   //       "hidden": false,
   //       "name": `${data.name ? data.name : ''}`,
   //       "desc": "descrizione",
   //       "tel": `${data.telephone ? data.telephone : ''}`,
   //       "site": `//${data.site ? data.site : ''}`,
   //       "mail": `${data.mail ? data.mail : ''}`,
   //       "insta": `${data.instagram ? data.instagram : ''}`,
   //       "facebook": `${data.facebook ? data.facebook : ''}`,
   //       "menu_link": "",
   //       "services": "",
   //       "payments": "",
   //       "note": `${data.note ? data.note : ''}`,
   //       "where": `${data.delivery_city ? data.delivery_city : ''}`,
   //       "when": {
   //          "lun": `${data.delivery_day_Lun}` === 'undefined' ? 0 : 1,
   //          "mar": `${data.delivery_day_Mar}` === 'undefined' ? 0 : 1,
   //          "mer": `${data.delivery_day_Mer}` === 'undefined' ? 0 : 1,
   //          "gio": `${data.delivery_day_Gio}` === 'undefined' ? 0 : 1,
   //          "ven": `${data.delivery_day_Ven}` === 'undefined' ? 0 : 1,
   //          "sab": `${data.delivery_day_Sab}` === 'undefined' ? 0 : 1,
   //          "dom": `${data.delivery_day_Dom}` === 'undefined' ? 0 : 1
   //       },
   //       "delivery_fee": `${data.delivery_fee ? data.delivery_fee : ''}`,
   //       "min_order": `${data.min_order ? data.min_order : ''}`,
   //       "post_covid": `${data.post_covid ? data.post_covid : ''}`
   //    }
   //    return dataModel
   // }

   submitForm = (e) => {

      e.preventDefault()

      this.setState({ loading: true }, () => {

         const listingRef = firebase.database().ref('listing')
         const store = this.state.store;
         console.log(store)
         listingRef.push(store);
         setTimeout(() => {
            this.setState({
               loading: false,
               store: {
                  "hidden": true,
                  "name": '',
                  "category":"pending",
                  "desc": null,
                  "tel": '',
                  "site": '',
                  "mail": '',
                  "insta": '',
                  "facebook": '',
                  "menu_link": '',
                  "services": '',
                  "payments": '',
                  "note": '',
                  "where": '',
                  "when": {
                     "lun": false,
                     "mar": false,
                     "mer": false,
                     "gio": false,
                     "ven": false,
                     "sab": false,
                     "dom": false
                  },
                  "delivery_fee": '',
                  "min_order": '',
                  "post_covid": ''
               }
            })
         }, 1000)

      })

      // const form = document.getElementById('theForm');

      // const options = {
      //    headers: { 'Authorization': `token ${process.env.PREACT_APP_GITHUB_TOKEN}` }
      // };

      // const content = {
      //    "description": "vcd - created from form",
      //    "public": false,
      //    "files": {
      //       "vallecamonicadelivery - new.json": {
      //          "content": JSON.stringify(this.createTheJson(getFormData(form)))
      //       }
      //    }
      // }



      // axios.post('https://api.github.com/gists', content, options)
      //    .then((response) => {
      //       this.setState({ loading: false, gistUrl: response.data.html_url })
      //       route('/form/success', true)

      //       const senderEmail = process.env.REACT_APP_EMAILJS_MAIL
      //       const receiverEmail = process.env.REACT_APP_EMAILJS_MAIL
      //       const text = response.data.html_url

      //       emailjs.send(
      //          'default_service',
      //          'default',
      //          {
      //             senderEmail,
      //             receiverEmail,
      //             text
      //          }
      //       ).then((response) => {

      //       }, (error) => {
      //          console.log(error);
      //       });


      //    }, (error) => {
      //       console.log(error);
      //    });



   }

   componentDidMount() {
      emailjs.init(process.env.PREACT_APP_EMAILJS_USERID);
   }

   render() {

      const { loading, store } = this.state;

      return (
         <Fragment>
            <div class="max-w-screen-lg mx-auto px-5">

               <Link onClick={() => { gtagEvent('custom_click', 'form', 'click on torna indietro') }} class="text-vcd-rosa text-xs md:text-sm" href="/"><LeftArrow />torna indietro</Link>

               <h2 className="text-center font-light text-vcd-rosa tracking-wide form-heading my-5 md:my-10">
                  <span class="bg-white inline-block relative z-10 px-10 uppercase">AGGIUNGI LA TUA ATTIVITÀ</span>
               </h2>
               <p class="mb-5 text-center"><b>Compila il form</b> qui sotto per <b>inviare la richiesta</b> e aggiungere la tua attività</p>
               <form class="mt-10" id="theForm" onSubmit={this.handleSubmit}>


                  <div class="flex flex-wrap">

                     <div class="w-full md:w-1/2 px-2 mb-5">
                        <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" required type="text" name="name" placeholder="Nome attività" onChange={this.handleChange} value={this.state.store.name} />
                     </div>

                     <div class="w-full md:w-1/2 px-2 mb-5">
                        <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="tel" inputmode="numeric" name="tel" placeholder="Numero di telefono" onChange={this.handleChange} value={this.state.store.tel} />
                     </div>

                  </div>

                  <div class="flex flex-wrap">

                     <div class="w-full md:w-1/2 px-2 mb-5">
                        <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" required type="text" name="mail" placeholder="E-mail" onChange={this.handleChange} value={this.state.store.mail} />
                     </div>

                     <div class="w-full md:w-1/2 px-2 mb-5">
                        <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="site" placeholder="Sito Web" onChange={this.handleChange} value={this.state.store.site} />
                     </div>

                  </div>

                  <div class="flex flex-wrap border-b-2 border-vcd-rosa">

                     <div class="w-full md:w-1/2 px-2 mb-5">
                        <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="insta" placeholder="Link Instagram" onChange={this.handleChange} value={this.state.store.insta} />
                     </div>

                     <div class="w-full md:w-1/2 px-2 mb-10">
                        <input class="bg-white border border-gray-500 py-2 px-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="facebook" placeholder="Link Facebook" onChange={this.handleChange} value={this.state.store.facebook} />
                     </div>

                  </div>

                  <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

                     <div class="w-full px-2 mb-10">
                        <label>Dove consegni? (specifica qui i comuni in cui puoi effettuare le consegne)
                <textarea class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" required type="text" name="where" placeholder="es. Edolo, Ponte di Legno, Darfo Boario Terme, Lovere" onChange={this.handleChange} value={this.state.store.where} />
                        </label>
                     </div>

                  </div>

                  <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

                     <div class="w-full px-2 mb-10">
                        <label class="">In quali giorni è attivo il servizio?
                <div class="mt-4 text-xs flex justify-start items-center mx-auto flex-wrap">

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse day-label">Lunedì
                      <input class="custom-checkbox" type="checkbox" name="lun" onClick={this.handleDayChange} />
                                 </label>
                              </div>

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse day-label">Martedì
                      <input class="custom-checkbox" type="checkbox" name="mar" onClick={this.handleDayChange} />
                                 </label>
                              </div>

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse day-label">Mercoledì
                      <input class="custom-checkbox" type="checkbox" name="mer" onClick={this.handleDayChange} />
                                 </label>
                              </div>

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse day-label">Giovedì
                      <input class="custom-checkbox" type="checkbox" name="gio" onClick={this.handleDayChange} />
                                 </label>
                              </div>

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse day-label">Venerdì
                      <input class="custom-checkbox" type="checkbox" name="ven" onClick={this.handleDayChange} />
                                 </label>
                              </div>

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse day-label">Sabato
                      <input class="custom-checkbox" type="checkbox" name="sab" onClick={this.handleDayChange} />
                                 </label>
                              </div>

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse day-label">Domenica
                      <input class="custom-checkbox" type="checkbox" name="dom" onClick={this.handleDayChange} />
                                 </label>
                              </div>

                           </div>
                        </label>
                     </div>

                  </div>

                  <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

                     <div class="w-auto px-2 mb-10">
                        <label>Costo consegna
                <input class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="delivery_fee" placeholder="es. 2€" onChange={this.handleChange} value={this.state.store.delivery_fee} />
                        </label>
                     </div>
                     <div class="w-auto px-2 mb-10">
                        <label>Ordine minimo
                <input class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="min_order" placeholder="es. 10€" onChange={this.handleChange} value={this.state.store.min_order} />
                        </label>
                     </div>

                  </div>

                  <div class="flex flex-wrap border-b-2 border-vcd-rosa mt-10">

                     <div class="w-full px-2 mb-10">
                        <label class="">Saresti interessato a mantenere attivo il servizio anche dopo il periodo di lockdown dovuto al COVID-19?
                <div class="mt-4 text-xs flex justify-start items-center mx-auto flex-wrap">

                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse covid-label">Si
                      <input required class="custom-radio" type="radio" name="post_covid" value="si" onChange={this.handleChange} />
                                 </label>
                              </div>
                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse covid-label">No
                      <input required class="custom-radio" type="radio" name="post_covid" value="no" onChange={this.handleChange} />
                                 </label>
                              </div>
                              <div class="mr-5 mb-2 md:mb-0">
                                 <label class="flex justify-center items-center flex-col-reverse covid-label">Forse
                      <input required class="custom-radio" type="radio" name="post_covid" value="forse" onChange={this.handleChange} />
                                 </label>
                              </div>
                           </div>
                        </label>
                     </div>

                  </div>

                  <div class="flex flex-wrap mt-10">

                     <div class="w-full px-2 mb-10">
                        <label class="">Note
                <textarea class="bg-white border border-gray-500 py-2 px-4 mt-4 block w-full appearance-none leading-normal text-xs sm:text-base rounded" type="text" name="note" style="height:150px" placeholder="es. Domenica solo a pranzo" onChange={this.handleChange} value={this.state.store.note} />
                        </label>
                        <p class="mt-5 text-xs">Inviando la richiesta confermi di di aver letto e accettato la nostra <a target="_blank" class="underline" href="https://www.iubenda.com/privacy-policy/19385130">Privacy Policy</a>.</p>
                     </div>

                  </div>

                  <div class="flex flex-wrap">

                     <div class="w-full text-center px-2 mb-10">
                        <button class="vcd-button w-full text-center md:w-auto" type="submit">{loading ? <span>loading...</span> : <span>invia la richiesta</span>}</button>
                     </div>

                  </div>

               </form>

            </div>
            <Deco className="hidden lg:block deco deco--left" />
            <Deco className="hidden lg:block deco deco--right" />
         </Fragment>
      )
   }
}
