import { Fragment } from "preact";

// Images
import CheckIcon from '../assets/svg/icon_check.svg';

export const D_When = ({when}) => {

	return (
		<Fragment>
      <div class="vcd-dialogBox">
        <div class="w-full">
    			<h3 class="mt-4 mb-2">Giorni</h3>
    			<div class="mb-2 mt-4 text-xs flex justify-center items-center max-w-screen-sm mx-auto flex-wrap">

            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.lun
                ? "active"
                : "inactive"
              }`} />
              Lunedì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.mar
                ? "active"
                : "inactive"
              }`} />
              Martedì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.mer
                ? "active"
                : "inactive"
              }`} />
              Mercoledì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.gio
                ? "active"
                : "inactive"
              }`} />
              Giovedì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.ven
                ? "active"
                : "inactive"
              }`} />
              Venerdì
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.sab
                ? "active"
                : "inactive"
              }`} />
              Sabato
            </div>
            <div class="flex-1 mx-5 mb-2 md:mb-0">
              <CheckIcon class={`day-check ${
                when.dom
                ? "active"
                : "inactive"
              }`} />
              Domenica
            </div>

    			</div>
        </div>
      </div>
		</Fragment>
	);
};
