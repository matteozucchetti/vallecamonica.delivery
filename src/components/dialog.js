// Components
import { D_Contacts } from './dialog_contacts';
import { D_Services } from './dialog_services';
import { D_Payments } from './dialog_payments';
import { D_Notes } from './dialog_notes';
import { D_Where } from './dialog_where';
import { D_When } from './dialog_when';
import { D_DeliveryFee } from './dialog_delivery_fee.js';
import { D_MinOrder } from './dialog_min_order.js';

// Images
import CloseIcon from '../assets/svg/icon_close.svg';
import MailIcon from '../assets/svg/icon_mail.svg';
import WebsiteIcon from '../assets/svg/icon_website.svg';
import FacebookIcon from '../assets/svg/icon_facebook.svg';
import TelIcon from '../assets/svg/icon_tel.svg';

export const Dialog = ({
	isOpen,
	closePopup,
	name,
	tel,
	mail,
	site,
	services,
	payments,
  where,
  when,
	note,
  min_order,
  delivery_fee
}) => {
	return (
		<dialog 
			class="fixed inset-x-0 top-0 backdrop w-screen h-screen z-20"
			style={{display: isOpen ? "initial" : "none"}}
			onClick={closePopup}
		>
			<div
				class="absolute w-5/6 max-w-screen-lg shadow-lg bg-white"
				style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
			>
				<div class="flex justify-center items-center bg-vcd-azzurro p-6 relative">

					<h2 class="text-2xl font-bold text-white">{name}</h2>

					<button
						class="vcd-closeButton"
					><CloseIcon onClick={closePopup} /></button>

				</div>

        <div class="px-6 relative border-b-8 border-vcd-rosa">

          {where && <D_Where {...{where}} />}
          {when && <D_When {...{when}} />}
          {
            (delivery_fee || min_order)
            ?
            <div class="vcd-dialogBox justify-center items-center">
              {delivery_fee && <div class="px-5"><D_DeliveryFee {...{delivery_fee}} /></div>}
              {min_order && <div class="px-5"><D_MinOrder {...{min_order}} /></div>}
            </div>
            : null
          }
          {note && <D_Notes {...{note}} />}
          <D_Contacts {...{tel, mail, site}} />

          {/*
            {payments && <D_Payments {...{payments}} />}
            {services && <D_Services {...{services}} />}
          */}

			 </div>
      </div>
		</dialog>
	);
};
