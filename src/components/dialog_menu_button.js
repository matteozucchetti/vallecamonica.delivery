import { Fragment } from "preact";

export const D_MenuButton = ({ menu_link }) => {

   return (
      <Fragment>
         <div class="vcd-dialogBox">
            <div class="w-full">
               <div class="flex justify-center items-center my-5">
                  <a class="flex-1 mx-2" target="_blank" href={`/assets/media/${menu_link}`}>
                     <button
                        onClick={() => { gtagEvent('custom_click', 'dialog - menu', name) }}
                        class="vcd-button vcd-button--arancione w-full md:w-auto text-center">
                        Guarda il menu
              </button>
                  </a>
               </div>
            </div>
         </div>
      </Fragment>
   );
};
