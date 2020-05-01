// Components
import { D_Contacts } from './dialog_contacts';
import { D_Services } from './dialog_services';
import { D_Payments } from './dialog_payments';
import { D_Notes } from './dialog_notes';
import { D_Where } from './dialog_where';
import { D_When } from './dialog_when';
import { D_DeliveryFee } from './dialog_delivery_fee.js';
import { D_MinOrder } from './dialog_min_order.js';

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
				class="absolute w-5/6 max-w-screen-md p-4 md:p-8 shadow-lg bg-white"
				style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
			>
				<div class="flex justify-between">

					<h2 class="text-2xl mb-5 font-bold flex-1">{name}</h2>

					<span
						class="bg-teal-500 text-center cursor-pointer text-white"
						style={{ width: '30px', height: '30px', lineHeight: '30px' }}
						onClick={closePopup}
					>X</span>

				</div>

        <div class="flex">
          <div class="w-full">
            {where && <D_Where {...{where}} />}
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
            {when && <D_When {...{when}} />}
          </div>
        </div>

        <div class="flex">
          {delivery_fee && <div class="pr-5 md:pr-10"><D_DeliveryFee {...{delivery_fee}} /></div>}
          {min_order && <div class="pr-5 md:pr-10"><D_MinOrder {...{min_order}} /></div>}
        </div>

        <div class="flex">
          <div class="w-full">
  				  {note && <D_Notes {...{note}} />}
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
  				  <D_Contacts {...{tel, mail, site}} />
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
  				  {payments && <D_Payments {...{payments}} />}
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
  				  {services && <D_Services {...{services}} />}
          </div>
        </div>

			</div>
		</dialog>
	);
};
