// Components
import { D_Contacts } from './dialog_contacts';
import { D_Services } from './dialog_services';
import { D_Payments } from './dialog_payments';
import { D_Notes } from './dialog_notes';
import { D_Where } from './dialog_where';
import { D_When } from './dialog_when';

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
	note
}) => {
	return (
		<dialog 
			class="fixed inset-x-0 top-0 backdrop w-screen h-screen"
			style={{display: isOpen ? "initial" : "none"}}
			onClick={closePopup}
		>
			<div
				class="absolute w-5/6 max-w-screen-md bg-white p-6 shadow-lg"
				style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
			>
				<div class="flex justify-between">
					<h1 class="text-2xl mb-5 font-bold flex-1">{name}</h1>
					<span
						class="bg-teal-500 text-center cursor-pointer text-white"
						style={{ width: '30px', height: '30px', lineHeight: '30px' }}
						onClick={closePopup}
					>X</span>
				</div>
        {where && <D_Where {...{where}} />}
        {when && <D_When {...{when}} />}
				{note && <D_Notes {...{note}} />}
				<D_Contacts {...{tel, mail, site}} />
				{payments && <D_Payments {...{payments}} />}
				{services && <D_Services {...{services}} />}
			</div>
		</dialog>
	);
};
