import { Component, Fragment } from 'preact';
import {
   auth,
   database
} from '../firebase.js';

// Images
import CloseIcon from '../assets/svg/icon_close.svg';
import PinIcon from '../assets/svg/map_pin.svg';

export default class AdminDialog extends Component {

   constructor() {
      super();
      this.state = {
         loading: false,
         store: {
            "hidden": false,
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
      // this.setState(prevState => ({
      //    ...prevState,
      //    store: {
      //       ...prevState.store,
      //       [e.target.name]: e.target.value
      //    }
      // }))
   }

   handleDayChange(e) {
      // this.setState(prevState => ({
      //    ...prevState,
      //    store: {
      //       ...prevState.store,
      //       when: {
      //          ...prevState.store.when,
      //          [e.target.name]: e.target.checked
      //       }
      //    }
      // }))
   }

   handleSubmit = (e) => {

      // const form = document.getElementById('theForm');
      // let isFormValid = form.checkValidity();

      // if (isFormValid) {
      //    this.submitForm(e)
      // }
   }

   submitForm = (e) => {

      // e.preventDefault()

      // this.setState({ loading: true }, () => {

      //    const listingRef = database.ref('listing')
      //    const store = this.state.store;
      //    listingRef.push(store);
      //    setTimeout(() => {
      //       this.setState({
      //          loading: false,
      //          store: {
      //             "hidden": false,
      //             "name": '',
      //             "category": "pending",
      //             "desc": null,
      //             "tel": '',
      //             "site": '',
      //             "mail": '',
      //             "insta": '',
      //             "facebook": '',
      //             "menu_link": '',
      //             "services": '',
      //             "payments": '',
      //             "note": '',
      //             "where": '',
      //             "when": {
      //                "lun": false,
      //                "mar": false,
      //                "mer": false,
      //                "gio": false,
      //                "ven": false,
      //                "sab": false,
      //                "dom": false
      //             },
      //             "delivery_fee": '',
      //             "min_order": '',
      //             "post_covid": ''
      //          }
      //       })
      //       route('/form/success', true)
      //    }, 1000)

      // })

      // // const form = document.getElementById('theForm');

      // // const options = {
      // //    headers: { 'Authorization': `token ${process.env.PREACT_APP_GITHUB_TOKEN}` }
      // // };

      // // const content = {
      // //    "description": "vcd - created from form",
      // //    "public": false,
      // //    "files": {
      // //       "vallecamonicadelivery - new.json": {
      // //          "content": JSON.stringify(this.createTheJson(getFormData(form)))
      // //       }
      // //    }
      // // }



      // // axios.post('https://api.github.com/gists', content, options)
      // //    .then((response) => {
      // //       this.setState({ loading: false, gistUrl: response.data.html_url })
      // //       route('/form/success', true)

      // //       const senderEmail = process.env.REACT_APP_EMAILJS_MAIL
      // //       const receiverEmail = process.env.REACT_APP_EMAILJS_MAIL
      // //       const text = response.data.html_url

      // //       emailjs.send(
      // //          'default_service',
      // //          'default',
      // //          {
      // //             senderEmail,
      // //             receiverEmail,
      // //             text
      // //          }
      // //       ).then((response) => {

      // //       }, (error) => {
      // //          console.log(error);
      // //       });


      // //    }, (error) => {
      // //       console.log(error);
      // //    });



   }

   componentDidMount() {
      // emailjs.init(process.env.PREACT_APP_EMAILJS_USERID);
   }

   render() {

      const { isOpen,
         closePopup,
         closePopupFromButton,
         name,
         desc,
         tel,
         mail,
         site,
         services,
         payments,
         where,
         when,
         note,
         min_order,
         delivery_fee,
         insta,
         facebook } = this.props;

      return (
         <dialog
            class="fixed inset-x-0 top-0 backdrop w-screen h-screen z-20 vcdDialog overflow-y-scroll overflow-x-hidden"
            style={{ display: isOpen ? "initial" : "none" }}
            onClick={closePopup}
            id="adminPopupDialog"
         >
            <div
               class="w-full md:w-5/6 max-w-screen-lg shadow-lg bg-white vcdDialog-inner mb-10 pb-10 border-b-8 border-vcd-rosa"
            >
               <div class="flex justify-start md:justify-center items-center bg-vcd-azzurro p-3 md:p-6 relative">

                  <div class="md:text-center w-full md:w-auto">
                     <h2 class="text-2xl font-bold text-white pr-10 md:pr-0 leading-tight">{name}</h2>
                     <p class="text-white text-xs pr-10 md:pr-0">
                        <PinIcon class="inline-block" width="20" height="20" style="margin-top:-5px;" />
                        {desc}
                     </p>
                  </div>

                  <button
                     class="vcd-closeButton z-30"
                     onClick={closePopupFromButton}
                  ><CloseIcon /></button>

                  <form></form>

               </div>


            </div>
         </dialog>
      )
   }
}