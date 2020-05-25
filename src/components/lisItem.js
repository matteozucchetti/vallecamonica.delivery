import { useContext } from 'preact/hooks';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; //todo

// Actions
import { Action } from '../index';

import {
   deleteStore
} from '../firebase.js';

// gtag
import gtagEvent from '../utils/gtagEvents.js';

// Images
import IconInfo from '../assets/svg/icon_info.svg';
import IconTel from '../assets/svg/icon_tel.svg';
import CloseIcon from '../assets/svg/icon_close.svg';

export const ListItem = (props) => {
   const { name, desc, tel, site, mail, payments, services, note, where, when, admin, id } = props;
   

   const action = useContext(Action);
   const isInfoVisible = Boolean(tel || site || mail || payments || services || note || where);

   const getDay = () => {
      let d = new Date();
      let weekday = new Array(7);
      weekday[0] = "dom";
      weekday[1] = "lun";
      weekday[2] = "mar";
      weekday[3] = "mer";
      weekday[4] = "gio";
      weekday[5] = "ven";
      weekday[6] = "sab";

      let n = weekday[d.getDay()];
      return n
   }


   const isOpenToday = () => {
      let today = getDay()
      return Boolean(when[today])
   }

   const handleDelete = (id) => {

      confirmAlert({
         customUI: ({ onClose }) => {
            let itemId = id;
            return (
               <div className='custom-ui'>
                  <h1>Are you sure?</h1>
                  <p>You want to delete this file?</p>
                  <button onClick={onClose}>No</button>
                  <button
                     onClick={() => {
                        deleteStore(itemId)
                        onClose();
                     }}
                  >
                     Yes, Delete it!
        </button>
               </div>
            );
         }
      });

   }

   return (
      <article class={`relative cursor-pointer flex justify-center items-stretch w-full my-5 ${isOpenToday() ? "" : "closed-today"}`}>

         <div onClick={(e) => { gtagEvent('custom_click', 'listing - shop name', name), action.setAdminPopupNumbers(e, props) }} class="flex flex-auto justify-center items-start flex-col border border-vcd-black rounded px-2 py-2 md:p-2">
            <span class="text-sm md:text-base font-semibold">{name}</span>
            <span class="text-xs leading-none">{desc}</span>
         </div>

         {isInfoVisible &&
            <div onClick={(e) => { gtagEvent('custom_click', 'listing - info icon', name), action.setAdminPopupNumbers(e, props) }} class="vdc-infoButtons vdc-infoButtons--info">
               <span
                  role="img"
                  aria-label="more info"
               ><IconInfo width="100%" fill="#fff" />
               </span>
            </div>
         }

         {tel && !admin && (
            <div class="vdc-infoButtons vdc-infoButtons--tel">
               <a href={`tel:${tel}`} onClick={
                  (e) => { gtagEvent('custom_click', 'listing - tel icon', name), tel.length > 1 && action.setAdminPopupNumbers(e, props) }
               }>
                  <span
                     role="img"
                     aria-label="telephone"
                  ><IconTel width="100%" fill="#fff" />
                  </span>
               </a>
            </div>
         )}

         {admin &&
            <div onClick={() => {handleDelete(id)}} class="vdc-infoButtons vdc-infoButtons--tel">
               <span
                  role="img"
                  aria-label="delete item"
            ><CloseIcon width="100%" />
               </span>
            </div>
         }

      </article>
   );
};
